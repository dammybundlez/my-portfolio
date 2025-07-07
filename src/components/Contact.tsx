import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const Contact = () => {
  return (
    <div id="contact" className="relative  lg:h-[70vh] sm:h-[130vh] md:h-[100vh] h-[100vh] bg-white">
        <div>
            <h1 className="lg:text-[9rem] text-5xl text-black font-bold mb-20 px-20 absolute left-[-4.5rem] lg:left-0 top-[-2.3rem] lg:top-[-7.5rem]">
             Contact.
            </h1>
            <div className="lg:mt-28 mt-10 lg:px-20 px-2 w-[100%] items-center justify-center lg:w-[40%] md:w-[40%] lg:text-left flex flex-col space-y-10">
               <p className="max-w-2xl mx-auto lg:text-lg md:text-xl text-2xl font-medium text-black">
                    I'm always open to new opportunities, collaborations, or just a friendly chat.
                    Feel free to reach out!
                </p>
                <div className="flex justify-center gap-10 w-full">
                    <span>
                        <a
                            href="mailto:oguikegodswill@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-yellow-500 transition duration-300"
                        >
                            <FiMail className="w-8 h-8 font-bold"/>
                        </a>
                    </span>
                    <span>
                            <a
                            href="https://github.com/dammybundlez"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-yellow-500 transition duration-300"
                            >
                                <FaGithub className="w-8 h-8 font-bold" />
                            </a>
                    </span>
                    <span>
                            <a
                            href="https://www.linkedin.com/in/godswill-oguike-174224243/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-yellow-500 transition duration-300"
                            >
                                <FaLinkedin className="w-8 h-8 font-bold" />
                            </a>
                    </span>
                    <span>
                            <a
                            href="https://instagram.com/damztech_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-yellow-500 transition duration-300"
                            >
                                <FaInstagram className="w-8 h-8 font-bold" />
                            </a>
                    </span>
                </div>
                <div className="relative inline-block text-center w-full z-10">
                    <span className="absolute top-2.5 left-1.5 w-full h-full   border-2 bg-yellow-500 -z-50"></span>
                    <button
                        type="submit"
                        className="submit w-full py-3 relative text-white bg-black font-semibold transition z-10 duration-300"
                    >
                        <a href="" download >
                            Download CV
                        </a>
                    </button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
