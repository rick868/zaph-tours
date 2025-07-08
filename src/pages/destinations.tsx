import { Container, Grid, Box } from '@mui/material';
import { DestinationCard } from '../components/destinationscard';
import { destinations } from '../data/destination';

export const Destinations: React.FC = () => {
    return (
        <Container>
            <Grid container spacing={4}>
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
                        <Box key={dest.name} sx={{ mb: 6, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                            <Box>
                                <DestinationCard {...dest} />
                            </Box>
                        </Box>
                    ))}
            </Grid>
        </Container>
    );
}
