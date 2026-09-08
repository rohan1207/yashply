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
          espresso: "#1A1A1A",
          umber: "#3A2418",
          ink: "#111111",
          timber: "#E30613",
          copper: "#E30613",
          bronze: "#B80510",
          red: "#E30613",
          gold: "#F5C400",
          brass: "#C4A574",
          cream: "#FFFFFF",
          ivory: "#FFFFFF",
          sand: "#F3F3F3",
          stone: "#6B6B6B",
          mist: "#5C5C5C",
          line: "rgba(0, 0, 0, 0.08)",
        },
      },
      boxShadow: {
        card: "0 18px 50px rgba(0, 0, 0, 0.08)",
        float: "0 18px 40px rgba(0, 0, 0, 0.14)",
        soft: "0 4px 18px rgba(0, 0, 0, 0.06)",
        glow: "0 12px 32px rgba(227, 6, 19, 0.28)",
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
