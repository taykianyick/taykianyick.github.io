import React, { useState } from "react";
import html from "../images/tech/html.png";
import react from "../images/tech/react.png";
import css from "../images/tech/css.png";
import bootstrap from "../images/tech/bootstrap.png";
import tailwind from "../images/tech/tailwind.png";
import nodejs from "../images/tech/nodejs.png";
import php from "../images/tech/php.png";
import golang from "../images/tech/golang.png";
import mysql from "../images/tech/mysql.png";
import git from "../images/tech/git.png";
import github from "../images/tech/github.png";
import vscode from "../images/tech/vscode.png";
import postman from "../images/tech/postman.png";
import mongodb from "../images/tech/mongodb.png";
import expressjs from "../images/tech/expressjs.png";

function Skills() {
  let frontend = [
    { name: "REACT", img: react },
    { name: "HTML5", img: html },
    { name: "CSS3", img: css },
    { name: "BOOTSTRAP", img: bootstrap },
    { name: "TAILWIND", img: tailwind },
  ];
  let backend = [
    { name: "NODEJS", img: nodejs },
    { name: "ExpressJS", img: expressjs },
    { name: "MongoDB", img: mongodb },
    { name: "PHP", img: php },
    { name: "GOLANG", img: golang },
    { name: "MYSQL", img: mysql },
   
  ];

  let tools = [
    { name: "GIT", img: git },
    { name: "GITHUB", img: github },
    { name: "VSCODE", img: vscode },
    { name: "POSTMAN", img: postman },
  ];
  return (
    <div
      id="skills"
      className=" w-full flex flex-col items-center  px-4 justify-center "
    >
      <h1 className="mt-36 text-2xl md:text-4xl font-medium text-center">
        Skills
      </h1>
      <div className="mx-auto  flex flex-col md:flex-row md:align-top gap-10 mt-5">
        <div className="items-center mx-auto text-center border-solid border-2 border-black w-72 flex flex-col ">
          <div className="w-full bg-black text-white">FRONTEND</div>
          <div className="p-1 items-center flex flex-row w-80 flex-wrap justify-center">
            {frontend.map((frontend) => (
              <img
                src={frontend.img}
                height="64px"
                width="64px"
                data-bs-toggle="tooltip"
                title={frontend.name}
                alt={frontend.name}
              ></img>
            ))}
          </div>
        </div>
        <div className="items-center mx-auto text-center border-solid border-2 border-black w-72 flex flex-col">
          <div className="w-full bg-black text-white">BACKEND</div>
          <div className="p-1 items-center flex flex-row w-80 flex-wrap justify-center">
            {backend.map((backend) => (
              <img
                src={backend.img}
                height="64px"
                width="64px"
                data-bs-toggle="tooltip"
                title={backend.name}
                alt={backend.name}
              ></img>
            ))}
          </div>
        </div>
        <div className="items-center mx-auto text-center border-solid border-2 border-black w-72 flex flex-col">
          <div className="w-full bg-black text-white">TOOLS</div>
          <div className="p-1 items-center flex flex-row w-80 flex-wrap justify-center">
            {tools.map((tools) => (
              <img
                src={tools.img}
                height="64px"
                width="64px"
                data-bs-toggle="tooltip"
                title={tools.name}
                alt={tools.name}
              ></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
