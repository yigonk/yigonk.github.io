import React,{useEffect} from "react";
import {createPortal} from "react-dom";

const ProjectModal=({item,onClose})=> {
  // keep hooks unconditional; guard logic inside
  useEffect(()=> {
    if(!item){return;}
    const prev=document.body.style.overflow;
    document.body.style.overflow="hidden";
    const onKey=(e)=>{if(e.key==="Escape"){onClose();}};
    window.addEventListener("keydown",onKey);
    return ()=>{document.body.style.overflow=prev;window.removeEventListener("keydown",onKey);};
  },[item,onClose]);

  if(!item){return null;}

  const meta=[item.date,item.location,item.affiliate].filter(Boolean);
  
  return createPortal(
    <div className="modal" role="dialog" aria-modal="true" aria-label={`${item.title} details`} onClick={()=>{onClose();}}>
      <div className="modal__panel" onClick={(e)=>{e.stopPropagation();}}>
        <button className="modal__close" type="button" aria-label="Close" onClick={()=>{onClose();}}>×</button>

        {/* scrollable content */}
        <div className="modal__scroll">
          <div className="modal__media" style={{backgroundImage:`url(${item.cover})`}}/>
          <div className="modal__body">
            <h3 className="modal__title" >{item.title}</h3>
            
             {meta.length>0&&(
            <div className="modal__meta">{meta.join(" • ")}</div>
            )}
            
            {item.keywords&&item.keywords.length>0&&(
              <div className="modal__tags">
                {item.keywords.map((k,i)=>{return(<span key={i} className="tag">{k}</span>);})}
              </div>
            )}
            
            <p className="modal__desc">{item.description||"More details coming soon."}</p>

            {/* additional images */}
            {item.images&&item.images.length>0&&(
              <div className="modal__gallery">
                {item.images.map((src,i)=> {
                  return (
                    <figure key={i} className="g">
                      <img src={src} alt={`${item.title} image ${i+1}`}/>
                    </figure>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
