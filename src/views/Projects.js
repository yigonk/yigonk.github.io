import React from "react";

const ITEMS=[
  {id:"cansat",title:"CANSAT Parachute Mechanism",cover:"https://picsum.photos/1200/520?random=11",keywords:["mechanism","CAD","prototype"]},
  {id:"scramjet",title:"Scramjet CFD Optimization",cover:"https://picsum.photos/1200/520?random=12",keywords:["CFD","aero","optimization"]},
  {id:"iesve",title:"Energy Modeling Training Manual",cover:"https://picsum.photos/1200/520?random=13",keywords:["IES VE","BIM","workflow"]},
  {id:"uav",title:"UAV Design & Manufacturing",cover:"https://picsum.photos/1200/520?random=14",keywords:["UAV","FEA","manufacturing"]},
  {id:"sensor",title:"Hydrogen & Methane Sensor System",cover:"https://picsum.photos/1200/520?random=15",keywords:["sensors","data","IP"]}
];

const Projects=()=> {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="projects__list">
        {ITEMS.map((it)=> {
          return (
            <button key={it.id} type="button" className="proj-card proj-card--wide" aria-label={`${it.title} tile`}>
              <div className="proj-card__img" style={{backgroundImage:`url(${it.cover}),linear-gradient(135deg,#e8eefc,#dceeff)`}}/>
              <div className="proj-card__label">
                <div className="proj-card__title">{it.title}</div>
              </div>

              {/* Hover keywords */}
              <div className="proj-card__hover">
                <div className="proj-card__kw">{it.keywords.join(" • ")}</div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
