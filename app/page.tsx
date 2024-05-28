"use client"

import { useState } from "react";
import Image from "next/image";
import { Container } from "postcss";
import { TiThMenu } from "react-icons/ti";
import { FaSquareGithub } from "react-icons/fa6";
import { GoBriefcase } from "react-icons/go";
import { Sidebar } from "./components/sidebar"; 
import { IoClose } from "react-icons/io5";
import { FiAlignRight } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { CoverParticles } from "./components/cover-particles"

export default function Home() {

  const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

  return (
    <main className="">
      <div className="min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles/>
          <div
            className={`fixed inset-y-0 right-0 w-64 z-20 shadow-lg transform transition-transform duration-300 ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Sidebar toggleMenu={toggleMenu} />
          </div>
            <div/>
            <div className="flex items-center justify-between p-6 text-2xl">
              <div className="px-24 md:block hidden "></div>
                <div className="flex items-center">
                  <FaReact className="mr-4"/>Developer
                </div>
                <div>
                  Home
                </div>
                  <button onClick={toggleMenu} className="h-14 w-14 border rounded-full  flex items-center justify-center text-2xl hover:bg-white">        
                    <FiAlignRight/>   
                </button>
          </div>
          <div className="flex flex-col sm:flex-row items-start justify-center lg:space-x-6 h-[100vh]">
            <div className="flex flex-col items-center bg-green-400 space-y-6 w-full sm:w-[15%]">
              <div className="h-52 w-52 rounded-full bg-orange-400 mt-6"></div>
              <h1 className="text-3xl">Harol Moreno</h1>
              <h1 className="">Frontend Developer</h1>
              <ul className="flex space-x-3">
                <li><FaSquareGithub /></li>
                <li><FaSquareGithub /></li>
              </ul>
              <div className="bg-gray-400 h-full w-full flex justify-center p-8">
                <button className="border border-red-400 px-2 py-2 rounded-full w-[80%]">
                  DONWLOAD CV
                </button>
              </div>
            </div>
            <div className="bg-green-400 w-full sm:w-[43%] p-10">
              <h1 className="mb-8 font-bold text-2xl">ACERCA DE MI</h1>
              <h3 className="mb-6 font-bold">Hello, I’m Robert Smith</h3>
              Hello I’m Robert Smith. Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Strong background in project management and customer relations.
            </div>
            
            
            <nav className="bg-green-400 w-full sm:w-12 order-first sm:order-none p-2 flex sm:flex-col items-center overflow-x-auto max-w-full whitespace-normal"> 
              <div className="px-2 ">
                  <div className="rounded-full border h-12 w-12"> </div> 
              </div>
                <ul className="flex sm:flex-col w-full text-4xl items-center">  
                    <li className="py-2 px-6"><GoBriefcase /></li>
                    <li className="py-2 px-6"><GoBriefcase /></li>
                    <li className="py-2 px-6"><GoBriefcase /></li>
                    <li className="py-2 px-6"><GoBriefcase /></li>
                    <li className="py-2 px-6"><GoBriefcase /></li>
                    
                </ul>
            </nav>
          </div>
        </div>
      </main>
    
  );
}
