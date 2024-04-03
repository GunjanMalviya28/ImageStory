

import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch data here using formData
    console.log(formData);
    // Reset form after submission if needed
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <div className="main">
        <div className="upper">
          <div className="form">
            <h1 className="header-contact">Contact Me</h1>
            <form onSubmit={handleSubmit}>
              <div className="l-11"></div>
              <p className="line-1">I would love to get suggestion from you</p>
              
              <div className="div-div-2">

                <div className="divdiv-1">
              <input type="text" name="name"  value={formData.name} onChange={handleChange} placeholder="Your Name" className="Name" />
              <div className="l-12"></div>
              </div>
             
              <div className="divdiv-1">
              <input type="email" name="email"  value={formData.email} onChange={handleChange} placeholder="Your e-mail address" className="e-mail-cont" />
             <div className="l-13"></div>
             </div>

             </div>
              <textarea name="message" value={formData.message}  onChange={handleChange} placeholder="Your message" className="mess" />
              <div className="l-14"></div>
              
              <button type="submit" className="b-1">SEND IT</button>
            </form>
          </div>
          {/* <img className="pht" src="./Images/img6.png" alt=""/> */}
          <img className="imag" src="./Images/img6.png" alt="" />
        </div>

        <div className="lower">
          <div className="lower-left">
            <h3>Get In Touch</h3>
            <div className="l1"></div>
            <p className="p-1">contactinfo@alenamiller.com</p>
            <p className="p-2">(355)-202-234-0457</p>
          </div>
          <div className="lower-middle">
            <h3>Where's My Office?</h3>
            <div className="l2"></div>
            <p className="p-3">2489 Locust Court, Los Angeles</p>
            <p className="p-4">3927 Red Maple Drive, Los Angles</p>
          </div>
          <div className="lower-right">
            <h3>My Social Links</h3>
            <div className="l3"></div>
            <div className="icons-link">
              <FaFacebookF />
              <FaTwitter />
              <FaDribbble />
              <AiFillInstagram />
              <FaYoutube />
            </div>
          </div>

        </div>
        <hr />
        <p className="footer">2021 Templates Jungle | All Right Reserved</p>
      </div>
    </>
  );
}

export default Contact;
