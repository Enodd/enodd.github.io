
export interface EnoddTheme {
    palette: {
        primary: {
            main: string,
            text: string
        }
        secondary: {
            main: string,
            dark: string,
            darkest: string,
        },
        error: string,
        approve: string,
        disabled: string
    }
    font: string,
    breakpoints: {
        up: (size: string) => string,
        down: (size: string) => string,
    },
    fontSizes: {
        headingSize: string,
        coreSizes: {
            h1: string,
            h2: string,
            h3: string,
            h4: string,
            h5: string,
            p: string
        },
        regularSizes: {
            small: string,
            regular: string,
            large: string,
            xl: string
        }
    },
    constants: {
        maxWidthRatio: number
    },
    spacing: (val: number) => string
}