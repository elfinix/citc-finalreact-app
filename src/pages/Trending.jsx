import { Box, Typography, Divider } from "@mui/material";
import CardList from "../components/CardList";

export default function Trending() {
    return (
        <Box sx={{ px: { xs: 2, sm: 3 }, p: 3, mx: 12 }}>
            <CardList title="Trending Books" type="trending" limit={12} showRank />
            <Divider sx={{ my: 4 }} />
            <CardList title="Popular Fiction" type="subject" subject="Fiction" limit={6} />
            <Divider sx={{ my: 4 }} />
            <CardList title="Science & Technology" type="subject" subject="Science" limit={6} />
            <Divider sx={{ my: 4 }} />
            <CardList title="History & Biography" type="subject" subject="History" limit={6} />
        </Box>
    );
}
