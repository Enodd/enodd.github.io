import { darken, lighten } from "@mui/material";

export const palette = {
    primary: {
        light: lighten('#FFBA00', 0.4),
        main: '#FFBA00',
        dark: darken('#FFBA00', 0.4)
    },
    secondary: {
        light: '#00FFFF',
        main: darken('#00FFFF', 0.2),
        dark: darken('#00FFFF', 0.6)
    },
    trietary: {
        light: lighten('#FF0080', 0.4),
        main: '#FF0080',
        dark: darken('#FF0080', 0.4)
    }
}