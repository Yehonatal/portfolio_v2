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
                <h2 className="title">More Projects</h2>
                <hr />

                <OtherProjects />
            </div>
        </div>
    );
};

export default Work;
