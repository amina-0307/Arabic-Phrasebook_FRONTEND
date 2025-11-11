import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") ==="dark"
    );

    useEffect(() => {
        document.body.classNmae = darkMode ? "dark" : "";
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <nav className="navbar">
            <h1>Arabic Phrasebook</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/quiz">Quiz</Link>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;