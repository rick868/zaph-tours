import { Box, Typography, TextField, Button} from '@mui/material';


export function Footer() {
    return (
        <Box sx={{background:"gray"}}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom>Newsletter</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    Sign up for weekly email updates on safaris and adventures.
                </Typography>
                <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', gap: 2, justifyContent:"center" }}>
                    <TextField label="Email Address" variant="outlined" size="small" sx={{width:"600px"}}  />
                    <Button variant="contained" color="primary">Subscribe</Button>
                </Box>
            </Box>
            
            <Box 
                sx={{ p: 3, 
                textAlign: 'center' }}>
                <Typography variant="body2">© 2023 Zaph Tours. All rights reserved</Typography>
            </Box>
        </Box>
    );
}