import Project from "./Project";
import OtherProjects from "./OtherProjects";

import "../style/work.css";
const Work = () => {
    return (
        <div className="works">
            <div className="projects-header">
                <hr />
            </div>

            <Project />

            <div className="collabs-header">
                <h1 className="title">More Projects</h1>
                <hr />
                <br />

                <OtherProjects />
            </div>
        </div>
    );
};

export default Work;
