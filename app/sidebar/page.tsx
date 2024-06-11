import { FaSquareGithub } from "react-icons/fa6";

export default  function Sidebar () {
    return(
        <div className="flex justify-end">
            <div className="bg-red-400 flex flex-col items-start justify-start w-[18%] h-[100vh] space-y-4"> 
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center bg-green-400 space-y-6 w-full sm:w-[90%]">
                        <div className="h-52 w-52 rounded-full bg-orange-400 mt-6"></div>
                        <h1 className="text-3xl">Harol Moreno</h1>
                        <h1 className="">Frontend Developer</h1>
                        <ul className="flex space-x-3 py-8">
                            <li><FaSquareGithub /></li>
                            <li><FaSquareGithub /></li>
                        </ul>
                    </div>
                </div>
                    <div className="flex flex-col justify-center items-center  bg-blue-500 w-full">
                        <div className="bg-yellow-500 text-2xl">
                             tags
                        </div>
                    </div>
                    <div className="bg-blue-400 w-full space-x-4 space-y-4 text-2xl flex flex-wrap">
                        <span className="border">React.js</span>
                        <span className="border">Next.js</span>
                        <span className="border">Vite</span>
                        <span className="border">Tailwind css</span>
                    </div>
            </div>
        </div>
    )

}