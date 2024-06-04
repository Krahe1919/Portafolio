'use client'

import { socialNetworks } from "@/data";
import MotionTransition from "./trasnsition-component"
import Link from "next/link"

export const Header = () => {
    return(
        <MotionTransition position="bottom" className="absoulute z-40 inline-block w-full top-5 md:top-10">
                <header>
                    <div className="container justify-between max-w-6xl mx-auto md:flex">
                        <Link href="/">
                            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                                Harol
                                    <span className="text-violet">
                                        Dev
                                    </span> 
                            </h1>
                        </Link>
                            <div className="flex items-center justify-center gap-7">
                            {socialNetworks.map(({logo, src, id}) => (
                                <Link key={id}
                                    href={src}
                                    target="_blank"
                                    className="transition-all duration-300 hover:text-violet"
                                >
                                    {logo}
                                </Link>
                            ))}

                        </div>
                    </div>
                </header>
        </MotionTransition>
    );
}