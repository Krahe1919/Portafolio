'use client'

import MotionTransition from "./trasnsition-component"
import Link from "next/link"

export const Header = () => {
    return(
        <MotionTransition position="bottom"className="absoulute z-40 inline-block w-full top-5 md:top-10">
                <header>
                    <div className="container justify-between max-w-6xl mx-auto md:flex">
                        <Link href="/">
                            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                                Harol
                                    <span className="text-violet">
                                      Text
                                    </span> 
                            </h1>
                          </Link>
                    </div>
                </header>
          </MotionTransition>
    );
}