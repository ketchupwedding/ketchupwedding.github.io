import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import EncryptedText from "./EncryptedText";

function WeddingTransportInfo() {
    return (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography textAlign="center" variant="h4" gutterBottom>Transport Information</Typography>
            <Typography variant="body1" gutterBottom>We will have lots of delicious food and drinks to celebrate, so you
                probably don't want to drive! It can be hard to get an Uber/Taxi in the Yarra Valley, so we have
                arranged a bus for wedding guests as follows:</Typography>
            <br />


            <Typography variant="h6" color="#668473" gutterBottom fontWeight="bold">Bus to the Venue</Typography>
            <Typography variant="body1">Departs: 9:00am</Typography>
            <Typography variant="body1">Pickup location: Bus zone on Maroondah Hwy outside Sage Hotel,
                directly opposite Ringwood Station</Typography>
            <Typography variant="body1">Destination: Stones of the Yarra Valley</Typography>
            <br />

            <Typography variant="h6" color="#668473" gutterBottom fontWeight="bold">Bus from the Venue</Typography>
            <Typography variant="body1">Departs: 3:15pm</Typography>
            <Typography variant="body1">Pickup location: Stones of the Yarra Valley</Typography>
            <Typography variant="body1"><EncryptedText text="U2FsdGVkX1+dDajaOn95+JKQ1p26X+w34juSKSXtv03JEfTiEgaI9kUajUSBMRR7hI7C90ABvxVI2DcsFUggSg==" /></Typography>
            <Typography variant="body1" fontStyle="italic">Note: The bus will also continue back to the morning pickup
                location near Ringwood Station for anyone not attending the after party</Typography>
            <br />
            <br />

            <Typography variant="body1" gutterBottom>The bus has seat belts and is climate controlled. Please indicate
                in your RSVP if you will be taking the bus, so the driver knows who to let on board!</Typography>
            <Typography variant="body1" gutterBottom>If you do choose to drive to the venue, please enter via the Stones
                of the Yarra Valley driveway and turn left towards The Stables to park.</Typography>

        </Box>
    );
}

export default WeddingTransportInfo;