import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import { TimelineOppositeContent, timelineOppositeContentClasses } from "@mui/lab";
import EncryptedText from './EncryptedText';

export default function CustomizedTimeline() {
    return (
        <Box sx={{ mt: 4, justifyContent: 'space-between' }}>
            <Typography textAlign="center" variant="h4" gutterBottom>Schedule</Typography>

            <Typography textAlign="center" variant="h5" gutterBottom>Friday 27th September 2024</Typography>
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.5,
                    },
                }}
            >
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        10:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='primary' />
                        <TimelineConnector color='primary' />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography fontWeight="bold">Ceremony</Typography>
                        <Typography gutterBottom>Wedding Ceremony in the beautiful Chapel at Stones.</Typography>
                        <Typography fontStyle="italic" color="textSecondary">The Chapel - Stones of the Yarra Valley</Typography>
                        <Typography fontStyle="italic" color="textSecondary">14 St Huberts Rd, Coldstream VIC 3770, Australia</Typography>
                        <br />
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        11:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='primary' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography fontWeight="bold">Pre-Reception Drinks and Canapés</Typography>
                        <Typography gutterBottom>Mingle and enjoy some delicious canapés and drinks after the ceremony.</Typography>
                        <Typography fontStyle="italic" color="textSecondary">The Dairy - Stones of the Yarra Valley</Typography>
                        <Typography fontStyle="italic" color="textSecondary">14 St Huberts Rd, Coldstream VIC 3770, Australia</Typography>
                        <br />
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        12:00 pm
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='primary' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography fontWeight="bold">Reception</Typography>
                        <Typography gutterBottom>Join us for lunch, drinks, cake and speeches.</Typography>
                        <Typography fontStyle="italic" color="textSecondary">The Stables - Stones of the Yarra Valley</Typography>
                        <Typography fontStyle="italic" color="textSecondary">14 St Huberts Rd, Coldstream VIC 3770, Australia</Typography>
                        <br />
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        4:00 pm
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='primary' />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography fontWeight="bold">After Party</Typography>
                        <Typography gutterBottom>Keep the celebration going, in a laid-back way.</Typography>
                        <Typography fontStyle="italic" color="textSecondary">Boyle Household</Typography>
                        <Typography fontStyle="italic" color="textSecondary"><EncryptedText text="U2FsdGVkX18+IkE+L+iLLc8W401Xa2wzscCN+IVtCU9EVZkXIoleg9QeMSpgDRQnQzclYPTvmz8pma7VztQlqw==" /></Typography>
                        <br />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>

            <Typography textAlign="center" variant="h5" gutterBottom>Saturday 28th September 2024</Typography>
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0.5,
                    },
                }}
            >
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        12:00 pm
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='primary' />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography fontWeight="bold">Grand Final and Recovery Lunch (Optional)</Typography>
                        <Typography gutterBottom>If you're up for it, come and hang out the next day for some food and footy.</Typography>
                        <Typography fontStyle="italic" color="textSecondary">Ketchup Household</Typography>
                        <Typography fontStyle="italic" color="textSecondary"><EncryptedText text="U2FsdGVkX1+55XaV+Jk3FwGnX7rPOAHUvLKUOjhqUb7pPyHI5rcHVn9kWcb31zvrC9U2R+YGg1hucNgfTBHuIg==" /></Typography>
                        <br />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
}