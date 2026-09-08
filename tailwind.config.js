/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter Tight", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        yp: {
          /* Navy — from YASH PLY logo */
          espresso: "#0C1623",
          umber: "#152536",
          ink: "#081018",
          /* Gold — primary brand accent */
          timber: "#E4A823",
          copper: "#E4A823",
          bronze: "#C48E14",
          red: "#E4A823",
          gold: "#E4A823",
          brass: "#E4A823",
          cream: "#FFFFFF",
          ivory: "#FFFFFF",
          sand: "#F5F2EA",
          stone: "#6B7280",
          mist: "#5A6570",
          line: "rgba(12, 22, 35, 0.09)",
        },
      },
      boxShadow: {
        card: "0 18px 50px rgba(12, 22, 35, 0.08)",
        float: "0 18px 40px rgba(12, 22, 35, 0.14)",
        soft: "0 4px 18px rgba(12, 22, 35, 0.06)",
        glow: "0 12px 32px rgba(228, 168, 35, 0.32)",
      },
      maxWidth: {
        site: "1440px",
      },
      letterSpacing: {
        wide2: "0.18em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
