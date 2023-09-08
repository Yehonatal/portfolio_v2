import { GithubOutlined } from "@ant-design/icons";
import "../style/header.css";
import { FaCloudMoon } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";

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

    function humActions() {
        if (
            document
                .querySelector(".hum_menu_container")
                ?.classList.contains("hide")
        ) {
            document
                .querySelector(".hum_menu_container")
                ?.setAttribute("class", "hum_menu_container");
        } else {
            document
                .querySelector(".hum_menu_container")
                ?.setAttribute("class", "hum_menu_container hide");
        }
    }

    return (
        <header>
            <div className="header_container">
                <div className="tag">
                    <a href="/">
                        <h3>Yonatan Afewerk</h3>
                    </a>
                </div>
                <nav className="hide_mobile">
                    <li>
                        <a href="/Works">Works</a>
                    </li>
                    <li>
                        <a href="/Posts">Posts</a>
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
                {/* Mobile Menu */}
                <nav className="hide_desktop">
                    <div className="hum_menu" onClick={humActions}>
                        <BiMenuAltLeft />
                    </div>
                    <div className="hum_menu_container hide">
                        <li>
                            <a href="/Works">Works</a>
                        </li>
                        <li>
                            <a href="/Posts">Posts</a>
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
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
