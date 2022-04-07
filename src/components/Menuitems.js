import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const MenuItems = ({ showMenu, active, links }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <RiCloseLine onClick={showMenu} className="cursor-pointer" />
      {links.map((link) => (
        <li
          key={link.name}
          className="md:ml-8 text-base lg:text-lg md:my-0 my-7 "
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
  );
};

export default MenuItems;
