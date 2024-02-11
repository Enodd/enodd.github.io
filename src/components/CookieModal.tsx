import { MotionStack } from '@components/MotionComponents';
import { useConfigurationProvider } from '@hooks/useConfigurationProvider';
import { Button, Checkbox, List, ListItem, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ModalProps {
    open: boolean;
    onVisibilityToggle: () => void;
}

const variants = {
    open: { opacity:1 },
    close: { opacity: 0 }
};

export const CookieModal: React.FC<ModalProps> = ({ open, onVisibilityToggle }) => {
    const { t } = useTranslation();
    const { isAnimationDisabled, isCookieAllowed, handleSettingsChange, refreshValues } = useConfigurationProvider();
    const [variant, setVariant] = useState<boolean>(false);
    const [currentSettings, setCurrentSettings] = useState<{cookies: boolean, animations: boolean}>({
        cookies: isCookieAllowed,
        animations: !isAnimationDisabled
    });

    const handleVisibilityToggle = () => {
        setVariant(true);
        refreshValues();
        setTimeout(onVisibilityToggle, 100);
    };

    useEffect(() => {
        setVariant(false);
        refreshValues();
    }, [open]);

    useEffect(() => {
        setCurrentSettings({
            cookies: isCookieAllowed,
            animations: !isAnimationDisabled
        });
    }, [isCookieAllowed, isAnimationDisabled]);

    return <Modal
        open={open}
        onClose={handleVisibilityToggle}
        sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
        <MotionStack
            variants={variants}
            initial={{ opacity: 0 }}
            animate={variant ? 'close' : 'open'}
            transition={{ duration: variant ? 0.1 : 0.3 }}
            padding={4}
            justifyContent={'center'}
            alignItems={'center'}
            sx={theme => ({ backgroundColor: theme.palette.background.paper, borderRadius: 10 })}
        >
            <Typography variant='h5'>
                {t('settings.title')}
            </Typography>
            <List>
                <ListItem dir='row'>
                    <Checkbox checked={currentSettings.animations} sx={theme => ({
                        color: theme.palette.primary.main,
                        '&.Mui-checked': { color: theme.palette.primary.main }, 
                    })}
                    onClick={() => setCurrentSettings(prev => ({
                        ...prev,
                        animations: !prev.animations
                    }))}/>
                    <Typography>
                        {t('settings.animations')}
                    </Typography>
                </ListItem>
                <ListItem dir='row'>
                    <Checkbox checked={currentSettings.cookies} sx={theme => ({
                        color: theme.palette.primary.main,
                        '&.Mui-checked': { color: theme.palette.primary.main }, 
                    })}
                    onClick={() => setCurrentSettings(prev => ({
                        ...prev,
                        cookies: !prev.cookies
                    }))}/>
                    <Typography>
                        {t('settings.cookies')}
                    </Typography>
                </ListItem>
            </List>
            <Button color='primary' onClick={() => {
                handleSettingsChange(currentSettings);
                handleVisibilityToggle();
            }}>
                {t('settings.save')}
            </Button>
        </MotionStack>
    </Modal>;
};