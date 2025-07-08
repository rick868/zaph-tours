import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export function Navbar () {
    return (
        <AppBar
        position="static"
        elevation={0}
        sx={{
            backgroundColor: "teal",
        }}>
            <Toolbar>
                <Box
                    sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        width:"100%",
                        padding:"10px 0px",
                        maxHeight: "1.5rem",
                    
                    }}
                    component="div"
                    >
                        {/* logo */}
                        <Box sx={{color:"black"}}>
                            <h1>Zaph Tours</h1>
                        </Box>

                        {/* Links */}
                        <Box sx={{
                            color:"black",
                            display:"flex",
                            justifyContent: "space-between",
                            gap: "3.5rem",
                            cursor:"pointer"
                            }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/destinations">Destinations</Button>
                    <Button color="inherit" component={Link} to="/trip-types">Trip Types</Button>
                    <Button color="inherit" component={Link} to="/blog">Blog</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                        </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}