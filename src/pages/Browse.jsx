import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
    Box,
    TextField,
    InputAdornment,
    IconButton,
    Grid,
    Skeleton,
    Card as MUICard,
    CardContent as MUICardContent,
    Typography,
    Fade,
    CircularProgress,
    Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CardList from "../components/CardList";

export default function Browse() {
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState(null);

    const runSearch = () => {
        const trimmed = query.trim();
        if (!trimmed) return;
        setHasSearched(true);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        runSearch();
    };

    const renderSearchField = (fullWidth = true) => (
        <TextField
            fullWidth={fullWidth}
            placeholder="Search books, authors, subjects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            margin="normal"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        {isLoading ? (
                            <CircularProgress size={20} />
                        ) : (
                            <IconButton aria-label="search" edge="end" onClick={runSearch}>
                                <SearchIcon />
                            </IconButton>
                        )}
                    </InputAdornment>
                ),
            }}
        />
    );

    return (
        <Box>
            {!hasSearched ? (
                <Fade in timeout={300}>
                    <Box
                        sx={{
                            minHeight: "60vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <Box sx={{ width: 1, maxWidth: 720 }}>
                            <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
                                Browse
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                                Search the Open Library catalog by title, author, or subject.
                            </Typography>
                            <Box component="form" onSubmit={onSubmit}>
                                {renderSearchField(true)}
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            ) : (
                <Container>
                    <Box component="form" onSubmit={onSubmit} sx={{ mb: 3, mr: 11 }}>
                        {renderSearchField(true)}
                    </Box>
                    <Fade in timeout={200}>
                        <Box>
                            <CardList
                                type="search"
                                title={undefined}
                                query={query}
                                limit={24}
                                emptyMessage={`No results found for "${query}".`}
                                onLoadingChange={setIsLoading}
                            />
                        </Box>
                    </Fade>
                </Container>
            )}
        </Box>
    );
}
