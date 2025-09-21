import React from "react";

const Experience=()=> {
  const data=[
    {org:"Stantec",title:"Mechanical Engineering Intern",range:"May 2024 – May 2025",pts:["HVAC, plumbing, fire protection across sectors.","Revit/BIM; energy modeling (IES VE).","Workflow automation & training."]},
    {org:"MEDAL Lab",title:"Research Assistant",range:"May 2023 – Jun 2024",pts:["Hydrogen/methane sensor prototype.","CAD, prototyping, data analysis."]},
    {org:"Schulich UAV",title:"Mechanical Team Member",range:"Sep 2022 – Oct 2023",pts:["UAV design/manufacturing, FEA/CFD.","CNC + composites."]},
    {org:"AKCSE",title:"Vice-President",range:"Sep 2023 – Sep 2025",pts:["Leadership, events, community building."]}
  ];
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {data.map((e,i)=> {
          return (
            <div key={i} className="timeline-item">
              <div className="timeline-item__card">
                <div className="timeline-item__title">{e.title} — {e.org}</div>
                <div className="timeline-item__meta">{e.range}</div>
                <ul style={{margin:"0 0 0 16px"}}>
                  {e.pts.map((t,j)=> {return(<li key={j}>{t}</li>);})}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
