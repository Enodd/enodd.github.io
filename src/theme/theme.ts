import { createTheme } from '@mui/material';
import { palette } from './palette';
import BackgroundImage from '@assets/BackgroundImage.svg';
import { typography } from '@theme/typography';

const theme = createTheme({
    palette: palette,
    typography,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    minHeight: 0,
                    minWidth: 0,
                },
                body: {
                    backgroundImage: `url(${BackgroundImage})`,
                    overflowX: 'hidden'
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                text: { fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)' },
                contained: { fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)' },
            },
        },
    },
});

export default theme;
