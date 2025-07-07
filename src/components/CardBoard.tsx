import Particles from "./Particles";

const CardBoard = () => {
  return (
    <div className="relative w-full min-h-[120vh] bg-[#e7e1e1] text-black font-poppins overflow-hidden">
      
      {/* Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          amplitude={2}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-10">
        <p className="text-xl md:text-2xl font-light font-quantico mb-2">
          Hi, I'm
        </p>

        <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[8rem] font-extrabold shiny-text leading-none transition-all duration-300 hover:tracking-widest">
          OGUIKE
        </h1>

        <h1 className="text-[2.5rem] sm:text-[4rem] lg:text-[8rem] font-extrabold mt-2 transition-all duration-300 hover:tracking-widest">
          GODSWILL
        </h1>

        <p className="mt-6 text-lg lg:text-xl font-semibold text-gray-800">
          Front End Developer
          <span className="block text-sm text-gray-600 tracking-widest mt-2">
            Passion. &nbsp; Code. &nbsp; Craft.
          </span>
        </p>
      </section>
    </div>
  );
};

export default CardBoard;
