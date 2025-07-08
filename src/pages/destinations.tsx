import { Container, Grid, Box } from '@mui/material';
import { DestinationCard } from '../components/destinationscard';
import { destinations } from '../data/destination';

export const Destinations: React.FC = () => {
    return (
        <Container sx={{ mb: 6}}>
            <Grid container spacing={3}>
                {destinations
                    .filter(
                        (dest) =>
                            typeof dest.name === 'string' &&
                            typeof dest.description === 'string' &&
                            typeof dest.groupPrice === 'string' &&
                            typeof dest.individualPrice === 'string' &&
                            typeof dest.image === 'string'
                    )
                    .map((dest) => (
                        <Box key={dest.name}> 
                            <Box  sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                maxWidth:"350px",
                                margin:"10px 5px"
                            }}>
                                <DestinationCard {...dest} 
                                />
                            </Box>
                        </Box>
                    ))}
            </Grid>
        </Container>
    );
}
