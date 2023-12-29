import type { ConfigTheme } from '@nextui-org/react';

const lightText = '#ffecd1';

export const darkTheme: ConfigTheme = {
    colors: {
        primary: {
            '50': '#ecfffe',
            '100': '#d0fdfc',
            '200': '#a6fbfb',
            '300': '#69f5f7',
            '400': '#25e5eb',
            '500': '#09c9d1',
            '600': '#0aa1b0',
            '700': '#10808e',
            '800': '#15616d',
            '900': '#175662',
            foreground: lightText
        },
        secondary: {
            '50': '#fffaec',
            '100': '#fff4d3',
            '200': '#ffe4a5',
            '300': '#ffd06d',
            '400': '#ffaf32',
            '500': '#ff950a',
            '600': '#ff7d00',
            '700': '#cc5b02',
            '800': '#9d320f',
            '900': '#78290f',
            foreground: lightText
        },
        background: {
            '50': '#eef9ff',
            '100': '#dcf2ff',
            '200': '#b2e8ff',
            '300': '#6dd7ff',
            '400': '#20c2ff',
            '500': '#00abff',
            '600': '#0088df',
            '700': '#006cb4',
            '800': '#005c95',
            '900': '#004b7a',
            foreground: lightText
        },
    }
}