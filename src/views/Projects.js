import React from "react";

const Projects=()=> {
  const items=[
    {title:"CANSAT Parachute Mechanism",sub:"Hands-on satellite design"},
    {title:"Scramjet CFD Optimization",sub:"High-speed aerodynamics"},
    {title:"Energy Modeling Manual (IES VE)",sub:"Digital transition"},
    {title:"SUAV: UAV Design & Manufacturing",sub:"Competition project"},
    {title:"Hydrogen & Methane Sensor System",sub:"Prototype & IP"}
  ];
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {items.map((p,i)=> {
          return (
            <article key={i} className="proj-card card">
              <div className="proj-card__hover"><div>{p.sub}</div></div>
              <div className="proj-card__body">
                <h3 style={{margin:"0 0 4px 0"}}>{p.title}</h3>
                <div style={{color:"var(--muted)",fontSize:14}}>{p.sub}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
