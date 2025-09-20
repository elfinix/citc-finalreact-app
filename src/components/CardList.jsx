import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Box, Typography, Skeleton, Stack, Card as MUICard, CardContent as MUICardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "./Card";

export default function CardList({
    title,
    type,
    subject,
    query,
    limit = 6,
    showRank = false,
    emptyMessage,
    onLoadingChange,
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let cancelled = false;
        const fetchData = async () => {
            setIsLoading(true);
            onLoadingChange && onLoadingChange(true);
            setError(null);
            try {
                let url = "";
                if (type === "trending") {
                    url = `https://openlibrary.org/trending/daily.json`;
                } else if (type === "subject" && subject) {
                    const encoded = encodeURIComponent(subject);
                    url = `https://openlibrary.org/search.json?subject=${encoded}&limit=${limit}`;
                } else if (type === "search" && query) {
                    const encoded = encodeURIComponent(query);
                    url = `https://openlibrary.org/search.json?q=${encoded}&limit=${limit}`;
                }
                const res = await axios({ url, method: "GET" });
                if (cancelled) return;
                let docs = [];
                if (type === "trending") {
                    docs = (res.data?.works || []).slice(0, limit).map((w, idx) => ({
                        ...w,
                        _rank: idx + 1,
                    }));
                } else {
                    docs = (res.data?.docs || []).slice(0, limit);
                }
                setItems(docs);
            } catch (err) {
                if (!cancelled) setError(err);
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                    onLoadingChange && onLoadingChange(false);
                }
            }
        };
        fetchData();
        return () => {
            cancelled = true;
        };
    }, [type, subject, query, limit]);

    const skeletons = useMemo(() => Array.from({ length: limit }), [limit]);

    return (
        <Box sx={{ mb: 2 }}>
            {title && (
                <Typography variant="h5" sx={{ mb: 3 }}>
                    {title}
                </Typography>
            )}
            {isLoading ? (
                <Grid container spacing={2} alignItems="stretch">
                    {skeletons.map((_, i) => (
                        <Grid item key={`sk-${i}`} xs={12} sm={6} md={3}>
                            <MUICard sx={{ height: "100%" }}>
                                <Skeleton variant="rectangular" animation="wave" sx={{ width: 200, height: 180 }} />
                                <MUICardContent>
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                </MUICardContent>
                            </MUICard>
                        </Grid>
                    ))}
                </Grid>
            ) : items.length === 0 ? (
                <Typography variant="body2" sx={{ textAlign: "center", color: "text.secondary", my: 2 }}>
                    {emptyMessage || "No results found."}
                </Typography>
            ) : (
                <Grid container spacing={2} alignItems="stretch">
                    {items.map((book, idx) => (
                        <Grid item key={book.key || idx} xs={12} sm={6} md={3}>
                            <Card data={book} rank={showRank ? book._rank ?? idx + 1 : undefined} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
