import { useState } from "react"
import { HiMiniBars3CenterLeft } from "react-icons/hi2"
import { LiaTimesSolid } from "react-icons/lia"
import Clock from "./Clock"
import { FaRegKissWinkHeart } from "react-icons/fa"

const Navbar = () => {
    const [ isOpen , setIsOpen ] = useState<boolean>(false)

    const handleNav = () => {
        setIsOpen(true)
    }
    const handleX = () => {
        setIsOpen(false)
    }
  return (
    <div className="relative">
    <div className="fixed lg:mb-24 left-0 w-full top-0  z-40">
        <div className="flex justify-between items-center  w-full p-4">
            <Clock />
            <nav className="shadow-sm bg-white/10 text-black border-2 backdrop-blur-md px-10 py-2 z-10  rounded-full lg:flex hidden">
                <ul className="flex items-center justify-between space-x-16 font-ubuntu">
                    <li>Blog</li>
                    <li> <a href="#projects">Projects</a></li>
                    <li className="text-3xl font-bold"><a href="/">G</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <FaRegKissWinkHeart className="w-8 h-8" />
        </div>
        <div className="flex justify-between p-2 items-center lg:hidden shadow-sm top-0 bg-white absolute w-full">
                <div className="flex items-center gap-2">
                    <span>
                        {isOpen 
                            ? 
                            <span onClick={handleX}>
                                <LiaTimesSolid className="w-8 h-8" />
                            </span>
                            :
                            <span onClick={handleNav}>
                                <HiMiniBars3CenterLeft className="w-8 h-8 font-bold" />
                            </span>
                        }
                    </span>
                </div>
                <h1 className="text-4xl font-bold">G</h1>
                <div>
                    <FaRegKissWinkHeart className="w-8 h-8" />
                </div>
                <nav className={`fixed top-0 left-0 w-full h-full bg-gray-900 text-white z-40 transform origin-top-left transition-transform duration-500 ease-in-out ${
                            isOpen ? "scale-100" : "scale-0 rounded-b-xl"
                    }`}>
                        <button
                        className="absolute top-6 right-6 text-white text-2xl"
                        onClick={() => setIsOpen(false)}
                        >
                        ✕
                        </button>
                    <ul className="flex flex-col items-center font-medium text-4xl p-6 justify-center absolute left-[7.5rem] top-[20%] space-y-10">
                        <a onClick={handleX}  className="transition">Blog</a>
                        <a href="#projects" onClick={handleX}  className="transition">Projects</a>
                        <a href="#about" onClick={handleX} className="transition">About</a>
                        <a href="#contact" onClick={handleX} className="transition">Contact</a>
                    </ul>
                </nav>
        </div>
    </div>
    </div>
  )
}

export default Navbar
