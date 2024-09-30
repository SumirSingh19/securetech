/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: "#003661",
        steelblue: {
          "100": "#3c7ab6",
          "200": "#0094d6",
          "300": "#406b8a",
          "400": "#336994",
          "500": "rgba(0, 148, 214, 0.09)",
        },
        
        gray: {
          "100": "#fcfcfc",
          "200": "#242424",
          "300": "#1e1e1e",
          "400": "#082236",
          "500": "#101417",
          "600": "rgba(30, 30, 30, 0.1)",
          "700": "rgba(0, 0, 0, 0)",
          "800": "rgba(255, 255, 255, 0.77)",
        },
        orangered: {
          "100": "#fb6c1b",
          "200": "#e21b01",
        },
        black: "#000",
        silver: "#b4c0c7",
        firebrick: "#d33f3f",
        darkslategray: {
          "100": "#3f4852",
          "200": "#333",
          "300": "#0d3756",
        },
        whitesmoke: "#eee",
        deepskyblue: "#00aeef",
        darkgray: "#959595",
        chocolate: "#f38230",
        "bg-orange-600": "rgb(234 88 12)",
      },
      
      spacing: {sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',},
      fontFamily: {
        poppins: "Poppins",
        inter: "Inter",
        "palatino-linotype": "'Palatino Linotype'",
        inherit: "inherit",
        "noto-sans": "'Noto Sans'",
        roboto: "Roboto",
        "roboto-slab": "'Roboto Slab'",
        headlandone: "HeadlandOne",
      },
      borderRadius: {
        "11xl": "30px",
        "22xl-9": "41.9px",
        "189xl": "208px",
        "base-5": "16.5px",
        "146xl": "165px",
        "21xl": "40px",
        "9xl": "28px",
      },
    },
    fontSize: {
      xs: "0.75rem", 
      smi: "0.8125rem",  // 15px to rem
      sm: "0.875rem",  
      mini: "0.9375rem",
      base: "1rem", 
      mid: "1.0625rem",
      lg: "1.5rem", 
      "lg-5": "1.15625rem",  // 18.5px to rem
      "5xl-2": "1.5125rem",  // 24.2px to rem
      "39xl-9": "3.68125rem",  // 58.9px to rem // 24px to rem
      "4xl-3": "1.45625rem",
      "5xl": "1.55rem",
      "2xl":"2rem",
      "2.5xl":"2.5rem",
      "6xl":"3rem" ,  // 23.3px to rem
      "7xl": "3.2rem",  // 51.2px to rem
      "8xl": "3.63125rem", // 17px to rem
      "9xl": "6rem",  // 96px to rem
      inherit: "inherit",
    },
    screens: {
      // mq975: { raw: "screen and (max-width: 61.25em)" },  // 975px to em
      // mq700: { raw: "screen and (max-width: 43.75em)" },  // 700px to em
      // mq450: { raw: "screen and (max-width: 28.125em)" },  // 450px to em
      sm: { max: '35.99875em' },  // 575.98px to em
      md: { max: '47.99875em' },  // 767.98px to em
      lg: { max: '61.99875em' },  // 991.98px to em
      xl: { max: '79.9375em' },  // 1279px to em
      '2xl': { min: '80em' }, // 1280px to em 
    },
    
  },
  corePlugins: {
    preflight: false,
  },
};
