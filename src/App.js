import React from "react";
import {Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./views/Home";
import Photo from "./views/Photo";

const App=()=> {
  return (
    <>
      <NavBar/>
      <main id="main" style={{maxWidth:"1100px",margin:"0 auto",padding:"0 20px"}}>
        <ScrollToHash/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/photo" element={<Photo/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
};

export default App;
