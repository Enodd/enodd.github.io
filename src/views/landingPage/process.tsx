import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import IdeaImage from '@assets/BackgroundImage.svg';
import DesignImage from '@assets/BackgroundImage.svg';
import WireframeImage from '@assets/BackgroundImage.svg';
import CodeImage from '@assets/BackgroundImage.svg';
import FinalImage from '@assets/BackgroundImage.svg';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const height = 200;
const processList: Array<{backgroundImg: string, name: string, height: number, widthvalue: number, delay: number, direction: 'x' | 'y', position: string}> = [
    {
        backgroundImg: IdeaImage,
        name: 'process.idea',
        height: height,
        widthvalue: 2.5,
        delay: 0.3,
        direction: 'x',
        position: '-100%'
    },
    {
        backgroundImg: DesignImage,
        name: 'process.design',
        height: height,
        widthvalue: 4,
        delay: 0.6,
        direction: 'y',
        position: '-100%'
    },
    {
        backgroundImg: WireframeImage,
        name: 'process.wireframe',
        height: height,
        widthvalue: 3,
        delay: 0.9,
        direction: 'x',
        position: '100%'
    },
    {
        backgroundImg: CodeImage,
        name: 'process.code',
        height: height * 1.5,
        widthvalue: 5.5,
        delay: 0.6,
        direction: 'y',
        position: '50%'
    },
    {
        backgroundImg: FinalImage,
        name: 'process.finalProject',
        height: height * 1.5,
        widthvalue: 4.25,
        delay: 0.8,
        direction: 'x',
        position: '100%'
    }
];

const MotionBox = motion(Box);

export const Process: React.FC = () => {
    const { t } = useTranslation();

    return <Stack
        direction='row'
        width='100%'
        flexWrap='wrap'
        gap={3}
        justifyContent={'space-between'}
        sx={{ maxWidth: '1200px' }}>
        {
            processList.map(process => <MotionBox
                initial={{
                    opacity: 0, 
                    ...(process.direction === 'x'
                        ? { x: process.position }
                        : { y: process.position }
                    )
                }}
                whileInView={{
                    opacity: 1, 
                    ...(process.direction === 'x'
                        ? { x: 0 }
                        : { y: 0 }
                    ),
                }}
                transition={{
                    duration: 0.3,
                    delay: process.delay,
                }}
                key={process.name}
                height={process.height}
                width={`${process.widthvalue * 10}%`}
                sx={{
                    backgroundImage: `url(${process.backgroundImg})`,
                    backgroundSize:'cover',
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    willChange: 'transform opacity',
                }}
            >
                <Typography>
                    {t(process.name)}
                </Typography>
            </MotionBox>)
        }
    </Stack>;
};