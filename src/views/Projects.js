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
      "Computational Fluid Dynamics (CFD)",
      "hypersonics",
      "X-51A Waverider",
      "turbulence modeling",
      "OpenFOAM",
      "parametric study"
    ],
    date: "2025–2026",
    location: "Calgary, AB",
    affiliate: "AERO-CORE & North Vector Dynamics",
    description: [
      "This project focused on developing a cost-effective CFD workflow to analyze the inlet section of a hypersonic scramjet engine. Scramjet testing usually requires expensive facilities and specialized tools, so the project used OpenFOAM, an open-source Linux-based CFD software, to make advanced high-speed flow simulation more accessible.",

      "The main challenge was not only getting results from the simulation, but also building a reliable workflow. Hypersonic flow is highly sensitive to geometry, mesh quality, and solver settings, so the project began with verification and validation using benchmark cases before applying the method to an X-51A/MAX-2-inspired scramjet inlet. This process helped reduce uncertainty and created a repeatable workflow for future analysis. The final project scope focused on the inlet–isolator region because this section controls the compression process and strongly affects downstream engine performance.",

      "After establishing the workflow, the project evaluated how changes in cowl-lip geometry affected shock behavior, pressure recovery, compression, and inlet stability. The study identified the peak-performance cowl-lip geometry and the non-linear relationship caused by varying the geometry. One of the key assets of this project was the validated OpenFOAM workflow itself, which provides a reusable foundation for the sponsor and future researchers working in an area with limited resources and a steep learning curve."
    ],
    images: [
      "https://picsum.photos/900/600?random=121",
      "https://picsum.photos/900/600?random=122"
    ]
  },

  // ────────────────────────────────────────────────
  // 2. Advanced Structural FEA
  // ────────────────────────────────────────────────
  {
    id: "fea",
    title: "PCB Thermal FEA",
    cover: "https://picsum.photos/1200/520?random=16",
    keywords: [
      "finite element analysis",
      "convergence study",
      "gaussian quadrature",
      "thermal analysis"
    ],
    date: "2026",
    location: "Calgary, AB",
    affiliate: "Schulich School of Engineering",
    description: [
      "This project focused on understanding the finite element analysis process by establishing each mathematical step behind the simulation. Rather than relying on commercial FEA software, the project built the analysis process from the ground up in MATLAB to better understand how geometry, material properties, boundary conditions, element formulation, and numerical integration work together to produce a thermal solution.",

      "The model analyzed heat transfer through a printed circuit board with internal heat generation, fixed-temperature cooling, insulated boundaries, and convective heat transfer. The PCB geometry was divided into structured quadrilateral elements, and the finite element formulation was implemented using shape functions, the weak form of the governing heat equation, Gaussian quadrature, and global matrix assembly.",

      "After solving for the temperature distribution, the project evaluated how increasing heat generation affected the PCB temperature field and how mesh refinement influenced the accuracy of the result. This project strengthened my understanding of the full FEA workflow, from mathematical formulation and coding implementation to post-processing and engineering interpretation."
    ],
    images: ["https://picsum.photos/900/600?random=161"]
  },

  // ────────────────────────────────────────────────
  // 3. Costa Rica Community Building
  // ────────────────────────────────────────────────
  {
    id: "costa_rica_building",
    title: "Costa Rica Community Building",
    cover: "https://picsum.photos/1200/520?random=17",
    keywords: [
      "construction",
      "community Development",
      "hands-on building",
      "global project"
    ],
    date: "2026",
    location: "Costa Rica",
    affiliate: "Developing World Connections (DWC)",
    description: [
      "I travelled to Costa Rica to gain hands-on construction experience and to see how engineering work can make a direct impact on a local community. The project took place in Las Brisas de Pacuarito, a rural community near Barbilla National Park, where limited infrastructure and economic opportunities create challenges for local residents.",

      "The project focused on constructing a tree nursery with a reinforced structure and basic irrigation system. This nursery was designed to support native plant production, local biodiversity, and sustainable rural development. Through the project, I was able to take part in practical construction work while learning how small infrastructure projects can support larger community and environmental goals. I also enjoyed connecting with local residents, who welcomed us with amazing food, hospitality, local tours, and the opportunity to experience part of their everyday life.",

      "This experience was also personally meaningful because I have always wanted to build my own house one day. Working on-site helped me better understand construction from a practical perspective and gave me a stronger appreciation for the connection between design, labour, materials, and community impact."
    ],
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
      "vibe coding",
      "github",
      "codex"
    ],
    date: "2025",
    location: "Calgary, AB",
    affiliate: "Personal Project",
    description: [
      "I created this portfolio website to track my journey as an engineer and to communicate my skills, projects, and experiences more effectively. I wanted to create a medium that shows how my experiences connect and how I am growing as an engineer.",
      "This project also became a way to test the power of AI. I used AI development tools, such as Codex, to help build and improve the website, and I used GitHub to manage the code, track changes, and organize the development process. VS Code was the IDE that streamlined both the GitHub and Codex workflows.",
      "With a basic understanding of HTML, CSS, JavaScript(React), I only needed to understand the structure of the code while AI helped fix the grammatical and syntax-related parts. Clear prompts, specific goals, and careful review were necessary to achieve the design and function I wanted, as AI outputs could sometimes be misleading. However, the capability of AI was exceptional, and this really opened up opportunities for how I could build further tools throughout my engineering journey."
    ],
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
    description: [
      "This project began from my three years of tutoring experience and my own academic journey. I realized that the tutoring market is often focused only on academic grades, while many parents are ultimately looking for their child’s long-term success. “Success” is often vaguely defined by parents, so I saw an opportunity to create a tutoring service that defines a clearer path to success and positions the service as a premium offering.",

      "To translate this premium value into a clear program, I developed a structured tutoring service based on the DEAL framework: Define, Eliminate, Automate, and Liberate. The curriculum was designed to cover the key skills, mindsets, and strategies that helped my peers and me achieve our goals. This allowed the service to move beyond traditional subject-based tutoring and offer a premium learning experience.",

      "Communicating the value of this service was one of the most important parts of the project. I developed marketing materials that highlighted my academic achievements, limited availability, structured curriculum, and structured learning period. I also implemented regular progress reports and consultations to strengthen communication with clients and build trust over time. The main challenge was justifying the premium price, which required consistent results and time to build trust. Finding clients was also challenging, as it required time to spread my name and branding to potential clients.",

      "The result was promising. I was able to offer premium value in a competitive market, and my tutoring rate reached up to 55.5% higher than the typical market wage."
    ],
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
    description: [
      "This project was completed during my summer exchange at TU Berlin. The goal of the project was to design, build, and launch a small satellite-shaped rover that could collect flight data, land safely with a parachute, detach the parachute after touchdown, and drive on the ground. The project had strict size, mass, and space constraints, which made mechanical design, packaging, and system integration important parts of the challenge.",

      "The project allowed a high level of design flexibility, so I used this opportunity to explore a more creative and simplified parachute release mechanism. Instead of adding a dedicated actuator inside the limited compartment space, my design used the existing wheel actuator to trigger the parachute release. Since the parachute release only needed to occur once, reducing the number of components provided advantages in weight, space, and overall system simplicity. The use of 3D printing also gave flexibility in manufacturing and allowed the mechanism to be integrated directly into the compartment design.",

      "The mechanism used a string attached to the wheel to pull a release pin. The parachute pin was held in place against a compressed spring, and when the wheel actuated, the string pulled the pin and released the spring force to eject the parachute connection. The concept was designed to convert the rover’s existing wheel motion into a one-time mechanical release action.",

      "Unfortunately, the final mechanism failed during release because I underestimated the structural strength required for the 3D-printed compartment. When the spring released, the load broke the mechanism section out of the compartment instead of cleanly ejecting the parachute pin. Although the result was not successful, the project became a valuable design lesson in load paths, structural reinforcement, material limitations, and prototype testing."
    ],
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
    id: "iesve_manual",
    title: "IES VE Workflow & Training System",
    cover: "https://picsum.photos/1200/520?random=13",
    keywords: [
      "digital transformation",
      "workflow standardization",
      "knowledge transfer",
      "optimization"
    ],
    date: "2024–2025",
    location: "Calgary, AB",
    affiliate: "Stantec",
    description: [
      "This project was created during my internship at Stantec to support the team’s transition to a new building energy analysis software. The previous software was being discontinued, and the team was moving to IES VE, which had a steep learning curve and limited internal training resources. The main problem was not only learning the software myself, but also creating a system that would help future users learn it more efficiently.",

      "I took the initiative to develop an internal training document that organized the software workflow into clearer steps. The document included setup guidance, screenshots, modelling procedures, common mistakes, and troubleshooting notes. Instead of relying only on verbal explanations or repeated one-on-one support, the manual created a reusable reference that team members could follow independently.",

      "The goal of the document was to improve onboarding, reduce confusion, and create more consistent workflows across the team. Through this project, I learned how important clear documentation is in a professional engineering environment."
    ],
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
      "carbon-fiber",
      "CAD",
      "CAE"
    ],
    date: "2022–2024",
    location: "Calgary, AB",
    affiliate: "Schulich UAV & Personal Project",
    description: [
      "This project was completed as part of Schulich UAV, a competitive student engineering club, in preparation for the AUVSI Student Unmanned Aerial Systems competition. The competition required teams to design, integrate, and demonstrate an unmanned aircraft capable of autonomous flight, navigation, remote sensing, obstacle avoidance, object detection, and air drop.",

      "My work focused on the mechanical design and manufacturing side of the fixed-wing UAV. The design process started from mission requirements such as flight range, payload needs, takeoff and landing constraints, air drop capability, and reliability. From there, the mechanical team worked through aerodynamic layout, wing sizing, internal structure, fuselage packaging, landing gear integration, and manufacturability while balancing performance, weight, strength, and ease of assembly.",

      "For CAD development, I used both SolidWorks and Onshape to support detailed part modelling, collaborative design work, and full aircraft assemblies. CAD models were also used to create 3D-printed parts through school resources, often for internal alignment and structural integration.",

      "Manufacturing involved hands-on work with foam-core wings, internal bulkheads, carbon-fiber spars, composite layup, and vacuum bagging. The wings were designed to be lightweight while maintaining structural strength, using foam cores reinforced with aluminum bulkheads and carbon-fiber components, then wrapped with carbon fiber and epoxy to create a stiff composite surface. The fuselage and internal structures were also designed with manufacturability in mind, including 3D-printed molds and composite layup methods for complex geometry.",

      "Through this project, I gained hands-on experience in the full aircraft development process, from early design decisions to CAD modelling, structural layout, composite manufacturing, and assembly. This experience also continues into my personal project of building my own RC plane under 250 g, where I am applying knowledge from my aerodynamics courses. In the future, I plan to design and build my own rideable aircraft."
    ],
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
    title: "Hydrogen / Methane Separation & Sensing System",
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
    description: [
      "This project was completed during my summer research experience at MEDAL, where I was given the opportunity to lead an early-stage research project related to hydrogen and methane separation.",

      "My work focused on supporting the experimental foundation of the project by developing and organizing the sensing, pressure-control, and data-acquisition workflow. The project required a reliable way to monitor gas composition, pressure conditions, and system response during testing. I designed the experimental setup, hydrogen sensor configuration, pump control system, pressure control system, particle sensing setup, and data acquisition tools to help build a more measurable and repeatable testing process. I also designed and procured components from local and international manufacturers. During this process, I considered material specifications and manufacturability to ensure they suited the project requirements.",

      "A major part of my contribution was connecting individual lab components into a working experimental system. This included setting up sensor circuits, exploring LabVIEW and manufacturer software for data acquisition, reviewing signal responsiveness, using Arduino-based sensing, and testing pump behaviour under controlled pressure conditions. I organized the system-level workflow so that future experiments could be conducted with clearer monitoring and control.",

      "This project contributed to patent formulation. Through this experience, I learned how research ideas are developed, funded, and translated into potential industry applications. Designing the experimental setup was also a crucial experience that helped me understand how product and system development work in a research environment."
    ],
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
