import { Component } from "react";
import BlogPostCard from "./BlogPostCard";

interface BlogPost {
    cover: string;
    title: string;
    description: string;
    link: string;
}

class Blog extends Component {
    state = {
        blogPosts: [] as BlogPost[],
    };

    componentDidMount() {
        fetch("/data/blogs.json")
            .then((response) => response.json())
            .then((data) => this.setState({ blogPosts: data }))
            .catch((error) => console.error("Error fetching data:", error));
    }

    render() {
        const { blogPosts } = this.state;

        return (
            <div className="blog-container">
                {blogPosts.map((post, index) => (
                    <BlogPostCard key={index} post={post} />
                ))}
            </div>
        );
    }
}

export default Blog;
