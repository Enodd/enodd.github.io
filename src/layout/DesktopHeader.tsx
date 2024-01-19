import { Grid } from "@mui/material"

export const DesktopHeader: React.FC = () => {
    return <Grid item container md={6} justifyContent={'flex-end'}>
            <Grid item xs={12} md={2} textAlign={'right'}>
                Item
            </Grid>
            <Grid item xs={12} md={2} textAlign={'right'}>
                Item
            </Grid>
            <Grid item xs={12} md={2} textAlign={'right'}>
                Item
            </Grid>
        </Grid>
}