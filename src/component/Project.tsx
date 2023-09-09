import { Component } from "react";
import ProjectCard from "./ProjectCard";

class Project extends Component {
    state = {
        projectPosts: [],
    };

    componentDidMount() {
        fetch("/data/projects.json")
            .then((response) => response.json())
            .then((data) => this.setState({ projectPosts: data }))
            .catch((error) => console.error(error));
    }
    // render component
    render() {
        const { projectPosts } = this.state;

        return (
            <div className="project-container">
                {projectPosts.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        );
    }
}

export default Project;
