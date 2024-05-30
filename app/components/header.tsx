'use client'

import { FaReact } from "react-icons/fa6"
import { FiAlignRight } from "react-icons/fi"
import MotionTransition from "./trasnsition-component"
import Link from "next/link"

export const Header = () => {
    return(
        <MotionTransition position="bottom"className="absoulute z-40 inline-block w-full top-5 md:top-10">
                <header>
                  <div className="container justify-between max-w-6xl mx-auto md:flex">
                      <Link href="/">
                        HarolDev 
                      </Link>
                  </div>
                </header>
          </MotionTransition>
    );
}