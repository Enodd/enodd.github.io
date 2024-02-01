/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@mui/material/styles/createTypography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    headerSubtitle: true;
  }
}

export const headers: any = {
    h1: {size: 'clamp(3.34rem, 2.45rem + 4.43vw, 5.61rem)'},
    h2: {size: 'clamp(2.67rem, 2.07rem + 3vw, 4.21rem)'},
    h3: {size: 'clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem)'},
    h4: {size: 'clamp(1.71rem, 1.45rem + 1.29vw, 2.37rem)'},
    h5: {size: 'clamp(1.37rem, 1.21rem + 0.8vw, 1.78rem)'},
    h6: {size: 'clamp(1.09rem, 1rem + 0.47vw, 1.33rem)'},
    body1: {size: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)'},
};

const generateHeaders = () => {
    const styles: any = {};
    Object.keys(headers).forEach((key) => {
        styles[key] = {
            fontFamily: 'Roboto slab',
            fontWeight: 'bold',
            fontSize: headers[key].size,
        };
    });
    return styles;
};

export const typography: () => Typography = () => ({
    allVariants: {
        color: '#fff',
        fontFamily: 'Outfit',
        fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
    },
    ...generateHeaders(),
    headerSubtitle: {
        fontFamily: 'Outfit',
        fontSize: 'clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem)',
        fontWeight: '500',
    },
    fontWeightBold: 'bolder',
    fontWeightRegular: 'normal',
    fontWeightLight: '100',
    fontWeightMedium: 'bold',
});
