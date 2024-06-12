import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "rgba(--var(--background))",
        nt: "rgba(var(--nt))",
        inv: "rgba(var(--inv))",
        ninv: "rgba(var(--ninv))",
        tog: "rgba(var(--tog))",
        togb: "rgba(var(--togb))",
        notf: "rgba(var(--notf))"
      },
      screens: {
        'xxl': '1200px'
      }
    },
  },
  plugins: [],
};
export default config;
