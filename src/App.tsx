import Header from "./component/Header";
import Hero from "./component/Hero";
import Work from "./component/Work";
import Post from "./component/Post";
import Footer from "./component/Footer";
// import NotFound from "./component/Hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Suspense } from "react";
// import LazyHero from "./component/Lazy";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" Component={Hero} />
                <Route path="/Works" Component={Work} />
                <Route path="/Posts" Component={Post} />
                <Route Component={Hero} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
