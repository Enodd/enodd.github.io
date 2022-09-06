import { breakpoints } from './breakpoints';
import { EnoddTheme } from './enoddTheme';
import { palette } from './palette';
import { fontSizes } from './fontSizes';

export const theme: EnoddTheme = {
    palette,
    font: 'Roboto Slab',
    breakpoints,
    fontSizes,
    constants: {
        maxWidthRatio: window.innerHeight * (16/9),
    },
    spacing: (val: number) => `${val * 6}px`
};