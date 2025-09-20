import { Box, Typography, Button, Fade, Slide } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 64px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                color: "text.primary",
                px: 2,
                textAlign: "center",
            }}
        >
            <Fade in={show} timeout={900}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
                    <MenuBookIcon sx={{ fontSize: 60, mr: 1, color: "primary.main" }} />
                    <Typography variant="h2" fontWeight="bold" sx={{ fontSize: { xs: 36, sm: 56 } }}>
                        Delibrary
                    </Typography>
                </Box>
            </Fade>
            <Slide in={show} direction="up" timeout={1200}>
                <Typography variant="h5" sx={{ mb: 4, maxWidth: 600, mx: "auto", color: "secondary.main" }}>
                    Discover, browse, and explore a world of books. Delibrary brings the Open Library to your fingertips with
                    a beautiful, responsive bookshelf experience.
                </Typography>
            </Slide>
            <Fade in={show} timeout={1800}>
                <Button
                    component={RouterLink}
                    to="/trending"
                    size="large"
                    variant="contained"
                    color="secondary"
                    sx={{
                        px: 5,
                        py: 1.5,
                        fontWeight: "bold",
                        fontSize: 20,
                        borderRadius: 3,
                        boxShadow: 3,
                        transition: "transform 0.2s",
                        ":hover": { transform: "scale(1.05)" },
                    }}
                >
                    Discover
                </Button>
            </Fade>
        </Box>
    );
}
