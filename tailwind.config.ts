import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        labSky: "#C3EBFA",
        labSkyLight: "#EDF9FD",
        labPurple: "#CFCEFF",
        labPurpleLight: "#F1F0FF",
        labYellow: "#FAE27C",
        labYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
