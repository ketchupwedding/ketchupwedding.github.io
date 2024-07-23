import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import flower from "../assets/3.png";

function WeddingRsvp() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");
    const isMediumScreen = useMediaQuery("(max-width:1024px)");

    const getImageWidth = () => {
        if (isSmallScreen) {
            return '30%';
        } else if (isMediumScreen) {
            return '20%';
        } else {
            return '15%';
        }
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Stack direction="column" spacing={2} sx={{ alignItems: "center" }}>
                <Box>
                    <Typography textAlign="center" variant="h4" gutterBottom>RSVP</Typography>
                    <Typography textAlign="center">Please RSVP as soon as you can, before Friday 30th August
                        2024.</Typography>
                    <br />
                    <Typography textAlign="center">Use the link below or contact Marnie to respond.</Typography>
                    <Typography textAlign="center">Please don’t contact Liam because he won’t write it in Marnie’s
                        spreadsheet.</Typography>

                    <br />
                </Box>
                <Box sx={{ mb: 2, color: 'white' }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ fontFamily: 'PT Serif', color: "#FFFFFF", backgroundColor: "#668473", borderRadius: 8, paddingX: 4 }}
                        onClick={() => window.open('https://forms.gle/Jd3XNbjdPEtud9tv6', '_blank')}
                    >
                        RSVP
                    </Button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
                    <img src={flower} alt="Hero" style={{ width: getImageWidth(), height: 'auto' }} />
                </Box>
            </Stack>
        </Box>
    )
}

export default WeddingRsvp;