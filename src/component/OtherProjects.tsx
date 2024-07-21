import { useEffect, useState } from "react";
import "../style/OtherProjects.css";

interface Project {
    img: string;
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
                    </div>
                );
            })}
        </div>
    );
};

export default OtherProjects;
