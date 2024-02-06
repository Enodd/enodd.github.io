import React, { PropsWithChildren } from 'react';
import { Header } from '@layout/Header';
import { Footer } from '@layout/Footer';
import { Stack, useMediaQuery, useTheme } from '@mui/material';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    return <Stack alignItems={'center'} width='100%'>
        <Stack
            gap={3}
            sx={theme => ({
                ...(isMdUp ? {
                    borderRight: `4px solid ${theme.palette.primary.main}`,
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                } : {}),
                width: '100%',
                maxWidth: '1920px',
                minHeight: '100vh',
                paddingX: 1,
                alignItems: 'center'
            })}>
            <Header />
            {children}
            <Footer />
        </Stack>
    </Stack>;
};