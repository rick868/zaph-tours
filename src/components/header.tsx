import { Box, Typography } from "@mui/material";

export function Header() {
    return(
        <Box sx={{
            minHeight:"93vh",
            background:"url(/images/pexels-robbkeens-2622266.jpg)",
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            }}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
                Best Safaris and Adventures
            </Typography>
        </Box>
    )
}
