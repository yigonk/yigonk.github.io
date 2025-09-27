import React,{useState} from "react";
import logoStantec from "../assets/images/logos/stantec.jpg";
import logoAKCSE from "../assets/images/logos/akcse.jpeg";
import logoMedal from "../assets/images/logos/medal.jpg";
import logoSUAV from "../assets/images/logos/suav.jpg";

const LOGOS={stantec:logoStantec,akcse:logoAKCSE,medal:logoMedal,suav:logoSUAV};


const ITEMS=[
  {id:"stantec",label:"Stantec",title:"Mechanical Engineering Intern",org:"Stantec",date:"May 2024 – May 2025",location:"Calgary, AB",
   story:"I joined the buildings group and learned to design for people first—ventilation that feels right, plumbing that just works, and fire protection that quietly protects. I lived in Revit, set up families, reviewed submittals, and used IES VE to sanity-check performance. My favorite win was automating repeatable calc/markup steps so our team could focus on judgment over drudgery."},

  {id:"akcse",label:"AKCSE",title:"Vice-President",org:"AKCSE",date:"Sept 2023 – Sept 2025",location:"Calgary, AB",
   story:"Leadership meant designing the conditions for others to do their best work: clear roles, tight run-of-show docs, and thoughtful follow-ups. We made events welcoming and useful, and I learned how small systems—sign-ups, reminders, room setup—shape the experience."},

  {id:"medal",label:"MEDAL Lab",title:"Research Assistant",org:"MEDAL Lab",date:"May 2023 – Jun 2024",location:"Calgary, AB",
   story:"In a small lab team, I helped build an early hydrogen/methane sensor prototype—CAD, quick-turn assemblies, and plenty of data scrubbing. Translating messy signals into decisions became the work: what to change next, and why. We moved fast, documented everything, and collaborated internationally toward IP-ready designs."},

  {id:"suav",label:"Schulich UAV",title:"Mechanical Team Member",org:"Schulich UAV",date:"Sept 2022 – Oct 2023",location:"Calgary, AB",
   story:"I worked on airframe structures and fixtures—SolidWorks models, FEA checks, and CNCable parts. Competition timelines taught me to trade elegance for robustness, and to love a good checklist. Shipping something that flies is a special kind of motivation."}
];


const Experience=()=> {
  const [sel,setSel]=useState(ITEMS[0]);

  return (
    <section
      id="experience"
      className="section experience"
      style={{'--railTop':'88px','--railH':'calc(100vh - 128px)','--panelMax':'50vh','--panelW':'560px'}}
    >

      <h2>Experience</h2>

      {/* centered inner container only */}
      <div className="exp__center">
        <div className="exp__wrap">
          {/* Left rail */}
          <nav className="exp__rail" aria-label="Experience timeline">
            <ol className="exp__list">
              {ITEMS.map((it)=> {
                const active=sel.id===it.id;
                return (
                  <li key={it.id} className="exp__li">
                    <button
                      type="button"
                      className={`exp__dot${active?" is-active":""}`}
                      onClick={()=>{setSel(it);}}
                      title={`${it.label} • ${it.date}`}
                      aria-current={active?"true":"false"}
                    />
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* Right panel: tall, scrollable, sticky header */}
          <article className="exp__panel" role="region" aria-label={`${sel.title} story`}>
            <div className="exp__scroll">
              <header className="exp__head">
                {LOGOS[sel.id] && (
                  <img className="exp__logo" src={LOGOS[sel.id]} alt={`${sel.org} logo`} />
                )}
                <div className="exp__headText">
                  <h3 className="exp__title">{sel.title} — {sel.org}</h3>
                  <div className="exp__meta">{[sel.date,sel.location].filter(Boolean).join(" • ")}</div>
                </div>
              </header>


              <div className="exp__storywrap">
                <p className="exp__story">{sel.story}</p>
                {/* more <p>…</p> if needed */}
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Experience;
