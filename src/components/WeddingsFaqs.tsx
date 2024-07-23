import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMore from '@mui/icons-material/ExpandMore';


function WeddingFaqs() {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography textAlign="center" variant="h4" gutterBottom>FAQs</Typography>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography sx={{ fontWeight: 'bold' }}>What colour are the bridesmaids wearing? I don't want to clash.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Shades of green! Think sage/eucalyptus colour palette.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography sx={{ fontWeight: 'bold' }}>I'm travelling to be there and want to stay in the area. Where should I stay?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>We recommend you stay at the Sage Hotel in Ringwood. The wedding bus that we have arranged will depart from right out the front, and Sage Hotel is easily accessible via public transport, across the road from Ringwood train station.</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography sx={{ fontWeight: 'bold' }}>Are you having a recovery lunch?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>There are lots of you staying the night in the area, so we’d love to see you again the next day if you’re free! Feel free to come to our place from midday on Sat 28th. We’ll have food and the footy on TV.</Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default WeddingFaqs;