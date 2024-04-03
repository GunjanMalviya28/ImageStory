import React from "react";
import "./About.css";
import Nav from "../components/Nav";


const About = () => {
  return (
  <>
     <div className="main">
      {/* <Nav/> */}
        <div className="page">
          <div className="left">
            <img
              className="img"
              src="https://images.pexels.com/photos/4429564/pexels-photo-4429564.jpeg"
              alt="img"
            />
          </div>
          <div className="right">
           <div className="box">

           <h2 className="title-about">About Me</h2>
            <hr className="line-about" />

            <p className="p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              similique odio pariatur quidem esse quo nulla .
            </p>
            <p className="p2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae consectetur quas.
            </p>
            <button className="button">VIEW MY WORDS</button>
           </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
