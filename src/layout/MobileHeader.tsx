import React, { useState } from 'react';
import { Button, Drawer, Grid, IconButton, Link, Stack, alpha, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { CloseRounded, GitHub, X } from '@mui/icons-material';
import { HeaderAnchor } from '@components/HeaderAnchor';

const HeaderMenu: React.FC<{
    isModalVisible: boolean;
    onClose: () => void;
}> = ({ isModalVisible, onClose }) => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Drawer
            open={isModalVisible}
            anchor="top"
            sx={{ position: 'relative' }}
            PaperProps={{
                sx: { 
                    height: '100%', 
                    backgroundColor: '#00000000',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundColor: alpha(theme.palette.background.paper, 0.75),
                        width: '100%',
                        height: '100%',
                        backdropFilter: 'blur(4px)',
                        zIndex: -1
                    }
                }
            }}
            onClose={onClose}
        >
            <IconButton
                color="primary"
                sx={{
                    position: 'absolute', right: 40, top: 15 
                }}
                onClick={onClose}
            >
                <CloseRounded color="inherit" fontSize="large" />
            </IconButton>
            <Stack
                padding={4}
                paddingTop={20}
                alignItems={'center'}
                justifyContent={'space-between'}
                height={'100%'}
            >
                <Stack gap={4}>
                    <HeaderAnchor content={t('menu.portfolio')} target="#portfolio" />
                    <HeaderAnchor content={t('menu.about')} target="#about" />
                    <Link href="https://enodd.github.io/blog">
                        <Button variant="text" color="primary">
                            {t('menu.myBlog')}
                        </Button>
                    </Link>
                </Stack>
                <Stack direction="row" justifyContent={'center'} gap={3}>
                    <Link href="https://github.com/enodd">
                        <GitHub fontSize="large" />
                    </Link>
                    <Link href="https://x.com/enodd_dev">
                        <X fontSize="large" />
                    </Link>
                </Stack>
            </Stack>
        </Drawer>
    );
};

export const MobileHeader: React.FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

    return (
        <>
            <Grid item xs={6} textAlign="right">
                <IconButton color="primary" onClick={() => setIsMenuVisible(true)}>
                    <MenuIcon color="inherit" fontSize="large" />
                </IconButton>
            </Grid>
            <HeaderMenu
                isModalVisible={isMenuVisible}
                onClose={() => setIsMenuVisible(false)}
            />
        </>
    );
};
