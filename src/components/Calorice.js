import React from "react";
import calorice1 from "../images/calorice1.PNG";
import calorice2 from "../images/calorice2.PNG";
import calorice3 from "../images/calorice3.PNG";
import calorice4 from "../images/calorice4.PNG";
import calorice6 from "../images/calorice6.PNG";
import { FiExternalLink } from "react-icons/fi";
import {FaGithub} from "react-icons/fa";

function Calorice() {
  return (
    <>
      <div
        id="carouselCalorice"
        className="carousel slide relative mt-6"
        data-bs-ride="carousel"
      >
        <h1 className=" text-2xl md:text-4xl font-bold text-center">
          Calorice Store
        </h1>
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0">
          <button
            type="button"
            data-bs-target="#carouselCalorice"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCalorice"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCalorice"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCalorice"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCalorice"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden max-w-4xl border-2 md:border-8 border-black">
          <div className="carousel-item active relative float-left w-full">
            <img src={calorice1} className="block " alt="..." height="460" />
          </div>

          <div className="carousel-item relative float-left w-full">
            <img src={calorice2} className="block w-full" alt="..." />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src={calorice3} className="block w-full" alt="..." />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src={calorice4} className="block w-full" alt="..." />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src={calorice6} className="block w-full" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselCalorice"
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
          data-bs-target="#carouselCalorice"
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
          Calorice Store is a mock e-commerce website that aims to bring
          customizable bentos to the masses, whether they are on diet or they
          are looking for delicious savoury cravings.{" "}
        </p>
        <p className="mx-auto mt-4 font-semibold md:text-xl max-w-4xl">
          Users may customize their bentos based on their daily calories intake
          or simply pick from readily pre-customised bentos.Mock orders are
          integrated together with "Stripe" to simulate payments made by
          customers.
        </p>
        <p className="mx-auto mt-4 font-semibold md:text-xl max-w-4xl">
          Admin may also utilize the admin dashboard to add or edit foods to
          the, and also view users' information and queries
        </p>
        <p className="mx-auto mt-4 font-semibold md:text-xl max-w-4xl">
          This website was created in 2 weeks time in a team of 3 for a capstone
          project.{" "}
        </p>
        <p className="mx-auto mt-4 font-semibold md:text-xl max-w-4xl">
          Technologies:{" "}
          <span className="font-normal">
            HTML5, CSS, Javascript, JQuery, PHP, phpMyAdmin, MySQL, MeekroDB{" "}
          </span>
        </p>
        <p className="mx-auto mt-4 font-semibold md:text-xl max-w-4xl">
          Role:{" "}
        
            Fullstack Developer
      
        </p>
      </div>
      <div className='flex'>
        <a href="https://caloricestore.com/" target="_blank" className='rounded-full border-2 border-black flex items-center p-2 font-medium mt-4 hover:text-white hover:bg-black'>
            Demo website
            <FiExternalLink className='ml-2 md:text-xl'/>
        </a>
        <a href="https://github.com/taykianyick/capstone_brogrammers" target="_blank" className='ml-10 rounded-full border-2 border-black flex items-center p-2 font-medium mt-4 hover:text-white hover:bg-black'>
            Source Code
            <FaGithub className='ml-2 md:text-xl'/>
        </a>
      </div>
    </>
  );
}

export default Calorice;
