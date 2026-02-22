import react, { useState, useEffect, CSSProperties } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import RingLoader from "react-spinners/RingLoader";

const override = {
    display: "block",
    margin: "0 auto",
    marginTop: "200px"
}
;

function App() {
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <RingLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                />
            ) : (
                <AnimatePresence>
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route element={<Home />} path="/" exact />
                            <Route element={<About />} path="/about" />
                            <Route element={<Resume />} path="/resume" />
                            <Route element={<Project />} path="/project" />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </AnimatePresence>
            )}
        </div>
    );
}

export default App;
