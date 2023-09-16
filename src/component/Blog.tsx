import { Component } from "react";
import BlogPostCard from "./BlogPostCard";

class Blog extends Component {
    state = {
        blogPosts: [],
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
                {!blogPosts.length ? (
                    <div className="loading">
                        <h1>...</h1>
                    </div>
                ) : (
                    blogPosts.map((post, index) => (
                        <BlogPostCard key={index} post={post} />
                    ))
                )}
            </div>
        );
    }
}

export default Blog;
