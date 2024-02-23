import { Link, Stack, Typography } from '@mui/material';
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
        <Link href='https://x.com/enodd_dev'>
            <Typography color='primary'>
                Created by me.
            </Typography>
        </Link>
    </Stack>;
};
