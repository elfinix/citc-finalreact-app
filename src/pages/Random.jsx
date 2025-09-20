import { useMemo, useState } from "react";
import { Box, Typography, Button, Stack, Chip, Fade, CircularProgress, Container } from "@mui/material";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import CardList from "../components/CardList";

const SUBJECTS = [
    "fiction",
    "science",
    "history",
    "mystery",
    "romance",
    "fantasy",
    "biography",
    "adventure",
    "thriller",
    "comedy",
    "drama",
    "poetry",
];

export default function Random() {
    const [started, setStarted] = useState(false);
    const [idx, setIdx] = useState(-1); // start before the first subject to cycle on first click
    const [isLoading, setIsLoading] = useState(false);

    const currentSubject = useMemo(() => (idx >= 0 ? SUBJECTS[idx] : null), [idx]);
    const prettySubject = useMemo(() => {
        if (!currentSubject) return "";
        return currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
    }, [currentSubject]);

    const handleSurprise = () => {
        setStarted(true);
        setIdx((prev) => (prev + 1) % SUBJECTS.length);
    };

    return (
        <Box sx={{ py: 6, mx: 14 }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    minHeight: started ? undefined : { xs: "60vh", md: "70vh" },
                    gap: 1,
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Delibrate Randomizer
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Not sure what to read? Let fate pick a subject and discover something new.
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<ShuffleIcon />}
                        onClick={handleSurprise}
                        disabled={isLoading}
                    >
                        Surprise me
                    </Button>
                    {started && currentSubject ? (
                        <Chip label={`Subject: ${prettySubject}`} color="primary" variant="outlined" />
                    ) : null}
                </Stack>
            </Box>

            {started && currentSubject ? (
                <Fade in key={currentSubject} timeout={400}>
                    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: 1 }}>
                            <CardList
                                type="subject"
                                subject={currentSubject}
                                limit={12}
                                onLoadingChange={setIsLoading}
                                emptyMessage={`No results found for ${prettySubject}.`}
                            />
                        </Box>
                    </Box>
                </Fade>
            ) : null}
        </Box>
    );
}
