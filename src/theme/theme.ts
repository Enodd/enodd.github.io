import { createTheme } from "@mui/material";
import { palette } from "./palette";
import BackgroundImage from '@assets/BackgroundImage.svg';
import { typography } from "@theme/typography";

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
                'body': {
                    backgroundImage: `url(${BackgroundImage})`
                }
            }
        },
    }
});

export default theme;