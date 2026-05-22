import React, { useMemo, useRef, useState } from "react";
import logoStantec from "../assets/images/logos/stantec.jpg";
import logoAKCSE from "../assets/images/logos/akcse.jpeg";
import logoMedal from "../assets/images/logos/medal.jpg";
import logoSUAV from "../assets/images/logos/suav.jpg";

const LOGOS = {
  stantec: logoStantec,
  akcse: logoAKCSE,
  medal: logoMedal,
  suav: logoSUAV,
};

const ITEMS = [
  {
    id: "stantec",
    label: "Stantec",
    title: "Mechanical Engineer-In-Training (EIT)",
    org: "Stantec",
    date: "May 2024 – May 2025, May 2026 – Present",
    location: "Calgary, AB",
    story: [
    "I have always been fond of architecture and dreamt of building my own house one day. My 12-month internship with Stantec helped me step closer to that goal and grow as an engineer in the buildings industry. Being involved in various projects and working with diverse disciplines that support communities was a rewarding experience. Working in a large corporate environment taught me that working smart is about collaborating with people, using resources effectively, building systems, and utilizing what already exists rather than reinventing the wheel.",
    "After graduation, I am continuing this journey with Stantec as an EIT, bringing my digital proficiency while developing deeper expertise in the buildings industry."
    ],
  },

  {
    id: "akcse",
    label: "AKCSE",
    title: "Vice-President",
    org: "AKCSE",
    date: "Sept 2023 – Sept 2025",
    location: "Calgary, AB",
    story: [
      "Through my research background, academic involvement, and connection to the Korean-Canadian community, I saw the potential of the AKCSE U of C Chapter and wanted to help strengthen it through leadership. During my term, I introduced a clearer vision, organizational structure, and communication protocols. I learned how hard work and passion can become contagious, and how the right resources and responsibilities can help individuals grow. By recognizing and maximizing each person’s strengths, I helped build stronger teams. Eventually, AKCSE was able to attract sponsorship from the local community and significantly improve its financial position.",
      "However, leadership also came with challenges. Before AKCSE, I assumed that shared goals and strong performance would naturally create alignment. Through this experience, I learned that the balance between individuals and organizations is shaped by many factors beyond great results, including self-interest, misalignment, unclear communication, and different levels of commitment. Navigating these dynamics wisely became one of my most important leadership lessons. It taught me that strong leadership requires more than technical ability."
    ]
},

  {
    id: "medal",
    label: "MEDAL",
    title: "Research Assistant",
    org: "MEDAL",
    date: "May 2023 – Jun 2024",
    location: "Calgary, AB",
    story:[
    "My time at MEDAL was my first step into professional engineering. I worked with professors and doctors who trusted me with significant freedom and leadership, but at the time, I was still learning how to trust and apply my own engineering judgment. Looking back, I realized that I often stayed within the boundaries of my position and relied too heavily on my mentors’ opinions.",
    "This experience taught me an important lesson: take action and make full use of my abilities. Moving forward, I became more intentional about bringing ideas forward, challenging assumptions, and creating synergy instead of waiting passively.",
    "I also learned more about my strengths. My positive attitude and ability to learn quickly were recognized, allowing me to contribute to various intellectual property formulations. One of my favourite mindsets I learned from my mentor was, “you never know until you try” — and that mindset shaped my approach in every field afterward."
  ]
    },

  {
    id: "suav",
    label: "Schulich UAV",
    title: "Mechanical Team Member",
    org: "Schulich UAV",
    date: "Sept 2022 – Oct 2023",
    location: "Calgary, AB",
    story:
      "When I chose to study engineering, I dreamt of building my own airplane. My interest led me to Schulich UAV, a competitive engineering club that builds carbon-fiber unmanned aerial vehicles (UAVs). Through hands-on work in aircraft design, fabrication, and testing, I truly enjoyed seeing how engineering ideas become real systems. Working with passionate peers also pushed me to step up, ignited my motivation to grow, and helped me recognize the areas I needed to improve. This experience became the spark of my engineering journey and helped me develop a clearer vision of the kind of engineer I wanted to become."
  },
];

