/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}","./*.html"],

  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
       
        textcolor: "var(--textcolor)",

      },
     
    },
  },
  plugins: [],
};
