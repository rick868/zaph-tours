import { Container, TextField, Button, Typography, Box, Grid, Divider, IconButton  } from '@mui/material';
import { Email, Phone, LocationOn, Schedule, Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';


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

                 <Divider sx={{ my: 3 }} />

                <Box>

                  {/* Office Hours */}
                <Box sx={{display:'flex', justifyContent:'left', alignItems:'center'}}>
                <Typography variant="h5" gutterBottom>
                Office Hours
                </Typography>

                <Box sx={{ display: 'flex', mb: 3 }}>
                <Schedule color="primary" sx={{ mr: 1 }}  />
                <Box>
                    <Typography>Monday - Friday: 8:00 AM - 5:00 PM</Typography>
                    <Typography>Saturday: 9:00 AM - 1:00 PM</Typography>
                    <Typography>Sunday: Closed</Typography>
                </Box>
                </Box>
                </Box>
                <Divider sx={{ my: 3 }} />

                <Box sx={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                    {/* Social Media Links */}
                    <Typography variant="h5" gutterBottom>
                    Follow Us
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton color="inherit" href="https://facebook.com" target="_blank">
                        <Facebook fontSize="medium" />
                    </IconButton>
                    <IconButton color="inherit" href="https://twitter.com" target="_blank">
                        <Twitter fontSize="medium" />
                    </IconButton>
                    <IconButton color="inherit" href="https://instagram.com" target="_blank">
                        <Instagram fontSize="medium" />
                    </IconButton>
                    <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                        <LinkedIn fontSize="medium" />
                    </IconButton>
                    </Box>
                </Box>

                </Box>
                </Grid>
        </Container>
    );
}