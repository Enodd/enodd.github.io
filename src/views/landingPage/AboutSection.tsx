import { SectionTitle } from '@components/SectionTitle';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { useAnimations } from '@hooks/useAnimations';

const MotionGrid = motion(Grid);

export const AboutSection: React.FC = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const { getTransitionProps } = useAnimations();

    return <MotionGrid
        container
        initial={{
            opacity: 0,
            y: -100
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        transition={getTransitionProps(0.3, 0.2)}
        viewport={{ once: true }}
        height={'100%'}
        spacing={4}
        sx={{
            maxWidth: '1200px', borderRadius: 20, willChange: 'transform opacity', position: 'relative'
        }}
    >
        <Grid item xs={12}>
            <SectionTitle title={t('about.title')} />
        </Grid>
        <MotionGrid
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={getTransitionProps(0.3, 0.4)}
            item xs={12} md={6} order={isMdDown ? 2 : 1}>
            {/* Here's description of me */}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, eos est vel dolore quibusdam veritatis libero tempora delectus ipsa cum tenetur at deserunt sequi minus, quas commodi rerum soluta doloremque architecto. Minima temporibus, perspiciatis quo, aperiam veritatis ullam maiores nam quis neque nostrum ipsam laborum cupiditate, dicta porro non corporis! Maxime exercitationem tempore in libero illum facilis et fugiat autem aliquam totam, hic ad esse asperiores ullam veniam quasi. Non, dolorem? Dicta officia praesentium, temporibus libero, ipsam velit ut quidem, vel aliquam aliquid odit repellendus maiores similique fugiat iste et! Aperiam hic quaerat, nulla voluptatem veniam facilis at dolore ab.
        </MotionGrid>
        <Grid item xs={12} md={6} order={isMdDown ? 1 : 2}>
            <Box component={'img'} src={''} alt={'authors image'} />
        </Grid>
    </MotionGrid>;
};