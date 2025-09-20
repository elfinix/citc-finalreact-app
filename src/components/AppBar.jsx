import { useState } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";

// MUI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useTheme, useMediaQuery } from "@mui/material";

// MUI icons
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function AppBarComponent() {
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navLinks = [
        { label: "Trending", to: "/trending" },
        { label: "Browse", to: "/browse" },
        { label: "Random", to: "/random" },
        { label: "About", to: "/about" },
    ];
    const isHome = location.pathname === "/";

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
        <AppBar position="static" color="primary" elevation={1}>
            <Toolbar>
                <Button
                    component={RouterLink}
                    to="/"
                    color="inherit"
                    sx={{
                        fontWeight: "bold",
                        textTransform: "none",
                        fontSize: 20,
                        p: 1,
                    }}
                >
                    <MenuBookIcon sx={{ mr: 1 }} />
                    Delibrary
                </Button>
                <Box sx={{ flexGrow: 1 }} />
                {isMobile ? (
                    <>
                        <IconButton color="inherit" edge="end" onClick={handleDrawerToggle} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                            <Box
                                sx={{ width: 220 }}
                                role="presentation"
                                onClick={handleDrawerToggle}
                                onKeyDown={handleDrawerToggle}
                            >
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton component={RouterLink} to="/">
                                            <MenuBookIcon sx={{ mr: 1 }} />
                                            <ListItemText primary="Delibrary" />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                    {navLinks.map((nav) => {
                                        const active = location.pathname === nav.to;
                                        return (
                                            <ListItem key={nav.to} disablePadding>
                                                <ListItemButton component={RouterLink} to={nav.to} selected={active}>
                                                    <ListItemText primary={nav.label} />
                                                </ListItemButton>
                                            </ListItem>
                                        );
                                    })}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{ display: "flex", ml: 2 }}>
                        {navLinks.map((nav) => {
                            const active = location.pathname === nav.to;
                            return (
                                <Button
                                    key={nav.to}
                                    component={RouterLink}
                                    to={nav.to}
                                    color={active ? "secondary" : "inherit"}
                                    sx={{
                                        textTransform: "none",
                                        mx: 1,
                                        borderBottom: active ? 2 : 0,
                                        borderColor: active ? "secondary.main" : undefined,
                                    }}
                                >
                                    {nav.label}
                                </Button>
                            );
                        })}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
