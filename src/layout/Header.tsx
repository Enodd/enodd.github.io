import React from 'react';
import { Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import { DesktopHeader } from '@layout/DesktopHeader';
import { MobileHeader } from '@layout/MobileHeader';
import PageLogo from '@assets/EnoddLogo.svg';

export const Header: React.FC = () => {
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    return <Grid
        container
        padding={2}
        spacing={4}
        width='100%'
        justifyContent={'space-between'}
        alignItems='center'>
        <Grid item xs={6}>
            <Box component={'img'} src={PageLogo} alt='pageLogo' maxWidth={'72px'} />
        </Grid>
        {
            isMdDown
            ? <MobileHeader />
            : <DesktopHeader />
        }    
    </Grid>
}