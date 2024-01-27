import React, { useState } from 'react';
import { Drawer, Grid, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { CloseRounded } from '@mui/icons-material';
import { HeaderAnchor } from '@components/HeaderAnchor';

const HeaderMenu: React.FC<{isModalVisible: boolean, onClose: () => void}> = ({isModalVisible, onClose}) => {
    const { t } = useTranslation();

    return <Drawer open={isModalVisible} anchor='top' onClose={onClose}>
        <Grid container padding={4} alignItems={'center'}>
            <Grid item xs={11} paddingLeft={9} textAlign={'center'}>
                <HeaderAnchor content={t('menu.portfolio')} target='#portfolio' />
            </Grid>
            <Grid item xs={1} textAlign={'center'}>
                <IconButton color='primary' onClick={onClose}>
                    <CloseRounded color='inherit' fontSize='large'/>
                </IconButton>
            </Grid>
            <Grid item xs={12} textAlign={'center'}>
                <HeaderAnchor content={t('menu.about')} target='#about' />
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
