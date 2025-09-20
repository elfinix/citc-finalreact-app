import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#03dac5", // Light blue
        },
        secondary: {
            main: "#b3cbd1", // Teal
        },
    },
});

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
);
