import { Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Triangles from '@assets/Triangles.svg';

export const HeroSection: React.FC = () => {
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    return <Stack
        paddingX={4}
        height='100%'
        width='100%'
        maxHeight={theme => theme.breakpoints.values.md}
        justifyContent={'center'}
        alignItems='center'
        >
        <Grid container sx={theme => ({
            marginTop: 10,
            padding: 3,
            borderRadius: isMdDown ? 5 : 8,
            backgroundColor: theme.palette.background.default,
            maxWidth: theme.breakpoints.values.md,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&:after': {
                content: '""',
                position: 'absolute',
                maxWidth: '106px',
                maxHeight: '106px',
                minHeight: '64px',
                minWidth: '64px',
                width: '10vw',
                height: '10vw',
                backgroundImage: `url(${Triangles})`,
                backgroundSize: 'cover',
                bottom: 0,
                right:0,
            }
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