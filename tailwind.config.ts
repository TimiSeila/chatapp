import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#998BF5",
        secondary: "#5A417C",
        background: {
          light: "#272838",
          dark: "#1A1B26"
        },
        
        white: {
          100: "#EEEFFF",
          75: "rgba(238, 239, 255, 0.75)",
          50: "rgba(238, 239, 255, 0.5)",
          25: "rgba(238, 239, 255, 0.25)",
          10: "rgba(238, 239, 255, 0.1)",
          5: "rgba(238, 239, 255, 0.05)",
        }
      }
    },
  },
  plugins: [],
};
export default config;
