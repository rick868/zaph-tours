import { Container, Grid, Typography } from '@mui/material';

export const Blog: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Blog
            </Typography>
            <Grid container spacing={2}>
                {/* Placeholder for blog cards */}
                <Grid>
                    <Typography variant="h6">Blog Title</Typography>
                    <Typography>Short preview of the blog...</Typography>
                    <button style={{ background: 'none', border: 'none', color: '#1976d2', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}>
                        Read More
                    </button>
                </Grid>
            </Grid>
        </Container>
    );
}