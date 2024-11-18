import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        georgia: "var(--georgia-font)",
        poppins: "var(--poppins-font)",
        workSans: "var(--workSans-font)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ruby: '#AF1837'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/Cafge_hero.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
export default config;
