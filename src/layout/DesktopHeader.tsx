import React from 'react';
import { HeaderAnchor } from '@components/HeaderAnchor';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const DesktopHeader: React.FC = () => {
    const { t } = useTranslation();
    return <Grid item container md={6} justifyContent={'flex-end'}>
        <Grid item xs={12} md={2} textAlign={'center'}>
            <HeaderAnchor content={t('menu.portfolio')} target='#portfolio' />
        </Grid>
        <Grid item xs={12} md={3} textAlign={'center'}>
            <HeaderAnchor content={t('menu.socials')} target='#socials' />
        </Grid>
        <Grid item xs={12} md={2} textAlign={'center'}>
            <HeaderAnchor content={t('menu.about')} target='#about' />
        </Grid>
    </Grid>;
};