import React, { useState } from 'react';
import { Button, Drawer, Grid, IconButton, Link, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { CloseRounded, GitHub, X } from '@mui/icons-material';
import { HeaderAnchor } from '@components/HeaderAnchor';

const HeaderMenu: React.FC<{isModalVisible: boolean, onClose: () => void}> = ({ isModalVisible, onClose }) => {
    const { t } = useTranslation();

    return <Drawer open={isModalVisible} anchor='top' sx={{ position: 'relative' }} onClose={onClose}>
        <IconButton color='primary' sx={{ position: 'absolute', right: 40, top: 15 }} onClick={onClose}>
            <CloseRounded color='inherit' fontSize='large'/>
        </IconButton>
        <Grid container padding={4} gap={2} alignItems={'center'}>
            <Grid item xs={12} textAlign={'center'}>
                <HeaderAnchor content={t('menu.portfolio')} target='#portfolio' />
            </Grid>
            <Grid item xs={12} textAlign={'center'}>
                <HeaderAnchor content={t('menu.about')} target='#about' />
            </Grid>
            <Grid item xs={12} textAlign={'center'}>
                <Link href='https://enodd.github.io/blog'>
                    <Button variant='text' color='primary'>
                        {t('menu.myBlog')}
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Stack direction='row' justifyContent={'center'} gap={3}>
                    <Link href='https://github.com/enodd'>
                        <GitHub fontSize='large' />
                    </Link>
                    <Link href='https://x.com/enodd_dev'>
                        <X fontSize='large' />
                    </Link>
                </Stack>
            </Grid>
        </Grid>
    </Drawer>
}


export const MobileHeader: React.FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

    return <>
        <Grid item xs={6} textAlign='right'>
            <IconButton color='primary' onClick={() => setIsMenuVisible(true)}>
                <MenuIcon color='inherit' fontSize='large' />
            </IconButton>
        </Grid>
        <HeaderMenu isModalVisible={isMenuVisible} onClose={() => setIsMenuVisible(false)}/>
    </>
}
