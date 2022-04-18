import React from "react";
import unified1 from "../images/unified1.PNG";
import unified2 from "../images/unified2.PNG";
import unified3 from "../images/unified3.PNG";
import unified4 from "../images/unified4.PNG";
import unified6 from "../images/unified6.PNG";

import { FiExternalLink } from "react-icons/fi";
import {FaGithub} from "react-icons/fa";

function Unified() {
  return (
    <>
      <div
        id="carouselUnified"
        className="carousel slide relative mt-20"
        data-bs-ride="carousel"
      >
        <h1 className=" text-2xl md:text-4xl font-bold text-center">
          Unified 
        </h1>
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0">
          <button
            type="button"
            data-bs-target="#carouselUnified"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselUnified"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselUnified"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselUnified"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselUnified"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden max-w-4xl border-2 md:border-8 border-black">
          <div className="carousel-item active relative float-left w-full">
            <img src={unified1} className="block " alt="..." height="460" />
          </div>

          <div className="carousel-item relative float-left w-full">
            <img src={unified2} className="block w-full" alt="..." />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src={unified3} className="block w-full" alt="..." />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src={unified4} className="block w-full" alt="..." />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src={unified6} className="block w-full" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselUnified"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselUnified"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <p className="mx-auto mt-4 font-semibold md:text-xl max-w-4xl">
        Unified is a dashboard that gives you a single, holistic view of all your crypto on-chain addresses (DeFi) and exchange accounts (CeFi).
        </p>
        <p className="mx-auto mt-4 font-semibold md:text-xl max-w-4xl">
          Users are able to:
          <ul className="md:list-disc">
            <li className='md:ml-5'>View total networth across all linked on-chain addresses(DeFi) and exchange accounts (CeFi) </li>
            <li className='md:ml-5'>View historical networth performance in the form of line chart.</li>
            <li className='md:ml-5'>View balances across diferent blockchain protocols and exchanges.</li>
            <li className='md:ml-5'>View useful market and onchain data including open interest, funding rates, on-chain balance/flow metrics and exchange balance/flow metrics.</li>
          </ul>
        </p>
    
        <p className="mx-auto mt-4 font-semibold md:text-xl max-w-4xl">
          This website was a part time side project created for a client in 3 months in a team of 4.
        </p>
        <p className="mx-auto mt-4 font-semibold md:text-xl max-w-4xl">
          Technologies:{" "}
          <span className="font-normal">
            ReactJS, CSS + Bootstrap + Tailwind, GoLang, PostgreSQL, Docker
          </span>
        </p>
        <p className="mx-auto mt-4 font-semibold md:text-xl max-w-4xl">
          Role:{" "}
         
            Frontend Developer
      
        </p>
      </div>
      <div className='flex'>
        {/* <a href="https://caloricestore.com/" target="_blank" className='rounded-full border-2 border-black flex items-center p-2 font-medium mt-4 hover:text-white hover:bg-black'>
            Demo website
            <FiExternalLink className='ml-2 md:text-xl'/>
        </a> */}
        {/* <a href="https://github.com/taykianyick/capstone_brogrammers" target="_blank" className='ml-10 rounded-full border-2 border-black flex items-center p-2 font-medium mt-4 hover:text-white hover:bg-black'>
            Source Code
            <FaGithub className='ml-2 md:text-xl'/>
        </a> */}
      </div>
    </>
  );
}

export default Unified;
