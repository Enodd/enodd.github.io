const breakpointValues = {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
    fhd: '1920px',
}

export type Breakpoints = keyof typeof breakpointValues

export const breakpoints = {
    ...breakpointValues,
    up: (media: Breakpoints) => `(min-width:${breakpointValues[media]})`,
    down: (media: Exclude<Breakpoints, 'xs'>) => `(max-width: ${breakpointValues[media]})`
};