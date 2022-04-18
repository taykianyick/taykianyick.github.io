import React from "react";
import Calorice from "./Calorice";
import Unified from "./Unified";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className=" w-full bg-cover flex flex-col items-center  px-4 min-h-screen"
    >
      <h1 className="mt-36 text-5xl md:text-7xl font-medium text-center">Portfolio</h1>
      <Calorice />
      <Unified />
      
    </div>
  );
}

export default Portfolio;
