import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import MenuItems from "./Menuitems";
import ScrollIntoView from "react-scroll-into-view";

function Navbar() {
  let links = [
    { name: "PORTFOLIO", link: "#portfolio" },
    { name: "ABOUT", link: "#about" },
    { name: "RESUME", link: "#resume" },
    { name: "CONTACT", link: "#contact" },
    { name: "GITHUB", link: "https://github.com/taykianyick" },
    { name: "LINKEDIN", link: "https://www.linkedin.com/in/kianyicktay/" },
  ];
  const [active,setActive] = useState(false)

  const showMenu = () => {
      setActive(!active)
  }
  return (
    <div className="fixed w-full text-black flex justify-between p-4 items-center bg-white z-50">
      <ScrollIntoView
    selector="#intro" >

      <div className="m-10 border-4 border-solid w-12 h-12 border-black rounded-r-lg mt-1 pt-1 mb-1 justify-center text-center hover:bg-black hover:text-white ">
        <span className="cursor-pointer">
          <a className=" text-3xl m-auto ">K</a>
        </span>
      </div>
      </ScrollIntoView>
      <nav>
        <div className="absolute right-6 md:hidden top-10 scale-150">
          <FiMenu onClick={showMenu} className='scale-150 cursor-pointer'/>
        </div>

        <ul className="hidden md:flex gap-8 p-6 uppercase cursor-pointer ">
          {links.map((link) => (
             <ScrollIntoView
             selector={link.link}  key={link.name}>
              
              <li
              key={link.name}
              className="md:ml-4 text-base lg:text-lg md:my-0 my-7 bg-white"
            >
              {(link.name === "GITHUB" || link.name === "LINKEDIN") ? (<a href={link.link} target="_blank" className="text-gray-800 hover:border-b-2 hover:border-black transition-" >{link.name}</a>) : ( <span
              
              className="text-gray-800 hover:border-b-2 hover:border-black transition-"
            >
              {link.name}
            </span>) }
             
              </li>
             </ScrollIntoView>
            
            
          ))}
        </ul>

        <MenuItems showMenu={showMenu} active={active} links={links}/>
      </nav>
    </div>
  );
}

export default Navbar;
