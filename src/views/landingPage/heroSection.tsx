import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';

export const HeroSection: React.FC = () => {
    return <Stack
        height='100%'
        width='100%'
        maxHeight={theme => theme.breakpoints.values.md}
        justifyContent={'center'}
        alignItems='center'
        >
        <Grid container sx={theme => ({
            padding: 3,
            borderRadius: 20,
            backgroundColor: theme.palette.background.default,
            maxWidth: theme.breakpoints.values.md,
            textAlign: 'center',
        })}>
            <Grid item xs={12}>
                <Typography variant='h1' color='primary'>
                    Damian Nowak
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='headerSubtitle'>
                    Front-end Developer
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body1' color='primary' fontWeight={'200'} fontSize='1.5rem'>
                    "Where idea meet's creation"
                </Typography>
            </Grid>
        </Grid>
    </Stack>;
}