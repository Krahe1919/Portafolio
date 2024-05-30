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
import { itemsNavbar } from "@/data";
import Link from "next/link"
import personaImg from '../public/persona.png';
import { usePathname } from "next/navigation";
import { Navbar } from "./components/navbar";
import { TransitionPage } from "./components/TransitionPage";

export default function Home() {

  const router = usePathname()

  const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles/>
      </div>
    </main>




    // <main className="">
    //   <div className="min-h-[100vh] h-full bg-no-repeat bg-gradient-cover ">
    //     <CoverParticles/>
    //       <div
    //         className={`fixed inset-y-0 right-0 w-64 z-20 shadow-lg transform transition-transform duration-300  ${
    //           showMenu ? "translate-x-0" : "translate-x-full"
    //         }`}
    //       >
    //         <Sidebar toggleMenu={toggleMenu} />
    //       </div>
    //         <div/>
            
    //       <div className="flex flex-col sm:flex-row items-start justify-center lg:space-x-6 h-[100vh]">
    //         <div className="flex flex-col items-center bg-green-400 space-y-6 w-full sm:w-[15%]">
    //           <div className="h-52 w-52 rounded-full mt-6 relative"> 
    //           <Image 
    //                 src={personaImg} 
    //                 alt="Persona" 
    //                 layout="fill" 
    //                 objectFit="cover" 
    //                 className="rounded-full" 
    //               />
    //           </div>
    //           <h1 className="text-3xl">Harol Moreno</h1>
    //           <h1 className="">Frontend Developer</h1>
    //           <ul className="flex space-x-3">
    //             <li><FaSquareGithub /></li>
    //             <li><FaSquareGithub /></li>
    //           </ul>
    //           <div className="bg-gray-400 h-full w-full flex justify-center p-8">
    //             <button className="border border-red-400 px-2 py-2 rounded-full w-[80%]">
    //               DONWLOAD CV
    //             </button>
    //           </div>
    //         </div>
    //         <div className="bg-gray-400 w-full sm:w-[43%] p-10">
    //           <h1 className="mb-8 font-bold text-2xl">ACERCA DE MI</h1>
    //           <h3 className="mb-6 font-bold">Hello, I’m Robert Smith</h3>
    //           Hello I’m Robert Smith. Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Strong background in project management and customer relations.
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    
  );
}
