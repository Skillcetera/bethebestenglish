const theme = require("tailwindcss/defaultTheme");
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
        extend: {},
        colors: {
            ...theme.colors,
            courseColor: "#E16E79",
            homeColor: "#317973",
            loginColor: "#46AFD0",
            communityColor: "#D4A555",
        },
        spacing: {
            ...theme.spacing,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    important: true,
};
