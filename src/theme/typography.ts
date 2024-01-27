declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        headerSubtitle: true;
    }
  }
export const typography = () => ({
    allVariants: {
        color: '#fff',
        fontFamily: 'Outfit'
    },
    h1: {
        fontFamily: 'Roboto Slab, sans-serif',
        fontWeight: '700'
    },
    h2: {
        fontFamily: 'Roboto Slab, sans-serif',
        fontWeight: '700'
    },
    h3: {
        fontFamily: 'Roboto Slab, sans-serif',
        fontWeight: '700'
    },
    h4: {
        fontFamily: 'Roboto Slab, sans-serif',
        fontWeight: '700'
    },
    h5: {
        fontFamily: 'Roboto Slab, sans-serif',
        fontWeight: '700'
    },
    h6: {
        fontFamily: 'Roboto Slab, sans-serif',
        fontWeight: '700'
    },
    headerSubtitle: {
        fontFamily: 'Outfit',
        fontSize: '3rem',
    }
})