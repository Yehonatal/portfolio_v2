import React, { useState } from "react";
import { GoRepo } from "react-icons/go";
import { BsLink45Deg } from "react-icons/bs";
import "../style/project.css";
interface ProjectPost {
    img: string;
    imgSmall: string;
    title: string;
    description: string;
    techUsed: string[];
    liveLink: string;
    repoLink: string;
}

interface ProjectPostCardProps {
    project: ProjectPost;
}

const ProjectCard: React.FC<ProjectPostCardProps> = ({ project }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <div className="project-card">
            <div
                className={`blurred-img ${isImageLoaded ? "loaded" : ""}`}
                style={{ backgroundImage: `url(${project.imgSmall})` }}
            >
                <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    onLoad={handleImageLoad}
                />
            </div>
            <div className="project-content">
                <div className="project-head">
                    <div>
                        <h2>{project.title}</h2>
                    </div>

                    <div className="links">
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsLink45Deg />
                        </a>
                        <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GoRepo />
                        </a>
                    </div>
                </div>
                <p>{project.description}</p>
            </div>
            <div className="project-tech-stack">
                <ul>
                    {project.techUsed.map((tech, index) => (
                        <li key={index} className="tech">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;
