/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#1f2937",
      },
      fontFamily: {
        openSans: ["Open Sans Variable", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('/src/assets/bg-pattern.svg')",
      },
    },
  },
  plugins: [],
};
