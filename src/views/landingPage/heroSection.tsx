import { Grid, Stack, Typography, alpha, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Triangles from '@assets/Triangles.svg';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    return <Stack
        paddingX={4}
        marginBottom={20}
        height='100%'
        width='100%'
        maxHeight={theme => theme.breakpoints.values.md}
        justifyContent={'center'}
        alignItems='center'
        sx={{ maxWidth: '1200px' }}
    >
        <Grid container sx={theme => ({
            marginTop: 10,
            padding: 3,
            borderRadius: isMdDown ? 5 : 8,
            maxWidth: theme.breakpoints.values.md,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backdropFilter: 'blur(4px)',
                backgroundColor: alpha(theme.palette.background.default, 0.4),
                zIndex: -1
            },
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
                    {t('heroSection.quote')}
                </Typography>
            </Grid>
        </Grid>
    </Stack>;
};