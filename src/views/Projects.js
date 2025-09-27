import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";

const ITEMS = [
  {
    id: "cansat",
    title: "CANSAT Parachute Mechanism",
    cover: "https://picsum.photos/1200/520?random=11",
    keywords: ["mechanism", "CAD", "prototype"],
    date: "2023",
    location: "Calgary, AB",
    affiliate: "University of Calgary",
    description:
      "Compact, reliable deployment mechanism for a CanSat payload; design-for-weight and packability.",
    images: [
      "https://picsum.photos/900/600?random=111",
      "https://picsum.photos/900/600?random=112",
      "https://picsum.photos/900/600?random=113",
    ],
  },
  {
    id: "scramjet",
    title: "Scramjet CFD Optimization",
    cover: "https://picsum.photos/1200/520?random=12",
    keywords: ["CFD", "aero", "optimization"],
    date: "2024",
    location: "Calgary, AB",
    affiliate: "UCalgary (Aero)",
    description:
      "Compressible CFD studies; inlet/isolator geometry iterations to improve pressure recovery.",
    images: [
      "https://picsum.photos/900/600?random=121",
      "https://picsum.photos/900/600?random=122",
    ],
  },
  {
    id: "iesve",
    title: "Energy Modeling Training Manual",
    cover: "https://picsum.photos/1200/520?random=13",
    keywords: ["IES VE", "BIM", "workflow"],
    date: "2024–2025",
    location: "Calgary, AB",
    affiliate: "Stantec",
    description:
      "Onboarding manual that standardizes templates and reduces ramp-up time for VE modeling.",
    images: ["https://picsum.photos/900/600?random=131"],
  },
  {
    id: "uav",
    title: "UAV Design & Manufacturing",
    cover: "https://picsum.photos/1200/520?random=14",
    keywords: ["UAV", "FEA", "manufacturing"],
    date: "2022–2023",
    location: "Calgary, AB",
    affiliate: "Schulich UAV",
    description:
      "Airframe design, FEA checks, layups, and CNC fixtures for SUAV competition.",
    images: [
      "https://picsum.photos/900/600?random=141",
      "https://picsum.photos/900/600?random=142",
      "https://picsum.photos/900/600?random=143",
    ],
  },
  {
    id: "sensor",
    title: "Hydrogen & Methane Sensor System",
    cover: "https://picsum.photos/1200/520?random=15",
    keywords: ["sensors", "data", "IP"],
    date: "2023–2024",
    location: "Calgary, AB",
    affiliate: "MEDAL Lab",
    description:
      "Prototype integrating gas sensing, DAQ, and packaging supporting patent-oriented work.",
    images: [
      "https://picsum.photos/900/600?random=151",
      "https://picsum.photos/900/600?random=152",
    ],
  },
];

const Projects = () => {
  const [open, setOpen] = useState(null);
  const onOpen = (it) => {
    setOpen(it);
  };
  const onClose = () => {
    setOpen(null);
  };

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="projects__list">
        {ITEMS.map((it) => {
          return (
            <button
              key={it.id}
              type="button"
              className="proj-card proj-card--wide"
              onClick={() => {
                onOpen(it);
              }}
              aria-label={`${it.title} details`}
            >
              <div
                className="proj-card__img"
                style={{
                  backgroundImage: `url(${it.cover}),linear-gradient(135deg,#e8eefc,#dceeff)`,
                }}
              />
              <div className="proj-card__label">
                <div className="proj-card__title">{it.title}</div>
              </div>
              <div className="proj-card__hover">
                <div className="proj-card__kw">{it.keywords.join(" • ")}</div>
              </div>
            </button>
          );
        })}
      </div>
      <ProjectModal item={open} onClose={onClose} />
    </section>
  );
};

export default Projects;
