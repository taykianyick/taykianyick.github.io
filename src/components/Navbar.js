import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import MenuItems from "./Menuitems";

function Navbar() {
  let links = [
    { name: "PORTFOLIO", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "RESUME", link: "/" },
    { name: "CONTACT", link: "/" },
    { name: "GITHUB", link: "/" },
    { name: "LINKEDIN", link: "/" },
  ];
  const [active,setActive] = useState(false)

  const showMenu = () => {
      setActive(!active)
  }
  return (
    <div className="fixed w-full text-black flex justify-between p-4 items-center bg-white">
      <div className="m-10 border-4 border-solid w-12 h-12 border-black rounded-r-lg mt-1 pt-1 mb-1 justify-center text-center hover:bg-black hover:text-white ">
        <span className="cursor-pointer">
          <a className=" text-3xl m-auto ">K</a>
        </span>
      </div>

      <nav>
        <div className="absolute right-6 md:hidden top-10 scale-150">
          <FiMenu onClick={showMenu} className='scale-150 cursor-pointer'/>
        </div>

        <ul className="hidden md:flex gap-8 p-6 uppercase cursor-pointer ">
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-4 text-base lg:text-lg md:my-0 my-7 bg-white"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:border-b-2 hover:border-black transition-"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <MenuItems showMenu={showMenu} active={active} links={links}/>
      </nav>
    </div>
  );
}

export default Navbar;
