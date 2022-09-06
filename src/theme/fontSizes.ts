import { EnoddTheme } from './enoddTheme';

export const fontSizes: EnoddTheme['fontSizes'] = {
    headingSize: 'clamp(3rem, 2.636rem + 1.82vw, 4rem)',
    coreSizes: {
        h1: 'clamp(2.5rem, 2.449rem + 0.26vw, 3rem)',
        h2: 'clamp(2rem, 1.949rem + 0.26vw, 2.5rem)',
        h3: 'clamp(1.5rem, 1.449rem + 0.26vw, 2rem)',
        h4: 'clamp(1.25rem, 1.199rem + 0.26vw, 1.75rem)',
        h5: 'clamp(1rem, 0.949rem + 0.26vw, 1.5rem)',
        p: 'clamp(1rem, 0.949rem + 0.26vw, 1.5rem)'
    },
    regularSizes: {
        small: 'clamp(0.75rem, 0.699rem + 0.26vw, 1.25rem)',
        regular: 'clamp(1rem, 0.949rem + 0.26vw, 1.5rem)',
        large: 'clamp(1.5rem, 1.449rem + 0.26vw, 2rem)',
        xl: 'clamp(2.5rem, 2.449rem + 0.26vw, 3rem)'
    }
};