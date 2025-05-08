import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  theme: {},
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
  ],
};

export default config;
