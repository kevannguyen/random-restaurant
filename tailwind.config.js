module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
            width: {
                160: '40rem',
                172: '43rem',
                180: '45rem',
                200: '50rem',
            },
            maxWidth: {
                160: '40rem',
                172: '43rem',
                180: '45rem',
                200: '50rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
