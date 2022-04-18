import React from "react";
import ScrollIntoView from "react-scroll-into-view";

function Intro() {
  return (
    <div
      id="intro"
      className=" w-full h-screen bg-cover flex flex-col items-center text-center  px-4 justify-center min-h-screen"
    >
      <div className="uppercase  font-extrabold">
        <h1 className="text-4xl md:text-6xl">Hello! My Name is</h1>
        <h1 className="text-6xl md:text-8xl text-gray-600">Kenny Tay</h1>
        <h1 className="text-4xl md:text-6xl">I'm a fullstack developer</h1>
      </div>
      <ScrollIntoView
        selector="#portfolio"
        className="mt-8 rounded-full px-3.5 py-2 m-1 cursor-pointer border-2 font-medium border-black hover:text-white hover:bg-black"
      >
        <span className="transition duration-300  ease text-4xl  ">
          View Portfolio
        </span>
      </ScrollIntoView>
    </div>
  );
}

export default Intro;
