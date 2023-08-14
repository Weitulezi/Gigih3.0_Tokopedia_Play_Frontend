/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "rgb(10, 10, 10)",
                "black-20": "rgb(20, 20, 20)",
                "black-30": "rgb(30, 30, 30)",
                "black-0.6": "rgb(18, 18, 18, 0.6)",
                "black-40": "rgb(40, 40, 40)",
                "black-80": "rgb(80, 80, 80)",
                "black-100": "rgb(100, 100, 100)",
                "black-110": "rgb(110, 110, 110)",
                "black-140": "rgb(140, 140, 140)",
                "black-180": "rgb(180, 180, 180)",
                "black-200": "rgb(200, 200, 200)",
                mainGreen: "#00CC33",
            },
            fontFamily: {
                "space-grotesk": "Space Grotesk, sans-serif;",
            },
        },
    },
    plugins: [
        // require("flowbite/plugin")
    ],
}
