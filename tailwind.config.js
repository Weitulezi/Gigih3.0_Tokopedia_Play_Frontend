/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "rgb(18, 18, 18)",
                "black-0.6": "rgb(18, 18, 18, 0.6)",
                "black-40": "rgb(40, 40, 40)",
                "black-140": "rgb(140, 140, 140)",
            },
            fontFamily: {
                "space-grotesk": "Space Grotesk, sans-serif;",
            },
        },
    },
    plugins: [],
}
