import { MotionStack } from '@components/MotionComponents';
import { useConfigurationProvider } from '@hooks/useConfigurationProvider';
import { CloseRounded } from '@mui/icons-material';
import { Box, Button, Checkbox, IconButton, List, ListItem, MenuItem, Modal, Select, Stack, Typography, alpha } from '@mui/material';
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
    const {
        isAnimationDisabled, isCookieAllowed, handleSettingsChange, refreshValues, userSetLanguage 
    } = useConfigurationProvider();
    const [variant, setVariant] = useState<boolean>(false);
    const [currentSettings, setCurrentSettings] = useState<{cookies: boolean, animations: boolean, language: string}>({
        cookies: isCookieAllowed,
        animations: !isAnimationDisabled,
        language: userSetLanguage
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
            animations: !isAnimationDisabled,
            language: userSetLanguage
        });
    }, [isCookieAllowed, isAnimationDisabled, userSetLanguage]);

    return <Modal
        open={open}
        onClose={onVisibilityToggle}
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
            width="100%"
            minWidth={'200px'}
            maxWidth={'700px'}
            sx={theme => ({
                height: 'fit-content',
                position: 'relative',
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: alpha(theme.palette.background.paper, 0.75),
                    borderRadius: 10,
                    width: '100%',
                    height: '100%',
                    backdropFilter: 'blur(4px)',
                    zIndex: -1
                }
            })}
        >
            <Box textAlign={'right'} width='100%'>
                <IconButton color="primary" onClick={onVisibilityToggle}>
                    <CloseRounded color="inherit" fontSize="large" />
                </IconButton>
            </Box>
            <Typography variant='h5'>
                {t('settings.title')}
            </Typography>
            <List sx={{ width: '100%', maxWidth: '400px' }}>
                <ListItem>
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
                <ListItem>
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
                <ListItem>
                    <Stack width='100%' gap={1}>
                        <Typography>
                            {t('settings.language')}
                        </Typography>
                        <Select
                            fullWidth
                            color='primary'
                            value={currentSettings.language}
                            sx={theme => ({ 
                                '& .MuiInputBase-input': { 
                                    color: theme.palette.primary.main,
                                    border: `2px solid ${theme.palette.primary.main}`
                                }, 
                                '& .MuiSelect-icon': { fill: theme.palette.primary.main },
                                '& .MuiList-root': {
                                    color: theme.palette.primary.main,
                                    border: `1px solid ${theme.palette.primary.main}`
                                }
                            })}
                            onChange={(e) => setCurrentSettings(prev => ({
                                ...prev,
                                language: (e.target.value as string)
                            }))}>
                            <MenuItem value={'en'}>{t('languages.en')}</MenuItem>
                            <MenuItem value={'pl'}>{t('languages.pl')}</MenuItem>
                        </Select>
                    </Stack>
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