import React from 'react';
import { 
  Button,
  Typography,
  Grid,
  Box, 
  CardContent, 
  Card, 
  CardMedia,
  IconButton,
  Stack,
  Divider,
  Chip
}from '@mui/material';
import { tripTypes } from '../data/triptypes';
import { 
  ArrowForward,
  NavigateBefore,
  NavigateNext
} from '@mui/icons-material';

export const TripTypes: React.FC = () => {

    const [currentImageIndex, setCurrentImageIndex] = React.useState<Record<number, number>>(
    tripTypes.reduce((acc, trip) => ({ ...acc, [trip.id]: 0 }), {})
  );
    const handleNextImage = (tripId: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [tripId]: (prev[tripId] + 1) % tripTypes.find(t => t.id === tripId)!.images.length
    }));
  };
    const handlePrevImage = (tripId: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [tripId]: (prev[tripId] - 1 + tripTypes.find(t => t.id === tripId)!.images.length) % 
                tripTypes.find(t => t.id === tripId)!.images.length
    }));
  };

    return (
    <Box sx={{ p: 4}}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Explore Our Diverse Safari Experiences
      </Typography>
    
    <Grid container spacing={4}>
        {tripTypes.map((trip) => (
            <Box key={trip.id}>
            <Card elevation={5} sx={{ 
              height: '100%', width:'400px', margin:'auto', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="450px"
                  width="100%"
                  image={trip.images[currentImageIndex[trip.id]]}
                  alt={trip.title}
                />
                {trip.images.length > 1 && (
                  <>
                    <IconButton
                      sx={{ 
                        position: 'absolute', 
                        left: 8, 
                        top: '50%', 
                        color: 'white', 
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
                      }}
                      onClick={() => handlePrevImage(trip.id)}
                    >
                      <NavigateBefore />
                    </IconButton>
                    <IconButton
                      sx={{ 
                        position: 'absolute', 
                        right: 8, 
                        top: '50%', 
                        color: 'white', 
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
                      }}
                      onClick={() => handleNextImage(trip.id)}
                    >
                      <NavigateNext />
                    </IconButton>
                    </>
                )}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 500 }}>
                  {trip.title}
                </Typography>
                
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {trip.tags.map((tag) => (
                    <Chip label={tag} key={tag} color="primary" size="small" />
                  ))}
                </Stack>

                <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                  {trip.description}
                </Typography>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Pricing: {trip.price}
                </Typography>

                <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                  {trip.offers.map((offer) => (
                    <Typography component="li" variant="body2" sx={{textDecoration:"none"}} key={offer}>
                      {offer}
                    </Typography>
                  ))}
                </Box>

                <Button 
                  variant="contained" 
                  endIcon={<ArrowForward />}
                  fullWidth
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Book This Package
                </Button>
              </CardContent>
            </Card>
            </Box>
             ))}
      </Grid>
    </Box>
  )
}