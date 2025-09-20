import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Browse from "./pages/Browse";
// import Random from "./pages/Random";
// import About from "./pages/About";
import AppBarComponent from "./components/AppBar";

function App() {
    return (
        <>
            <AppBarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/browse" element={<Browse />} />
                {/* <Route path="/random" element={<Random />} /> */}
                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
        </>
    );
}

export default App;
