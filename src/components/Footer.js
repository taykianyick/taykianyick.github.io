import React from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div
      id="resume"
      className="mt-10 w-full flex flex-col items-center  px-4 justify-center "
    >
      <div className="flex flex-row text-4xl gap-14">
        <a href="mailto:taykianyick@outlook.com" className="hover:scale-125">
          <FiMail />
        </a>
        <a href="https://github.com/taykianyick" className="hover:scale-125">
          <FaGithub />
        </a>
        <a href="" className="hover:scale-125">
          <FaLinkedin />
        </a>
      </div>
      <p className="mt-10 text-base text-center">
        This web page is created using React with tailwind.
      </p>
      <span className="text-base text-center">
      © 2022 Kenny Tay
      </span>
    </div>
  );
}

export default Footer;
