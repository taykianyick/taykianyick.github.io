import React from "react";
import selfphoto from "../images/selfphoto.JPG";

function Aboutme() {
  return (
    <div
      id="about"
      className=" w-full flex flex-col items-center  px-4 md:justify-center "
    >
      <h1 className="mt-36 text-5xl md:text-7xl font-medium text-center">About Me</h1>
      <div className=" items-center flex flex-col md:flex-row ">
        
            <img src={selfphoto} className="m-10 w-80 h-80 border-4 border-solid border-black rounded-r-lg "/>
        
          <div className='m-10 w-96 md:font-base text-lg leading-relaxed'>
            Hi! I'm Kenny Tay, a fullstack developer based in Canada/Singapore. After 5 years of career in financial audit, 
            I've decided to pursue a career in fullstack web development. I've enrolled and attained a professional certficate in fullstack web development immersive.
            I can say that this is the best decision I've ever made, as it really sparks my interest in web development.
            I love to learn new techonologies and also coming up with creative solutions to solve problems.
          </div>
      </div>
      
    </div>
  );
}

export default Aboutme;
