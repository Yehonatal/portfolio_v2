import "../style/blog.css";
import { BiSolidArrowToRight } from "react-icons/bi";
import React, { useState } from "react";

interface BlogPost {
    cover: string;
    coverSmall: string;
    title: string;
    description: string;
    link: string;
}

interface BlogPostCardProps {
    post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    const handleImgLoad = () => {
        setIsImgLoaded(true);
    };

    return (
        <div className="blog-card">
            <div
                className={`blurred-img ${isImgLoaded ? "loaded" : ""}`}
                style={{ backgroundImage: `url(${post.coverSmall})` }}
            >
                <img
                    src={post.cover}
                    alt={post.title}
                    loading="lazy"
                    onLoad={handleImgLoad}
                />
            </div>
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
};

export default BlogPostCard;
