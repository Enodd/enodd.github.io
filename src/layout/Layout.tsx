import React, { PropsWithChildren, useState } from 'react';
import { Header } from '@layout/Header';
import { Footer } from '@layout/Footer';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Popup } from '@components/Popup';
import { useConfigurationProvider } from '@hooks/useConfigurationProvider';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    const { t } = useTranslation();
    const { setDefaultValues, acceptCookies, isCookieAllowed } = useConfigurationProvider();
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(isCookieAllowed);

    const handlePopupAccept = () => {
        acceptCookies();
        setIsPopupVisible(false);
    };
    const handlePopupClose = () => {
        setDefaultValues();
        setIsPopupVisible(false);
    };

    return <Box paddingX={isMdUp ? 3 : 0}>
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
            <Popup message={t('info.cookies')} actions={{
                primaryMessage: t('info.accept'),
                secondaryMessage: t('info.decline'),
                onPrimary: handlePopupAccept,
                onSecondary: handlePopupClose
            }} open={isPopupVisible} />
            <Footer />
        </Stack>
    </Box>;
};