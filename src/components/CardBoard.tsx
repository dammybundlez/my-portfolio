import Particles from "./Particles"
const CardBoard = () => {
  return (
    <div className="">
      <div className="w-full fixed flex flex-col text-white bg-[#e7e1e1] font-poppins min-h-screen  items-center justify-center h-[140vh] z-0 top-0 left-0">
        <div className="w-full absolute top-[19rem] lg:top-0 lg:h-[100%]">
              <Particles
                amplitude={2}
                distance={0}
                enableMouseInteraction={true}
                />
          </div>
          <div className="font-oufit absolute lg:top-[15%] left-[0%] w-full  text-black">
            <section className="relative h-screen w-full flex flex-col leading-none items-center justify-center">
                  <p  className="lg:left-24 lg:top-[7%] md:top-24 sm:top-24 md:left-32 sm:left-32 font-light top-3 left-11 absolute lg:text-[2.3rem] text-[1.3rem] font-quantico"  >
                    Hi, I'm 
                  </p>
                  <h1
                      className=""
                  > 
                    <span className="text-[3rem] tracking-normal hover:tracking-widest transition-all duration-300 absolute lg:left-24 md:left-32 sm:left-32  md:top-[20%] sm:top-[20%] left-10 top-9 lg:top-[12%] md:text-[4rem] sm:text-[4rem] lg:text-[9rem] font-extrabold text-left shiny-text">OGUIKE</span>    
                  </h1>

                  <h1
                    
                      className="text-[3rem] lg:text-[9rem] mt-4 tracking-normal hover:tracking-widest transition-all duration-300 font-extrabold absolute md:top-[27%] sm:top-[27%] md:text-[4rem] sm:text-[4rem] lg:right-24 md:right-32 sm:right-32 right-10 top-20 lg:top-[33%]"
                      >
                    GODSWILL
                  </h1>
                  <p
                      className="mt-11 text-md  lg:text-xl font-semibold font-poppins flex flex-col items-center top-28 lg:top-[21rem] md:top-[15rem] sm:top-[15rem] absolute text-muted max-w-2xl"
                      >
                      Front End Developer
                      <span className="text-base mt-2 font-poppins tracking-widest text-gray-600">Passion. &nbsp; Code. &nbsp; Craft.</span>
                  </p>                   
              </section>
          </div>
      </div>
    </div>
  )
}

export default CardBoard
