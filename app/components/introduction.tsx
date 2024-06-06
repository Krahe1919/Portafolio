"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import MotionTransition from "./trasnsition-component"
import Link from "next/link";

export const Introduction = () => {
    return (
        <MotionTransition position="bottom" className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid justify-center items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                    <Image src="/persona.png" priority width="500" height="500" alt="persona"  className="xl:ml-64 rounded-full mt-10"/>

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-8 min-h-[100px] w-full">
                        si puedes pensarlo ,
                        <TypeAnimation
                            sequence={[
                                "Puedes programarlo",
                                1000,
                                "Puedes optimizarlo",
                                1000,
                                "Puedes implementarlo",
                                1000,
                                "Puedes desarrollarlo",
                                100
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-violet"
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                            Como desarrollor junior frontend, me dedico a autoamprender y adaptarme para generar un contenido de calidad de un equipo de desarrollo
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 my-8">
                        <Link href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer w-fit rounded-xl  text-md hover:bg-violet/50 hover:border-violet/50"> Ver Proyectos
                        </Link>

                        <Link href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer w-fit rounded-xl  text-md hover:bg-violet/50 hover:border-violet/50"> Ver Proyectos
                        </Link>
                    </div>
                </div>
                
                
            </div>

        </MotionTransition>
    );
};
