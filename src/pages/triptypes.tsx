import { Container, Typography, Grid } from '@mui/material';
import { tripTypes } from '../data/triptypes';

export const TripTypes: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Trip Types
            </Typography>
            <Grid container spacing={2}>
                {tripTypes.map((type) => (
                    <Grid key={type.title}>
                        <Typography variant="h6">{type.title}</Typography>
                        <img src={type.image} alt={type.title} style={{ width: '100%' }} />
                        <Typography>{type.description}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}