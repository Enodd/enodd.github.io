import React, { useState } from 'react';
import { HeaderAnchor } from '@components/HeaderAnchor';
import { Grid, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Settings } from '@mui/icons-material';
import { CookieModal } from '@components/CookieModal';

export const DesktopHeader: React.FC = () => {
    const { t } = useTranslation();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    return <Grid item md={6} sx={{
        display: 'flex', justifyContent: 'right', gap: 2 
    }}>
        <HeaderAnchor content={t('menu.portfolio')} target='#portfolio' />
        <HeaderAnchor content={t('menu.socials')} target='#socials' />
        <HeaderAnchor content={t('menu.about')} target='#about' />
        <IconButton color='primary' onClick={() => setIsModalVisible(true)}>
            <Settings color='inherit' />
        </IconButton>
        <CookieModal open={isModalVisible} onVisibilityToggle={() => setIsModalVisible(false)} />
    </Grid>;
};