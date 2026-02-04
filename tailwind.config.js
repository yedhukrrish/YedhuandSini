/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Wednesday Addams aesthetic - Black & Purple only
                'wednesday-black': '#0A0A0F',
                'wednesday-purple': {
                    900: '#1A0B2E',
                    800: '#2D1B4E',
                    700: '#3E2A5E',
                    600: '#5A3D7A',
                    500: '#7B4FA0',
                    400: '#9D6BC4',
                },
            },
            fontFamily: {
                cursive: ['Dancing Script', 'cursive'],
            },
        },
    },
    plugins: [],
}