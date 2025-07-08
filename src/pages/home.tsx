import { Container, Typography, Box, Paper, Stack, Grid } from '@mui/material';
import { DestinationCard } from '../components/destinationscard';
import { Header } from '../components/header';

// Define a type for your destination data
interface Destination {
  name: string;
  description: string;
  groupPrice: string;
  individualPrice: string;
  image: string;
}

const popularDestinations: Destination[] = [
{
    name: "Mt. Kenya",
    description: "Explore the stunning peaks and diverse wildlife of Mt. Kenya.",
    groupPrice: "$1200",
    individualPrice: "$1500",
    image: "/images/featured/Mt.Kenya.jpeg"
  },
  {
    name: "Mt. Ruwenzori",
    description: "Experience the breathtaking Ruwenzori Mountains and glaciers.",
    groupPrice: "$1300",
    individualPrice: "$1600",
    image: "/images/featured/Mt.Ruwenzori.jpeg"
  },
  {
    name: "Lake Nakuru",
    description: "Discover the flamingos and rich birdlife at Lake Nakuru.",
    groupPrice: "$900",
    individualPrice: "$1100",
    image: "/images/featured/L.Nakuru.jpeg"
  },
  {
    name: "Tsavo National Park",
    description: "Safari through the vast landscapes of Tsavo National Park.",
    groupPrice: "$1000",
    individualPrice: "$1200",
    image: "/images/featured/Tsavo.jpeg"
  },
  {
    name: "Nairobi National Park",
    description: "Enjoy wildlife viewing just outside the city at Nairobi National Park.",
    groupPrice: "$800",
    individualPrice: "$1000",
    image: "/images/featured/nnp.jpeg"
  },
  {
    name: "Coastal Kenya",
    description: "Relax on the beautiful beaches and explore coastal culture.",
    groupPrice: "$1100",
    individualPrice: "$1300",
    image: "/images/featured/Malindi.jpeg"
  }
];

const testimonials = [
  { quote: "Zaph Tours made our safari unforgettable!", author: "John D." },
  { quote: "Excellent service and amazing destinations.", author: "Sarah K." },
  { quote: "Highly recommend for adventure lovers.", author: "Mike P." }
];


export const Home: React.FC = () => {
  return (
    <>
      <Header />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* About Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" align="center" gutterBottom sx={{ 
            fontWeight: 'bold',
            mb: 6,
            color: 'primary.main'
          }}>
            About Zaph Tours
          </Typography>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
          <Box sx={{ flex: 1 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium' }}>
                Our Story
              </Typography>
              <Typography component="p">
                Founded in 2010, Zaph Tours has grown from a small family-run operation to East Africa's premier safari specialist. 
                What began with just one Land Rover and a passion for wildlife has blossomed into an award-winning tour company 
                trusted by thousands of adventurers worldwide.
              </Typography>
              
              <Typography variant="h5" gutterBottom sx={{ mt: 3, fontWeight: 'medium' }}>
                Why Choose Us?
              </Typography>
              <Stack spacing={2}>
                {[
                  "✓ 15+ years of authentic safari experience",
                  "✓ 98% customer satisfaction rate",
                  "✓ Expert local guides with 10+ years average experience",
                  "✓ Eco-friendly tours supporting conservation",
                  "✓ Fully customized itineraries"
                ].map((item) => (
                  <Typography key={item} sx={{ display: 'flex', alignItems: 'center' }}>
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          </Box>
        </Stack>
      </Box>

        {/* Featured Destinations */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>Featured Destinations</Typography>
          <Grid 
              container 
              spacing={{ xs: 2, sm: 3, md: 4 }} 
              sx={{ 
                  margin: 'auto',
                  maxWidth: 1200,
                  padding: 2
              }}
          >
              {popularDestinations.map((dest) => (
                <Stack key={dest.name} direction={'row'} sx={{
                  width:'350px',flexWrap:'wrap'
                }}>
                     <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center' }}>
                          <DestinationCard {...dest} />
                      </Box> 
                </Stack>

                  
              ))}
          </Grid>
      </Box>

      {/* Testimonials */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>Testimonials</Typography>
        {testimonials.map(({ quote, author }) => (
          <Box key={author} sx={{ mb: 2, fontStyle: 'italic' }}>
            “{quote}” — {author}
          </Box>
        ))}
      </Box>
    </Container>
    </>
  );
};
