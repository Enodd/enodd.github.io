
export interface EnoddTheme {
    palette: {
        primary: {
            main: string,
            text: string
        }
        secondary: {
            main: string,
            dark: string,
        },
        error: string,
        approve: string,
        disabled: string
    }
    font: string,
    breakpoints: {
        up: (size: string) => string,
        down: (size: string) => string,
    }
}