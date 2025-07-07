module.exports = {
  content: ['./src/App.tsx' ,
    './src/components/Navbar.tsx' ,
    './src/components/CardBoard.tsx' ,
    './src/components/Projects.tsx' ,
    './src/components/About.tsx' ,
    './src/components/Contact.tsx' ,
    './src/components/Footer.tsx' ,
    './src/components/ContactForm.tsx' ,
    './src/components/Particles.tsx' ,
    './src/components/Clock.tsx' ,
    './src/components/SplitText.tsx' ,
    './src/components/DecryptedText.tsx' ,
    './src/text/AboutMeText.tsx' ,
    './src/text/Mission.tsx' ,
  ],
  theme: {
    extend: {
      fontFamily : {
        ubuntu : [ 'Ubuntu' , 'sans-serif'],
        outfit : [ 'Outfit' , "sans-serif"],
        quantico : [ 'Quantico', 'sans-serif'],
        poppins : ['Poppins' , 'sans-serif']
      },

      colors: {
        background: '#0D1117',
        surface: '#161B22',
        accent: {
          purple: '#A259FF',
          blue: '#00CFFF',
        },
        text: {
          main: '#C9D1D9',
          muted: '#8B949E',
        },
        success: '#3FB950',
        error: '#F85149',
    }
    },
  },
  plugins: [],
}
