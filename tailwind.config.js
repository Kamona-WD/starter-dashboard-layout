import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
import { addIconSelectors } from '@iconify/tailwind'

export default {
    darkMode: 'class',
    content: ['./src/**/*.{html,hbs,js}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
            },
            
            colors: {
                dark: {
                    0: '#151823',
                    1: '#222738',
                    2: '#2A2F42',
                    3: '#2C3142',
                },
            },
        },
    },
    plugins: [
        forms,
        addIconSelectors(['tabler']),
    ],
}
