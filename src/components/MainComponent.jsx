import React from 'react';
import "./styles.css";

function MainComponent() {
    return (
        <div className="main">
            <div className="center">
                <h1>Photographer <br />
                    & Film Maker<br />
                    <h4>
                    {localStorage.getItem("name")
                ? localStorage.getItem("name")
                : "Los Angles"}
                    </h4>
                </h1>
            </div>
         
                <button className='button1'>HERE ME</button>
           
            <div className="mainimg">
                <img className="mainimgpic" src="https://i0.wp.com/photographers-diary.com/wp-content/uploads/2021/07/pexels-photo-4429565.jpeg?resize=748%2C1122&ssl=1" alt="" />
            </div>
        </div>
    );
}

export default MainComponent;
