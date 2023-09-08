import { Link } from "react-router-dom";
import "../style/notfound.css";

const NotFound = () => {
    return (
        <div
            className="not_found"
            style={{ textAlign: "center", marginTop: "10rem" }}
        >
            <h1>404 - Not Found</h1>
            <p>Oops! It looks like you're lost in cyberspace.</p>
            <p>
                Don't worry, you can always go back to the{" "}
                <Link to="/">Home</Link>.
            </p>
            <img
                src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
                alt="Lost Astronaut"
                style={{ maxWidth: "100%" }}
            />
        </div>
    );
};

export default NotFound;
