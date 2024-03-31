import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/screens/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Cera Pro"]
    },
    extend: {
      colors: {
        gunmetal: "#1B2430",
        red: "#B31901",
        blue: "#246EB9",
        green: "#4CB944",
        vanilla: "#F5EE9E",
        dark: "#020617",
        gray: "#757575",
        whitesmoke: "#F5F5F5"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cera: ["Cera Pro"],
        lora: ['Lora', 'serif']
      },
      screens: {
        xs: "420px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
      boxShadow: {
        shadow1: "0 1px 2px rgba(55,73,87,.1), 0 2px 5px rgba(55,73,87,.15)",
        shadow2: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        shadow3: "0 20px 40px 0 rgba(0,0,0,.1);",
        default: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        shadow4: "rgba(0, 0, 0, 0.25) 0px 25px 20px -20px",
        normal: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
});

