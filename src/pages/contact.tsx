import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

export const Contact: React.FC = () => {
    return (
            <Container sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ 
                    backgroundColor: 'lightgrey', 
                    borderRadius: 2, 
                    padding: 4, 
                    boxShadow: 2 
                }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Get In Touch
                    </Typography>

                    <form>
                        <TextField 
                            label="Name" 
                            fullWidth
                            margin="normal" 
                            required 
                        />
                        <TextField 
                            label="Email" 
                            fullWidth 
                            margin="normal" 
                            type="email" 
                            required 
                        />
                        <TextField 
                            label="Subject" 
                            fullWidth 
                            margin="normal" 
                            required 
                        />
                        <TextField 
                            label="Message" 
                            fullWidth 
                            margin="normal" 
                            multiline 
                            rows={4} 
                            required 
                        />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            type="submit" 
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Send
                        </Button>
                    </form>
                </Box>
            

            <Typography variant="h6" gutterBottom>
                Contact Information
            </Typography>
            <Grid container spacing={2} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Box display="flex" alignItems="center">
                        <Email sx={{ mr: 1 }} />
                        <Typography>Email: info@zaphtours.co.ke</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                        <Phone sx={{ mr: 1 }} />
                        <Typography>Phone: +254 700 000 000</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                        <LocationOn sx={{ mr: 1 }} />
                        <Typography>Address: Nairobi, Kenya</Typography>
                </Box>
            </Grid>
        </Container>
    );
}