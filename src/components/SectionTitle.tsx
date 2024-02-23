import React from 'react';
import { Typography } from '@mui/material';

export const SectionTitle: React.FC<{title: string}> = ({ title }) => {
    return <Typography variant='h3' sx={theme => ({
        position: 'relative',
        paddingLeft: '1.25ch',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '.75ch',
            width: '.25ch',
            height: '100%',
            backgroundColor: theme.palette.secondary.main
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '0ch',
            width: '.5ch',
            height: '100%',
            backgroundColor: theme.palette.primary.main
        }
    })}>
        {title}
    </Typography>;
};