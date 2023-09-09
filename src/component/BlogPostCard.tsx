import React from "react";
import "../style/blog.css";
import { BiSolidArrowToRight } from "react-icons/bi";

interface BlogPost {
    cover: string;
    title: string;
    description: string;
    link: string;
}

interface BlogPostCardProps {
    post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => (
    <div className="blog-card">
        <img src={post.cover} alt={post.title} />
        <div className="blog-content">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
                Read More
                <BiSolidArrowToRight />
            </a>
        </div>
    </div>
);

export default BlogPostCard;
