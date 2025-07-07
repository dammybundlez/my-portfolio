import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Food Recipe Web',
    desc: 'Discover delicious recipes from around the world, save your favorites, and cook with confidence. Whether you’re a beginner or a seasoned chef, our app makes it easy to find, follow, and enjoy great meals every day.',
    image: '/foodRecipe.png',
    position: 'lg:top-[10%] lg:left-[7%] top-14  left-[11%] lg:w-[30%] w-[80%]',
    rotate: 'lg:-rotate-3',
    linkurl: 'https://tastybitsz.vercel.app',
    tech : ['React JS' , 'Tailwind CSS' , 'Spoonacular API']
  },
  {
    title: 'Book Library',
    desc: 'Full-stack shop with Stripe + product management.',
    image: '/library.png',
    position: 'lg:top-[46%] top-[71%] left-[11%] lg:left-[8%] md:w-72 lg:w-[30%] w-[80%]',
    rotate: 'lg:rotate-2',
    linkurl: 'https://godswill-library.netlify.app',
    tech : ['React JS' , 'Tailwind CSS' , 'Google Books API']

  },
  {
    title: 'dashboard UI',
    desc: 'A dynamic, all-in-one dashboard that adapts to you. Easily add, resize, and arrange widgets like weather, notes, crypto, news, and more — all in a sleek, responsive interface designed for productivity and personalization.',
    image: '/dashboard.png',
    position: 'lg:top-[10%] top-[24.6%] lg:left-[65%] md:w-60 left-[11%] lg:w-[30%] w-[80%]',
    rotate: 'lg:rotate-3',
    linkurl : 'https://dashboard-widget-rho.vercel.app/',
    tech : ['Next JS' , 'Tailwind CSS' , 'OpenWeatherMap API' , 'GNews API' , 'Coingecko API', 'Zenquote API']

  },
  {
    title: 'Expense Tracker',
    desc: 'Track your spending, stay on budget, and gain control of your finances — all in one place. Our expense tracker makes it easy to log transactions and manage your money with clarity and confidence.',
    image: '/tracker.png',
    position: 'lg:top-[14%] lg:left-[40%] top-[49.5%] md:w-64 w-[80%] left-[11%]',
    rotate: 'lg:rotate-1 lg:scale-105',
    linkurl: 'https://temi-nine.vercel.app/',
    tech : ['React JS' , 'Tailwind CSS' ]

  },
];
const Projects = () => {
  return (
   <div id="projects" className="relative bg-[#E8988A]  lg:h-[150vh] h-[220vh] lg:mt-[130vh] mt-[100vh] text-black font-ubuntu">
    <div className="flex gap-8">
        <h1 className="lg:text-[9rem] text-5xl text-black font-bold mb-20 px-20 absolute left-[-4.5rem] lg:left-0 top-[-2.3rem] lg:top-[-7.5rem]">
            Projects.
        </h1>
        
        <div className=''>
                {cards.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 }}
                    viewport={{ once: true }}
                    className={`absolute ${card.position} md:block z-10`}
                >
                <a href={card.linkurl}>
                  <div className={`bg-[#dce2d855] p-4 rounded-xl shadow-xl ${card.rotate} overflow-hidden`}>
                      <div className="relative group">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-40 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="lg:absolute inset-0 bg-black/50 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-center text-sm p-2">
                            {card.desc}
                        </div>
                      </div>
                      <h3 className="text-main font-semibold text-lg mt-3">{card.title}</h3>
                      <div className='flex gap-x-3 flex-wrap'>
                        {card.tech?.map((e ) => (
                          <p  className='text-[#e66d57] text-sm font-quantico'>{e}</p>
                        ))}
                      </div>
                  </div>
                </a>
                </motion.div>
            ))}
            
            
        </div>
    </div>
   </div>
  )
}

export default Projects
