import { Container, Grid } from '@mui/material';
import { DestinationCard } from '../components/destinationscard';
import { destinations } from '../data/destination';

export const Destinations: React.FC = () => {
    return (
        <Container>
            <Grid container spacing={2}>
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
                        <Grid key={dest.name}>
                            <DestinationCard {...dest} />
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
}