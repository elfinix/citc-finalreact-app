import { useEffect, useMemo, useState } from "react";
import {
    Card as MUICard,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Stack,
    Chip,
    CircularProgress,
    Icon,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";
import CardView from "./CardView";

function getCoverUrl(book) {
    // Try works cover_i or cover_id or covers array
    const coverId = book.cover_i || book.cover_id || (Array.isArray(book.covers) ? book.covers[0] : undefined);
    if (coverId) return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
    // Fallback placeholder
    return `https://via.placeholder.com/300x450?text=No+Cover`;
}

export default function Card({ data, rank }) {
    const [open, setOpen] = useState(false);
    const [imgLoading, setImgLoading] = useState(true);
    const rating = useMemo(() => (Math.random() * 5).toFixed(1), []);
    const title = data.title || data.title_suggest || "Untitled";
    const author = data.author_name?.[0] || data.authors?.[0]?.name || "Unknown Author";
    const year = data.first_publish_year || data.first_publish_date || data.created?.value?.slice(0, 4) || "—";
    const coverUrl = getCoverUrl(data);

    useEffect(() => {
        setImgLoading(true);
    }, [coverUrl]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <MUICard elevation={3} sx={{ height: "100%", width: "200px" }}>
                <CardActionArea onClick={handleOpen} sx={{ height: "100%" }}>
                    <Box sx={{ position: "relative", height: 180 }}>
                        {imgLoading && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <CircularProgress size={28} />
                            </Box>
                        )}
                        <CardMedia
                            component="img"
                            height="180"
                            image={coverUrl}
                            alt={title}
                            onLoad={() => setImgLoading(false)}
                            onError={() => setImgLoading(false)}
                            sx={{ display: imgLoading ? "none" : "block" }}
                        />
                    </Box>
                    <CardContent>
                        <Typography variant="subtitle1" noWrap title={title} sx={{ fontWeight: 600 }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" noWrap>
                            by {author}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Published {year}
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            sx={{ mt: 1, justifyContent: "space-between" }}
                        >
                            {rank !== undefined ? (
                                <Chip
                                    icon={<TrendingUpIcon />}
                                    label={`#${rank} Trending`}
                                    size="small"
                                    color="secondary"
                                    variant="outlined"
                                />
                            ) : (
                                <Icon />
                            )}
                            <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
                                <StarIcon sx={{ color: "warning.main", mr: 0.5 }} fontSize="small" />
                                <Typography variant="body2">{rating}</Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </MUICard>
            <CardView open={open} onClose={handleClose} book={data} rating={rating} />
        </>
    );
}
