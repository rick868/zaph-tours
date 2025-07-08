import { Container, Grid, Typography, Card, CardContent, Button, Box } from '@mui/material';

export const Blog: React.FC = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Exploring the Beauty of Kenya",
            preview: "Discover the stunning landscapes and rich culture of Kenya in this comprehensive guide.",
        },
        {
            id: 2,
            title: "Top 10 Wildlife Safaris",
            preview: "Experience the thrill of wildlife safaris with our top 10 recommendations for unforgettable adventures.",
        },
        {
            id: 3,
            title: "Culinary Delights of Africa",
            preview: "Join us on a culinary journey through Africa, exploring traditional dishes and modern twists.",
        },
        {
            id: 4,
            title: "Wellness Retreats: A Path to Relaxation",
            preview: "Unwind and rejuvenate at the best wellness retreats across the continent.",
        },
        {
            id: 5,
            title: "Adventure Activities in Kenya",
            preview: "From hiking to water sports, discover the best adventure activities to try in Kenya.",
        },
    ];

    return (
        <Container>
            <Grid container spacing={4} sx={{ mt: 4, display:'flex', flexDirection:'row', justifyContent:'center' }}>
                {blogPosts.map((post) => (
                    <Box key={post.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.preview}
                                </Typography>
                                <Button 
                                    variant="text" 
                                    color="primary" 
                                    style={{ textDecoration: 'underline' }}
                                >
                                    Read More
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Grid>
        </Container>
    );
}