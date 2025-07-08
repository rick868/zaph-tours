import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
    image: string;
    name: string;
    description: string;
    groupPrice: string;
    individualPrice: string;
}
export const DestinationCard: React.FC<DestinationCardProps> = ({ image, name, description, groupPrice, individualPrice }) => {
    return (
        <Card>
            <CardMedia component="img" height="300" image={image} alt={name} />
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body2">{description}</Typography>
                <Typography variant="body1">Group Price: {groupPrice}</Typography>
                <Typography variant="body1">Individual Price: {individualPrice}</Typography>
                <Button component={Link} to="#" variant="contained" color="primary">View Details</Button>
            </CardContent>
        </Card>
    );
};

