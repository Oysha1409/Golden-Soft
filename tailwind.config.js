const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {

    colors: {
      "primary": "#4295E4",
      "light-gray": "#F2F8FF",
      "dark": "#0D2436",
      "title-color": "#161C24",
      "text-color": "#454F5B"
    },
    extend: {
      
    },
  },
  plugins: [],
});