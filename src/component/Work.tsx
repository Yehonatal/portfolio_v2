import Project from "./Project";
import { BiSolidArrowToRight } from "react-icons/bi";
import "../style/work.css";
const Work = () => {
    return (
        <>
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
        </>
    );
};

export default Work;
