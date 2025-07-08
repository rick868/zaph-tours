import { Container, TextField, Button, Typography } from '@mui/material';

export const Contact: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Contact Us
            </Typography>
            <form>
                <TextField label="Name" fullWidth margin="normal" />
                <TextField label="Email" fullWidth margin="normal" />
                <TextField label="Subject" fullWidth margin="normal" />
                <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
                <Button variant="contained" color="primary" type="submit">Send</Button>
            </form>
            <Typography variant="h6" gutterBottom>
                Contact Information
            </Typography>
            <Typography>Email: info@zaphtours.co.ke</Typography>
            <Typography>Phone: +254 700 000 000</Typography>
            <Typography>Address: Nairobi, Kenya</Typography>
        </Container>
    );
}