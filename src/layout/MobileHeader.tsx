import React, { useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const MobileHeader: React.FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

    return <>
        <Grid item xs={6} textAlign='right'>
            <IconButton color='primary' onClick={() => setIsMenuVisible(true)}>
                <MenuIcon color='inherit' fontSize='large' />
            </IconButton>
        </Grid>
        {
            isMenuVisible
            ? <></>
            : <></>
        }
    </>
}
