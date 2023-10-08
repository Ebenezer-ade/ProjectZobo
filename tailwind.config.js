/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'vsm': '1px',
      sm: '375px',
      'nsm': '600px',      
      md: '450px',
      lg: '670px',
      xl: '1540px',
    },

    extend: {
      colors: {   
        'light-cyans': 'hsl(193, 38%, 86%)',  //Added s at the end of every name to avoid clashes
        'neon-greens': 'hsl(150, 100%, 66%)',
        'whites': 'hsl(0, 0%, 100%)',
        'grayish-blues': 'hsl(217, 19%, 38%)',
        'dark-grayish-blues': 'hsl(217, 19%, 24%)',
        'dark-blues': 'hsl(218, 23%, 16%)' ,
        
      },
      fontFamily: {
        manrope: ['Manrope'],        
      }
    },
  },
  plugins: [],
}

