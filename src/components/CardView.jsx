import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Backdrop, Paper, Box, Typography, IconButton, Divider, CircularProgress, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

function getCoverUrl(srcBook, details) {
    const coverId =
        details?.covers?.[0] ||
        srcBook?.cover_i ||
        srcBook?.cover_id ||
        (Array.isArray(srcBook?.covers) ? srcBook.covers[0] : undefined);
    if (coverId) return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
    return `https://via.placeholder.com/300x450?text=No+Cover`;
}

export default function CardView({ open, onClose, book, rating: ratingProp }) {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [error, setError] = useState(null);
    const rating = useMemo(() => ratingProp ?? (Math.random() * 5).toFixed(1), [ratingProp]);

    useEffect(() => {
        if (!open || !book) return;
        let cancelled = false;
        const fetchDetails = async () => {
            try {
                setLoading(true);
                const key = book.key;
                if (!key) return;
                const url = `https://openlibrary.org${key}.json`;
                const res = await axios({ url, method: "GET" });
                if (!cancelled) setDetails(res.data);
            } catch (e) {
                if (!cancelled) setError("Failed to load book details. Please try again.");
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        fetchDetails();
        return () => {
            cancelled = true;
        };
    }, [open, book]);

    const author = book?.author_name?.[0] || book?.authors?.[0]?.name || "Unknown Author";
    const coverUrl = getCoverUrl(book, details);
    const description = details?.description?.value || details?.description || "No description available.";
    const subjects = details?.subjects?.length ? details.subjects : book?.subject || book?.subject_facet || [];

    return (
        <Backdrop open={open} sx={{ zIndex: (t) => t.zIndex.modal + 1 }} onClick={onClose}>
            <Paper
                elevation={6}
                sx={{
                    width: { xs: "92%", sm: 800 },
                    maxHeight: "80vh",
                    display: "flex",
                    flexDirection: "column",
                    p: 3,
                    bgcolor: "background.paper",
                    position: "relative",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <IconButton aria-label="close" onClick={onClose} sx={{ position: "absolute", top: 8, right: 8 }}>
                    <CloseIcon />
                </IconButton>
                {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            flex: 1,
                            minHeight: 0,
                            flexDirection: { xs: "column", sm: "row" },
                        }}
                    >
                        <Box
                            sx={{
                                flex: "0 0 auto",
                                width: { xs: 1, sm: 320 },
                                height: { xs: 240, sm: "100%" },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                component="img"
                                src={coverUrl}
                                alt={book?.title}
                                sx={{ width: 1, height: 1, maxHeight: "500px", borderRadius: 1, objectFit: "contain" }}
                            />
                        </Box>
                        <Box sx={{ flex: 1, minHeight: 0, pr: 1, display: "flex", flexDirection: "column" }}>
                            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                                {book?.title}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ mb: 1 }} color="text.secondary">
                                {author}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                <StarIcon sx={{ color: "warning.main", mr: 0.5 }} />
                                <Typography variant="body1">{rating}</Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                {" "}
                                Published: {details?.first_publish_date || book?.first_publish_year || "N/A"}{" "}
                            </Typography>
                            {subjects?.length ? (
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <Typography component="span">Subjects:</Typography> {subjects.slice(0, 8).join(", ")}
                                </Typography>
                            ) : null}
                            <Box
                                sx={{
                                    mb: 1,
                                    ...(expanded ? { flex: 1, minHeight: 0, overflowY: "auto", pr: 0.5 } : {}),
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        ...(expanded
                                            ? {}
                                            : {
                                                  display: "-webkit-box",
                                                  WebkitLineClamp: 3,
                                                  WebkitBoxOrient: "vertical",
                                                  overflow: "hidden",
                                              }),
                                    }}
                                >
                                    {description}
                                </Typography>
                            </Box>
                            <Button size="small" onClick={() => setExpanded((e) => !e)}>
                                {expanded ? "Show less" : "Read more"}
                            </Button>
                        </Box>
                    </Box>
                )}
            </Paper>
        </Backdrop>
    );
}
