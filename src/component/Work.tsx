import Project from "./Project";
import { BiSolidArrowToRight } from "react-icons/bi";
import "../style/work.css";
const Work = () => {
    return (
        <div className="works">
            <div className="projects-header">
                <hr />
            </div>

            <Project />
            <div className="more_link">
                <a
                    href="https://yonatanafewerk.super.site/other-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    More Projects
                    <BiSolidArrowToRight />
                </a>
            </div>

            <div className="collabs-header">
                <h2 className="title">Collaborations</h2>
                <hr />
            </div>
        </div>
    );
};

export default Work;
