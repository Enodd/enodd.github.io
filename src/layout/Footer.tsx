import { Stack, Typography } from '@mui/material';
import React from 'react';

export const Footer: React.FC = () => {
    return <Stack
        paddingY={4}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100vw'}
        sx={theme => ({ 
            backgroundColor: theme.palette.background.default,
            position: 'sticky',
            top: '100%'
        })}>
        <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, consectetur voluptate? Non unde, voluptates ducimus officiis perspiciatis molestiae id quam?
        </Typography>
    </Stack>;
};
