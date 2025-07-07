import AboutMeText from "../text/AboutMetext"
import Mission from "../text/Mission"

const About = () => {
  return (
    <div id="about" className="font-ubuntu flex flex-col">
      <div className='flex h-[150vh] md:h-[100vh] sm:h-[100vh]  relative '>  
        <h1 className="lg:text-[9rem] text-5xl text-black font-bold mb-20 px-20 absolute left-[-4.5rem] lg:left-0 top-[-2.3rem] lg:top-[-7.5rem]">
            About Me.
        </h1>
        <div className="flex flex-col  lg:flex-row items-center w-full">
          <div className="lg:w-[50%] bg-[#eceaea] lg:px-20 p-2 pt-10 h-full">
            <p className="text-2xl lg:text-4xl font-semibold mb-3">Background</p>
            <AboutMeText/>
          </div>
          <div className="lg:w-[50%] bg-[#FEFBC7] lg:px-20  p-2 h-full">
            <p className="text-2xl lg:text-4xl lg:pt-9 font-semibold mb-3 mt-10">Mission</p>
            <Mission/>
          </div>

        </div>
      </div>
      {/* <div className='bg-[#ebebe1] flex flex-col items-center justify-center group h-[90%] px-20 py-10'>
            <span className="highlight-skew mb-5 group-hover:after:w-full">Story</span>  
            <p className="lg:text-[1.9rem]/snug relative font-medium text-wrap break-before-all">
                My journey started back in high school when I got curious about how websites worked. I enrolled in a local computer school where I learned the basics of HTML and CSS. From there, I went on to study Computer Science at Escae University Benin, where I deepened my understanding of programming, databases, and software development.
                Outside of formal education, I also took several online courses from platforms like Udemy and freeCodeCamp, which helped me master tools like JavaScript, React, Next.js, and Node.js.
            </p>                            
        </div> */}
    </div>
  )
}

export default About
