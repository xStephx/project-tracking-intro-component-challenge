tailwind.config = {
    theme: {
        extend: {
            colors: {
                Red: 'hsl(0, 100%, 68%)', 
                VeryDarkBlue: 'hsl(230, 29%, 20%)', 
                DarkGrayishBlue: 'hsl(230, 11%, 40%)',
                GrayishBlue: 'hsl(231, 7%, 65%)',
                LightGrayishBlue: 'hsl(207, 33%, 95%)',
            },
        },
        fontFamily: {
            BarlowCondensed: ['Barlow Condensed', 'sans-serif'], // Headings, Call-to-actions, Navigation, 400, 700 weights
            Barlow: ['Barlow', 'sans-serif'], // Body, 400 weight
        },
    },
    plugins: [],
}