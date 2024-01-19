import React from 'react';
import { Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import { DesktopHeader } from '@layout/DesktopHeader';
import { MobileHeader } from '@layout/MobileHeader';

export const Header: React.FC = () => {
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    return <Grid container spacing={4} justifyContent={'space-between'} width='100%'>
        <Grid item xs={6}>
            <Box component={'img'} src={''} alt='pageLogo' />
        </Grid>
        {
            isMdDown
            ? <MobileHeader />
            : <DesktopHeader />
        }    
    </Grid>
}