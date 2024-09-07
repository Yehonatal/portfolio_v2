import { useEffect, useState } from "react";
import "../style/OtherProjects.css";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
interface Project {
    img: string;
    link: string;
}

const OtherProjects = () => {
    const [others, setOthers] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/data/others.json")
            .then((response) => response.json())
            .then((data: Project[]) => setOthers(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="grid-container">
            {others.map((project, index) => {
                return (
                    <div key={index} className="grid-item">
                        <img
                            src={project.img}
                            alt={`Other project ${index + 1}`}
                        />
                        <div className="overlay">
                            <a href={project.link} target="_blank">
                                <AiFillGithub />
                            </a>
                            <a href={project.link} target="_blank">
                                <BsLink45Deg />
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default OtherProjects;
