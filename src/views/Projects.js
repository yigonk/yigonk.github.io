import React, { useState } from "react";
import ProjectModal from "../components/ProjectModal";

const ITEMS = [
  // ────────────────────────────────────────────────
  // 1. Scramjet CFD (Latest)
  // ────────────────────────────────────────────────
  {
    id: "scramjet_cfd",
    title: "Scramjet CFD",
    cover: "https://picsum.photos/1200/520?random=12",
    keywords: [
      "aerothermodynamics",
      "hypersonics",
      "compressible flow",
      "turbulence modeling",
      "shock analysis"
    ],
    date: "2025–2026",
    location: "Calgary, AB",
    affiliate: "AERO-CORE & North Vector Dynamics",
    description:
      "Mach 3–5 compressible CFD analysis focusing on inlet/isolator behavior, pressure recovery, shock formation, and high-speed flow characteristics for scramjet configurations.",
    images: [
      "https://picsum.photos/900/600?random=121",
      "https://picsum.photos/900/600?random=122"
    ]
  },

  // ────────────────────────────────────────────────
  // 2. Advanced Structural FEA
  // ────────────────────────────────────────────────
  {
    id: "structural_fea",
    title: "Advanced Structural FEA",
    cover: "https://picsum.photos/1200/520?random=16",
    keywords: [
      "finite element analysis",
      "SolidWorks",
      "stress analysis"
    ],
    date: "2026",
    location: "Calgary, AB",
    affiliate: "University of Calgary",
    description:
      "Course-based FEA project involving stress, deformation, and modal analysis of mechanical components. Emphasis on material modeling, boundary condition design, mesh refinement strategy, and interpreting results for engineering decision-making.",
    images: ["https://picsum.photos/900/600?random=161"]
  },

  // ────────────────────────────────────────────────
  // 3. Costa Rica Community Engineering
  // ────────────────────────────────────────────────
  {
    id: "costa_rica_engineering",
    title: "Costa Rica Community Engineering",
    cover: "https://picsum.photos/1200/520?random=17",
    keywords: [
      "construction",
      "community engineering",
      "project management"
    ],
    date: "2026",
    location: "Costa Rica",
    affiliate: "Schulich School of Engineering",
    description:
      "Hands-on community engineering project involving on-site construction support, material planning, and collaborating with local teams to develop sustainable infrastructure for rural communities.",
    images: [
      "https://picsum.photos/900/600?random=171",
      "https://picsum.photos/900/600?random=172"
    ]
  },

  // ────────────────────────────────────────────────
  // 4. Portfolio Website
  // ────────────────────────────────────────────────
  {
    id: "portfolio_website",
    title: "Portfolio Website",
    cover: "https://picsum.photos/1200/520?random=18",
    keywords: [
      "AI",
      "prompt engineering",
      "vibe coding"
    ],
    date: "2025",
    location: "Calgary, AB",
    affiliate: "Personal Project",
    description:
      "Designed and built a modern portfolio website showcasing engineering projects, AI-integrated workflows, and prompt-engineering capabilities. Developed using a clean frontend structure with smooth user interaction and responsive design.",
    images: [
      "https://picsum.photos/900/600?random=181",
      "https://picsum.photos/900/600?random=182"
    ]
  },

  // ────────────────────────────────────────────────
  // 5. Tutoring Business
  // ────────────────────────────────────────────────
  {
    id: "tutoring_business",
    title: "Tutoring Business",
    cover: "https://picsum.photos/1200/520?random=19",
    keywords: [
      "entrepreneurship",
      "negotiation",
      "sales",
      "marketing",
      "consulting",
      "client relations"
    ],
    date: "2025–present",
    location: "Calgary, AB",
    affiliate: "Personal Project",
    description:
      "Founded and operated a tutoring business offering personalized STEM education, performance tracking, and parent consultations. Developed client acquisition strategies, optimized pricing through negotiation, and built a structured brand and marketing system.",
    images: ["https://picsum.photos/900/600?random=191"]
  },

  // ────────────────────────────────────────────────
  // 6. CANSAT Parachute Mechanism
  // ────────────────────────────────────────────────
  {
    id: "cansat",
    title: "CANSAT Parachute Mechanism",
    cover: "https://picsum.photos/1200/520?random=11",
    keywords: [
      "mechanism design",
      "prototyping",
      "design for assembly (DFA)",
      "design for manufacturing (DFM)",
      "lightweight design"
    ],
    date: "2025",
    location: "Berlin, Germany",
    affiliate: "Technical University Berlin",
    description:
      "Compact, reliable parachute deployment mechanism optimized for weight, manufacturability, and repeatable operation under constrained form factors.",
    images: [
      "https://picsum.photos/900/600?random=111",
      "https://picsum.photos/900/600?random=112",
      "https://picsum.photos/900/600?random=113"
    ]
  },

  // ────────────────────────────────────────────────
  // 7. IES VE Workflow & Training System
  // ────────────────────────────────────────────────
  {
    id: "iesve_system",
    title: "IES VE Workflow & Training System",
    cover: "https://picsum.photos/1200/520?random=13",
    keywords: [
      "digital transformation",
      "standardization",
      "workflow design",
      "leadership"
    ],
    date: "2024–2025",
    location: "Calgary, AB",
    affiliate: "Stantec",
    description:
      "Developed a standardized IES VE workflow and training system to streamline onboarding, reduce modeling inconsistencies, and modernize internal digital practices. Centralized best practices, templates, and procedures into a cohesive system adopted by incoming junior staff.",
    images: ["https://picsum.photos/900/600?random=131"]
  },

  // ────────────────────────────────────────────────
  // 8. UAV Design & Manufacturing
  // ────────────────────────────────────────────────
  {
    id: "uav",
    title: "UAV Design & Manufacturing",
    cover: "https://picsum.photos/1200/520?random=14",
    keywords: [
      "unmanned aerial vehicle (UAV)",
      "composite manufacturing",
      "carbon fiber",
      "CAD",
      "CAE"
    ],
    date: "2022–2024",
    location: "Calgary, AB",
    affiliate: "Schulich UAV & Personal Project",
    description:
      "Designed and manufactured carbon-fiber UAV components, including airframe structures, composite layups, and CNC machining fixtures. Supported CAD/CAE validation and development of competition-ready aircraft systems.",
    images: [
      "https://picsum.photos/900/600?random=141",
      "https://picsum.photos/900/600?random=142",
      "https://picsum.photos/900/600?random=143"
    ]
  },

  // ────────────────────────────────────────────────
  // 9. Hydrogen & Methane Separation & Sensing System
  // ────────────────────────────────────────────────
  {
    id: "sensor_system",
    title: "Hydrogen & Methane Separation & Sensing System",
    cover: "https://picsum.photos/1200/520?random=15",
    keywords: [
      "design of experiments (DoE)",
      "prototyping",
      "control & sensor systems",
      "data analysis",
      "patent development"
    ],
    date: "2023–2024",
    location: "Calgary, AB",
    affiliate: "Multifunctional Engineering Dynamics Automation Lab (MEDAL)",
    description:
      "Developed a prototype gas separation and sensing system integrating hydrogen and methane detection, data acquisition, and packaging design. Supported patent-oriented research through DoE planning, iterative prototyping, sensor integration, and data processing for performance evaluation.",
    images: [
      "https://picsum.photos/900/600?random=151",
      "https://picsum.photos/900/600?random=152"
    ]
  }
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
