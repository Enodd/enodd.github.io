import React from 'react';
import { motion } from 'framer-motion';
import { Button, Stack, Typography } from '@mui/material';

interface PopupProps {
    message: string;
    actions?: {
        primaryMessage: string;
        secondaryMessage: string;
        onPrimary: () => void;
        onSecondary: () => void;
    };
}

const MotionStack = motion(Stack);
export const Popup: React.FC<PopupProps> = ({ message, actions }) => {
    return <MotionStack
        alignItems={'center'}
        padding={5}
        gap={3}
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        sx={theme => ({ 
            backgroundColor: theme.palette.background.paper,
            borderRadius: '30px 30px 0px 0px',
            position: 'fixed',
            bottom: 0,
            left: '50%',
            zIndex: 150,
            width: '100%',
            maxWidth: '800px',

        })}>
        <Typography variant='body1'>
            {message}
        </Typography>
        {actions
            ? <Stack direction='row-reverse' gap={4}>
                <Button color='primary' variant='contained' onClick={actions.onPrimary}>
                    {actions.primaryMessage}
                </Button>
                <Button color='secondary' variant='contained' onClick={actions.onSecondary}>
                    {actions.secondaryMessage}
                </Button>
            </Stack>
            : <></>}
    </MotionStack>;
};