const Experience = () => {
  const [selIndex, setSelIndex] = useState(0);
  const touchState = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    active: false,
  });

  const sel = useMemo(() => ITEMS[selIndex], [selIndex]);

  const showIndex = (nextIndex) => {
    const count = ITEMS.length;
    if (!count) return;
    const normalized = (nextIndex + count) % count;
    setSelIndex(normalized);
  };

  const showPrev = () => showIndex(selIndex - 1);
  const showNext = () => showIndex(selIndex + 1);

  const onTouchStart = (event) => {
    if (!event.touches || event.touches.length !== 1) {
      return;
    }
    const touch = event.touches[0];
    touchState.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      lastX: touch.clientX,
      lastY: touch.clientY,
      active: true,
    };
  };

  const onTouchMove = (event) => {
    if (!touchState.current.active || !event.touches || event.touches.length !== 1) {
      return;
    }
    const touch = event.touches[0];
    touchState.current.lastX = touch.clientX;
    touchState.current.lastY = touch.clientY;
  };

  const onTouchEnd = () => {
    if (!touchState.current.active) {
      return;
    }
    const { startX, startY, lastX, lastY } = touchState.current;
    touchState.current.active = false;

    const dx = lastX - startX;
    const dy = lastY - startY;

    if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.2) {
      return;
    }

    if (dx < 0) {
      showNext();
    } else {
      showPrev();
    }
  };

  return (
    <section
      id="experience"
      className="section experience"
      style={{
        "--railTop": "88px",
        "--railH": "calc(100vh - 128px)",
        "--panelMax": "50vh",
        "--panelW": "560px",
      }}
    >
      <h2>Experience</h2>

      {/* centered inner container only */}
      <div className="exp__center">
        <div className="exp__wrap">
          {/* Left rail */}
          <nav className="exp__rail" aria-label="Experience timeline">
            <ol className="exp__list">
              {ITEMS.map((it, index) => {
                const active = sel.id === it.id;
                return (
                  <li key={it.id} className="exp__li">
                    <button
                      type="button"
                      className={`exp__dot${active ? " is-active" : ""}`}
                      onClick={() => {
                        setSelIndex(index);
                      }}
                      aria-label={`${it.label} — ${it.date}`}
                      title={`${it.label} • ${it.date}`}
                      aria-current={active ? "true" : "false"}
                    >
                      {LOGOS[it.id] ? (
                        <img
                          src={LOGOS[it.id]}
                          alt=""
                          className="exp__dotImg"
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="exp__dotFallback" aria-hidden="true">
                          {it.label.charAt(0)}
                        </span>
                      )}
                      <span className="sr-only">{it.label}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* Right panel: tall, scrollable, sticky header */}
          <article
            className="exp__panel"
            role="region"
            aria-label={`${sel.title} story`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchEnd}
          >
            <div className="exp__scroll">
              <header className="exp__head">
                {LOGOS[sel.id] && (
                  <img
                    className="exp__logo"
                    src={LOGOS[sel.id]}
                    alt={`${sel.org} logo`}
                  />
                )}
                <div className="exp__headText">
                  <h3 className="exp__title">
                    {sel.title} — {sel.org}
                  </h3>
                  <div className="exp__meta">
                    {[sel.date, sel.location].filter(Boolean).join(" • ")}
                  </div>
                </div>
              </header>

              <div className="exp__storywrap">
                {Array.isArray(sel.story) ? (
                  sel.story.map((paragraph, index) => (
                    <p key={index} className="exp__story">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="exp__story">{sel.story}</p>
                )}
              </div>
            </div>
          </article>
          <div className="exp__slider" role="group" aria-label="Experience slider">
            {ITEMS.map((it, index) => {
              const active = index === selIndex;
              return (
                <button
                  key={it.id}
                  type="button"
                  className={`exp__slideDot${active ? " is-active" : ""}`}
                  onClick={() => showIndex(index)}
                  aria-label={`Show ${it.label}`}
                  aria-pressed={active ? "true" : "false"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
