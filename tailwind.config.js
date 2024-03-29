module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: { 
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        green: {
          light: '#7b8c52',
          DEFAULT: '#485933',
          dark: '#1e2616',
        },
        gray: {
        DEFAULT: '#f2f2f2', 
        dark: '#3D413B',
        }
    
      },
      fontFamily: {
        'Novel': ["novel-display", "sans-serif"]
      },
},
}}
