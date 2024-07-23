import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import flower from '../assets/1.png';

function WeddingHero() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const isMediumScreen = useMediaQuery("(max-width:1024px)");

    const getImageWidth = () => {
        if (isSmallScreen) {
            return '30%';
        } else if (isMediumScreen) {
            return '20%';
        } else {
            return '10%';
        }
    };

    return (
        <Box sx={{
            backgroundColor: '#668473',
            height: '90vh',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={2} />
                <Grid item xs={8} container justifyContent="center" alignItems="center">
                    <Box sx={{
                        textAlign: 'center',
                    }}>
                        <Box sx={{ mb: 2, color: 'white' }}>
                            <img src={flower} alt="Hero" style={{ width: getImageWidth(), height: 'auto' }} />
                        </Box>
                        <Box sx={{ color: 'white' }}>
                            <Typography variant="h2" sx={{ fontFamily: 'Baskervville' }}>MARNIE</Typography>
                            <Typography variant="h4" sx={{ fontFamily: 'Allura' }}>and</Typography>
                            <Typography variant="h2" sx={{ fontFamily: 'Baskervville' }}>LIAM</Typography>
                        </Box>
                        <Box sx={{ mb: 6, color: 'white' }}>
                            <Typography variant="h6" sx={{ fontFamily: 'Baskervville' }}>Friday 27th September 2024</Typography>
                        </Box>
                        <Box sx={{ mb: 2, color: 'white' }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{ fontFamily: 'PT Serif', color: "#33353E", backgroundColor: "#FFFFFF", borderRadius: 8, paddingX: 4 }}
                                onClick={() => window.open('https://forms.gle/Jd3XNbjdPEtud9tv6', '_blank')}
                            >
                                RSVP
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </Box>
    );
}

export default WeddingHero;