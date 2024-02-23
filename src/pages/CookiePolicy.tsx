import { Layout } from '@layout/Layout';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const CookiePolicy: React.FC = () => {
    const { t } = useTranslation();
    return <Layout>
        <Box component={'img'} src={''} alt={'hero image'} />
        <Typography variant='h1'>
            {t('cookiePage.title')}
        </Typography>
        <Typography variant='body1'>
            {t('')}
        </Typography>
    </Layout>;
};