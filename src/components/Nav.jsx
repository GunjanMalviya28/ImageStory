// import React from "react";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { FaDribbble } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaYoutube } from "react-icons/fa";
// import { Outlet, Link } from "react-router-dom";
// // import { Routes, Route, NavLink } from "react-router-dom";
// // import MainComponent from './MainComponent';

// const Nav = () => {
//   return (
//     <>
//       <div className="nav">
//         <div className="right-nav">
//           <img
//             className="logo"
//             src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13935.jpg?w=740&t=st=1709790260~exp=1709790860~hmac=4a97aa92970cd4d41e76641d22a25c9401b25e11cf37ce2f60f79b1f2ebcae22"
//             alt="img"
//           />

//           <a>Alina Lee</a>
//         </div>
//         <div className="navbar">
//           {/* <a href="">Home</a>
//         <a href="">About</a>
//         <a href="">Portfolio</a>
//         <a href="">Blog</a>
//         <a href="">Contact</a> */}

//           <Link to="/">Home</Link>
//           <Link to="/About">About</Link>
//           <Link to="/portfolio">Portfolio</Link>
//           <Link to="/blog">Blog</Link>
//           <Link to="/Contact">Contact</Link>
//           <Link to="/Signup">Signup</Link>
        
//           <Outlet />

//           {/* <NavLink to="/">Home</NavLink>
//         <NavLink to="about">About</NavLink>
//         <NavLink to="/portfolio">Portfolio</NavLink>
//         <NavLink to="/blog">Blog</NavLink>
//         <NavLink to="/contact">Contact</NavLink> */}
//         </div>

//         <div className="icon">
//           <FaFacebookF />
//           <FaTwitter />
//           <FaDribbble />
//           <AiFillInstagram />
//           <FaYoutube />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;


import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaDribbble, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import MainComponent from "./MainComponent";
import About from "../pages/About";
import Protfolio from "../pages/Protfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";



const Nav = (name) => {

    const [first, setfirst] = useState("mainComponent");
    console.log(name);
  return (
    <>
      <div className="nav">
        <div className="right-nav">
          <img
            className="logo"
            src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-13935.jpg?w=740&t=st=1709790260~exp=1709790860~hmac=4a97aa92970cd4d41e76641d22a25c9401b25e11cf37ce2f60f79b1f2ebcae22"
            alt="img"
          />
          <a>Alina Lee</a>
        </div>
        <div className="navbar">
        <button onClick={() => setfirst("mainComponent")}> Home </button>
        <button onClick={() => setfirst("about")} > About </button>
        <button onClick={() => setfirst("portfolio")} > Portfolio </button>
        <button onClick={() => setfirst("blog")} >Blog </button>
        <button onClick={() => setfirst("contact")} >Contact </button>
        </div>
        <div className="icon">
          <FaFacebookF />
          <FaTwitter />
          <FaDribbble />
          <AiFillInstagram />
          <FaYoutube />
        </div>
      </div>
      {first === "mainComponent" ? (
      <MainComponent/>
      ) : first == "about" ? (
    <About/>
        ) : first == "portfolio" ? (
         <Protfolio/>
      ) : first == "blog" ? (
    <Blog/>
      ) : first == "contact" ? (
        <Contact />
      ) :  (
        ""
      )}
    </>
  );
};

export default Nav;
