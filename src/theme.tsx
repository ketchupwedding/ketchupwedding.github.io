import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';
// noinspection ES6UnusedImports
import type {} from '@mui/lab/themeAugmentation';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontSize: 18,
    },
});

export default theme;