import Header from "./component/Header";
import Hero from "./component/Hero";
import Work from "./component/Work";
import Post from "./component/Post";
import Footer from "./component/Footer";
import NotFound from "./component/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Suspense } from "react";
// import LazyHero from "./component/Lazy";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" Component={Hero} />
                <Route path="/works" Component={Work} />
                <Route path="/posts" Component={Post} />
                <Route path="/*" Component={NotFound} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
