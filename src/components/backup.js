import React, {useState} from "react";
import {FiMenu} from 'react-icons/fi'
import {RiCloseLine} from 'react-icons/ri'

function Navbar() {
    let links = [
        {name:"PORTFOLIO", link:"/"},
        {name:"ABOUT", link:"/"},
        {name:"RESUME", link:"/"},
        {name:"CONTACT", link:"/"},
        {name:"GITHUB", link:"/"},
        {name:"LINKEDIN", link:"/"},
    ];
    let [open,setOpen] = useState(false);
    return (
        <div className=' w-full relative top-0 left-0 p-2 bg-white'>
            <div className='md:flex items-center justify-between bg-white '>
                <div className='m-10 border-4 border-solid w-14 h-12 border-black rounded-r-lg mt-1 pt-1 mb-1 justify-center text-center ' >
                    <span className='cursor-pointer'>
                        <a className=' text-3xl m-auto '>
                            K
                        </a>
                    </span>
                <div onClick={()=>setOpen(!open)}className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>   
                    {open ? <RiCloseLine/> : <FiMenu /> }
                </div>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100 ':'top-[-490px] md:opacity-100'}`}>
                  {
                      links.map((link)=>(
                          <li key={link.name} className='md:ml-8 text-base lg:text-lg md:my-0 my-7 bg-white'>
                              <a href={link.link} className='text-gray-800 hover:border-b-2 hover:border-black transition-'>{link.name}</a>
                          </li>
                      ))
                  }
               
                </ul>
            </div>
        </div>
    )
}

export default Navbar