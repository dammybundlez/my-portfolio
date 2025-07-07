import ContactForm from "./ContactForm"

const Footer = () => {
  return (
    <footer className="bg-black clip-path text-white font-ubuntu flex items-center h-[30vh] relative">
        <div className="lg:px-20 px-2 flex justify-between items-center">
            <div className="lg:w-[80%] md:w-[52%] text-center lg:text-left md:text-left">
                <p>
                    Coded with Visual Studio Code by Me. Built with ReactJs and  Tailwind CSS, deployed with Vercel
                </p>
            </div>
            <div className="lg:w-[40%] md:w-[44%] w-[90%] absolute lg:bottom-10 md:bottom-24 sm:bottom-24 left-5 bottom-40 lg:left-[42rem] md:left-[24rem] z">
                <ContactForm />
            </div>
        </div>
    </footer>
  )
}

export default Footer
 