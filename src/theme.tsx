import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';
// noinspection ES6UnusedImports
import type {} from '@mui/lab/themeAugmentation';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#668473',
        },
        secondary: {
            main: '#33353E',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: 'PT Serif',
    },
});

export default theme;