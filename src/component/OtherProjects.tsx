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

    // Function to generate random sizes for grid items
    const getRandomSize = () => {
        const sizes = [
            { gridRowEnd: "span 1", gridColumnEnd: "span 1" },
            { gridRowEnd: "span 1", gridColumnEnd: "span 2" },
            { gridRowEnd: "span 2", gridColumnEnd: "span 1" },
            { gridRowEnd: "span 2", gridColumnEnd: "span 2" },
            { gridRowEnd: "span 1", gridColumnEnd: "span 3" },
            { gridRowEnd: "span 2", gridColumnEnd: "span 3" },
            { gridRowEnd: "span 3", gridColumnEnd: "span 1" },
            { gridRowEnd: "span 3", gridColumnEnd: "span 2" },
            { gridRowEnd: "span 3", gridColumnEnd: "span 3" },
        ];
        return sizes[Math.floor(Math.random() * sizes.length)];
    };

    return (
        <div className="grid-container">
            {others.map((project, index) => {
                const size = getRandomSize();
                return (
                    <div
                        key={index}
                        className="grid-item"
                        style={{
                            gridRowEnd: size.gridRowEnd,
                            gridColumnEnd: size.gridColumnEnd,
                        }}
                    >
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
