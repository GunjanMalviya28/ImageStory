import React from "react";
import Nav from "../components/Nav";
import "./Portfolio.css";

const Protfolio = () => {
  return (
    <>
      {/* <Nav/> */}
      <div className="main">
        <div className="top">
          <h1 className="header-portfolio">Portfolio</h1>
          <div className="line-p"></div>
          <div className="naav">
            <a href="/">All</a>
            <a href="/">Fashion</a>
            <a href="/">Portrait</a>
            <a href="/">Utilies</a>
            <a href="/">Events</a>
            <a href="/">Nature</a>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <img
              className="img1"
              src="https://www.fashionsfinest.com/images/2022/Annabelle/naeim-jafari-s3VxCT4p8FM-unsplash.jpeg"
              alt=""
            />
            <img className="img4" src="https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="" />
          </div>

          <img className="img2" src="https://biddinfluencers.com/wp-content/uploads/2023/10/conjunto.jpeg" alt="" />

          <img
            className="img3"
            src="https://goodmenproject.com/wp-content/uploads/2022/06/0_ROvl_zHxseLfnArs.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Protfolio;
