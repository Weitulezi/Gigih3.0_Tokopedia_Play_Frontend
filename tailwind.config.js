/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "rgb(18, 18, 18)",
                "black-140": "rgb(140, 140, 140)",
            },
        },
    },
    plugins: [],
}
