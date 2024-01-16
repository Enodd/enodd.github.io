import React from 'react';
import { Grid, Box } from '@mui/material';

export const Header: React.FC = () => {
    return <Grid container spacing={4} justifyContent={'space-between'} width='100%'>
        <Grid item xs={6}>
            <Box component={'img'} src={''} alt='pageLogo' />
        </Grid>
        <Grid item container xs={6} justifyContent={'flex-end'}>
            <Grid item xs={12} md={2} textAlign={'right'}>
                Item
            </Grid>
            <Grid item xs={12} md={2} textAlign={'right'}>
                Item
            </Grid>
            <Grid item xs={12} md={2} textAlign={'right'}>
                Item
            </Grid>
        </Grid>
    </Grid>
}