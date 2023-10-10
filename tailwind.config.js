/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        desaturatedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkGrayishRed: "hsl(0, 6%, 24%)",
      },
      backgroundImage: {
        bgImageDesktop: "url(/images/hero-desktop.jpg)",
        bgImageMobile: "url(/images/hero-mobile.jpg)",
        bgPattern: "url(/images/bg-pattern-desktop.svg)",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
