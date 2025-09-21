import React from "react";

const Footer=()=> {
  const y=new Date().getFullYear();
  return (
    <footer style={{borderTop:"1px solid #eee",background:"#fff"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"12px 16px",textAlign:"center",color:"#64748b"}}>
        © {y} Yigon Kim — Mechanical Engineering Student | Aerospace Minor
      </div>
    </footer>
  );
};

export default Footer;
