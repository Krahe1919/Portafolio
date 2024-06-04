"use client"

import { CoverParticles } from "./components/cover-particles"
import { Introduction } from "./components/introduction";

export default function Home() {

  return (
    <main>
        <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
          <CoverParticles/>
          <Introduction/>
        </div>
    </main>

  );
}

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
            
    //       
    //       </div>
    //     </div>
    //   </main>
    
  
