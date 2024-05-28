'use client'

import { FaSquareGithub } from "react-icons/fa6";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiAlignRight } from "react-icons/fi";

interface SidebarProps {
    toggleMenu: () => void;
  }

export const Sidebar: React.FC<SidebarProps> = ({ toggleMenu }) => {
    
    return(
        <div className="flex justify-end relative">
            <div className="bg-red-400 flex flex-col items-center w-64 h-[100vh]"> 
                <div className="flex flex-col items-center bg-green-400 space-y-6 w-full sm:w-[90%]">
                    <div className="h-52 w-52 rounded-full bg-orange-400 mt-6"></div>
                    <h1 className="text-3xl">Harol Moreno</h1>
                    <h1 className="">Frontend Developer</h1>
                    <ul className="flex space-x-3 p-4 text-2xl">
                        <li><FaSquareGithub /></li>
                        <li><FaSquareGithub /></li>
                    </ul>
                </div>
                <div className="bg-blue-400 w-full flex justify-center text-xl mt-4 my-4">
                    tags
                </div>
                <div className="bg-yellow-500 w-full flex flex-wrap space-x-4 ">
                    <div className="border border-gray-400 mx-2 my-1">React.js</div>
                    <div className="border border-gray-400 mx-2 my-1">Next.js</div>
                    <div className="border border-gray-400 mx-2 my-1">Vite</div>
                    <div className="border border-gray-400 mx-2 my-1">Tailwind CSS</div>
                </div>
                <div className="mt-auto mb-4">
                    <button onClick={toggleMenu} className="bg-blue-800 text-white px-4 py-2 rounded-full h-16 w-16 text-3xl"> <IoClose/></button>
                </div>
            </div>
        </div>
    );
};
