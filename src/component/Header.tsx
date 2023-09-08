import { GithubOutlined } from "@ant-design/icons";
import "../style/header.css";
import { FaCloudMoon } from "react-icons/fa";

function Header() {
    function changeTheme() {
        if (document.querySelector("body")?.classList.contains("light_theme")) {
            document.querySelector("body")?.setAttribute("class", "dark_theme");
        } else {
            document
                .querySelector("body")
                ?.setAttribute("class", "light_theme");
        }
    }

    return (
        <header>
            <div className="header_container">
                <div className="tag">
                    <a href="#Home">
                        <h3>Yonatan Afewerk</h3>
                    </a>
                </div>
                <nav className="hide_mobile">
                    <li>
                        <a href="#">Works</a>
                    </li>
                    <li>
                        <a href="#">Posts</a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Yehonatal/portfolio_v2"
                            target="_blank"
                        >
                            <GithubOutlined />
                            Source
                        </a>
                    </li>
                </nav>
                <div className="theme_switch">
                    <div className="switch" onClick={changeTheme}>
                        <FaCloudMoon />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
