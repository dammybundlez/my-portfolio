import About from "./components/About"
import CardBoard from "./components/CardBoard"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

import { Helmet } from 'react-helmet'

const App = () => {
  return (
    <>
      <Helmet>
        <title>Godswill Oguike | Front End Web Developer</title>
        <meta name="description" content="Portfolio of Godswill Oguike — full-stack web developer building clean, modern web apps." />
        <meta name="keywords" content="Web Developer, Godswill Oguike, React, JavaScript, Portfolio, Full Stack" />
        <meta name="author" content="Godswill Oguike" />

        <meta property="og:title" content="Godswill Oguike | Web Developer" />
        <meta property="og:description" content="Explore full-stack apps and UI projects by Godswill Oguike." />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Godswill Oguike | Web Developer" />
        <meta name="twitter:description" content="Clean UIs and full-stack projects built with modern tech." />
        <meta name="twitter:image" content="/preview.png" />

        <link rel="canonical" href="https://yourdomain.com" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main className="overflow-x-hidden relative">
        <div className="flex flex-col text-[#1e293b] snap-y snap-mandatory overflow-y-scroll overflow-x-hidden ">
          <Navbar />
          <CardBoard />
          <div></div>
          <Projects/>
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
