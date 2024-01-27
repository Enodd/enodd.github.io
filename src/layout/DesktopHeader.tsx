import { Grid } from "@mui/material"
import { useTranslation } from "react-i18next"

export const DesktopHeader: React.FC = () => {
    const { t } = useTranslation();
    return <Grid item container md={6} justifyContent={'flex-end'}>
            <Grid item xs={12} md={2} textAlign={'right'}>
                {t('menu.portfolio')}
            </Grid>
            <Grid item xs={12} md={2} textAlign={'right'}>
                {t('menu.socials')}
            </Grid>
            <Grid item xs={12} md={2} textAlign={'right'}>
                {t('menu.about')}
            </Grid>
        </Grid>
}