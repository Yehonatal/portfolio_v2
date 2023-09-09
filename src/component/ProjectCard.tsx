import "../style/project.css";
import { GoRepo } from "react-icons/go";
import { BsLink45Deg } from "react-icons/bs";

interface ProjectPost {
    img: string;
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
    return (
        <div className="project-card">
            <img src={project.img} alt={project.title} />
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
