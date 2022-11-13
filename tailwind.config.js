const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./**/*.html"],
    theme: {
        screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1170px"
		},
        container:{
            center: true,
            padding: '15px'
        },
        extend: {
            colors:{
                'primary': "#0ABF53",
                'secondary': "#51596C",
                'heading': "#2D374B",
                'text': "#404E63",
                'gray':{
                    10:"#09a247",
                    20:"#e6f9ed",
                    30:"#eaecef",
                    50:"#eaebed",
                    100:"#8997A4",
                    150:"#d2d5d8",
                    200:"#f2f3f4",
                    300:"#677788",
                    400:"#f49e76",
                    500:"#fef4f0",
                    600:"#f3f4f6",
                    700:"#9ea9b4",
                    800:"#2d374b",
                    900:"#29454b",
                    1000:"#c0c3c9",
                }
            }
        },
        fontFamily:{
            primary: ['Inter', 'sans-serif'],
        },
    },
    plugins: [
        
    ],
}
