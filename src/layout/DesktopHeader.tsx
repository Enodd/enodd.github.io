import React from 'react';
import { HeaderAnchor } from '@components/HeaderAnchor';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const DesktopHeader: React.FC = () => {
    const { t } = useTranslation();
    return <Grid item md={6} sx={{
        display: 'flex', justifyContent: 'right', gap: 2 
    }}>
        <HeaderAnchor content={t('menu.portfolio')} target='#portfolio' />
        <HeaderAnchor content={t('menu.socials')} target='#socials' />
        <HeaderAnchor content={t('menu.about')} target='#about' />
    </Grid>;
};