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
                '*::-webkit-scrollbar': { width: '12px' },
                '*::-webkit-scrollbar-track': { background: palette.background?.default },
                '*::-webkit-scrollbar-thumb': { background: palette.secondary?.main, borderRadius: 5 },
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
                root: { borderRadius: 15 }
            },
        },
    },
});

export default theme;
