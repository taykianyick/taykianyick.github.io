import React from "react";
import { FiDownload } from "react-icons/fi";

function Resume() {
  
    return (
        <div
        id="resume"
        className=" w-full flex flex-col items-center  px-4 justify-center "
      >
        <h1 className="mt-36 text-5xl md:text-7xl font-medium text-center">Resume</h1>
        <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" className="mt-6 flex flex-row gap-2 items-center p-3 border-2 border-black rounded-full font-semibold" data-mdb-ripple="true">DOWNLOAD RESUME <FiDownload/></a>
      </div>
    )
}

export default Resume