import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, purple, red } from '@mui/material/colors';

const base = createTheme({
    palette: {
        primary: {
            main: '#2F80ED',
            main2: '#4F4F4F',
            main3: '#828282',
            main4: '#E0E0E0'
        },
        text: {
            primary: '#000',
            secondary: 'gray',
            tertiary: '#fff'
        },
        secondary: {
            main: purple[500],
        },
        error: {
            main: red[400]
        },
        success: {
            main: green[500]
        },
        indicator: {
            main: '#F8B76B',
            main2: '#8785FF',
            main3: '#EB5757',
            main4: '#F2C94C'
        },
        background: {
            main: '#333333'
        }
    },
});

const theme = responsiveFontSizes(base)

export default theme