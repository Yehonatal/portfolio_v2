import { GithubOutlined } from "@ant-design/icons";
import "../style/header.css";
import { FaCloudMoon } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
    function changeTheme() {
        const body = document.querySelector("body");

        if (body?.classList.contains("light_theme")) {
            body.classList.remove("light_theme");
            body.classList.add("dark_theme");
        } else {
            body?.classList.remove("dark_theme");
            body?.classList.add("light_theme");
        }
    }

    function humActions() {
        const menuContainer = document.querySelector(".hum_menu_container");

        if (menuContainer?.classList.contains("hide")) {
            menuContainer.classList.remove("hide");
        } else {
            menuContainer?.classList.add("hide");
        }
    }

    return (
        <header>
            <div className="header_container">
                <div className="tag ">
                    <Link to="/" className="tag_link">
                        Yonatan Afewerk
                    </Link>
                </div>
                <nav className="hide_mobile">
                    <li>
                        <Link to="/works">Works</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li className="flex">
                        <a
                            href="https://github.com/Yehonatal/portfolio_v2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="flex">
                                <GithubOutlined />
                            </div>
                        </a>
                    </li>
                </nav>
                {/* Theme switcher */}
                <div className="theme_switch">
                    <div className="switch" onClick={changeTheme}>
                        <FaCloudMoon />
                    </div>
                </div>
                {/* Mobile Menu */}
                <nav className="hide_desktop">
                    <div className="hum_menu" onClick={humActions}>
                        <BiMenuAltLeft />
                    </div>
                    <div className="hum_menu_container hide">
                        <Link to="/works">
                            <li>Works</li>
                        </Link>
                        <Link to="/posts">
                            <li>Posts</li>
                        </Link>
                        <a
                            href="https://github.com/Yehonatal/portfolio_v2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li>
                                <GithubOutlined />
                                Source
                            </li>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
