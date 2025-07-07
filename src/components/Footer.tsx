import ContactForm from "./ContactForm"

const Footer = () => {
  return (
    <footer className="bg-black clip-path text-white font-ubuntu flex items-center h-[30vh] relative">
        <div className="lg:px-20 px-2 flex justify-between items-center">
            <div className="lg:w-[80%] text-center lg:text-left">
                <p>
                    Coded with Visual Studio Code by Me. Built with ReactJs and  Tailwind CSS, deployed with Vercel
                </p>
            </div>
            <div className="lg:w-[40%] w-[90%] absolute lg:bottom-10 left-5 bottom-40 lg:left-[42rem] z-50">
                <ContactForm />
            </div>
        </div>
    </footer>
  )
}

export default Footer
