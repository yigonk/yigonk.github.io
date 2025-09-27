import React from "react";
import {useLocation} from "react-router-dom";

const Footer=()=> {
  const y=new Date().getFullYear();
  const {pathname}=useLocation();
  const isPhoto=pathname.startsWith("/photo");

  const shell={borderTop:"1px solid #eee",background:"#fff"};
  const shellDark={borderTop:"1px solid rgba(255,255,255,.08)",background:"#0b1220"};
  const inner={maxWidth:"1100px",margin:"0 auto",padding:"12px 16px",textAlign:"center",color:"#64748b"};
  const innerDark={color:"#9fb3d9"};

  return (
    <footer style={isPhoto?shellDark:shell}>
      <div style={isPhoto?{...inner,...innerDark}:inner}>
        © {y} Yigon Kim, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
