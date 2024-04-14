/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "iran-sans": "iran-sans"
      },
      colors: {
        gray: "#0000008f",
      },
      width: {
        "about-desktop": "24rem",
      },
      maxWidth: {
        "container-size": "36rem",
        "container-medium": "60rem",
      },
      minWidth: {
        "phone-size": "10rem",
      },
      fontSize: {
        "sm-300": [
          "0.9rem",
          {
            lineHeight: "1.8rem",
          },
        ],
        "sm-200": "0.7rem",
      },
      backgroundImage: {
        "support-header":
          "linear-gradient(180deg,rgba(2,0,0,0),#a62626 80%),url('/img/png/support-header-img.png')",
        "about-divar": "url('/img/svg/about-monitor.svg'),url('/img/png/about-divar-desktop.png')",
      },
    },
  },
  plugins: [],
};
