import "../style/hero.css";
import hero_img from "../assets/hero.png";
import { BsArrowBarRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="glassTag">
                <p>
                    Hello, I'm a passionate Developer from Ethiopia! site in
                    development
                </p>
            </div>

            <div className="intro_card">
                <div className="nameTag">
                    <h1>Yonatan Afewerk</h1>
                    <p>Digital Nomad (Developer / Designer / Writer)</p>
                </div>
                <div className="img">
                    <img src={hero_img} alt="image" width="125px" />
                </div>
            </div>

            <div className="intro_desc">
                <h1 className="intro_tag">Work</h1>
                <p>
                    I am an aspiring Full-Stack Developer with a big-picture
                    mindset. My goal is to become a well-rounded Engineer,
                    leveraging the latest technologies and methodologies. I
                    understand that the road ahead is long and challenging, but
                    I'm Disciplined to stay afloat and code ahead. Along the way
                    maybe make a difference in people's lives.
                </p>
                <ul>
                    <li>
                        I’m currently working on{" "}
                        <span>Full stack projects</span>
                    </li>
                    <li>
                        Learning Js frameworks, Data structure and Algorithms
                    </li>
                </ul>
                <br />
                <p>
                    When am not programming, I love music and i write blogs
                    about the experiences am having in my life.
                </p>

                <div className="btn_portfolio">
                    <Link to="/works">My portfolio</Link>
                    <span>
                        <BsArrowBarRight />
                    </span>
                </div>
            </div>
            <div className="intro_bio">
                <h1 className="intro_tag">Bio</h1>
                <div className="stack">
                    <span className="stack_tag">1999</span>
                    Born in Jijiga(ጅጅጋ), Ethiopia.
                </div>
                <div className="stack">
                    <span className="stack_tag">2021</span>
                    Started my Bachelor of Sciences (Software Engineering)
                    program in haramaya university college of computing and
                    informatics.
                </div>
                <div className="stack">
                    <span className="stack_tag">2022</span>
                    When i actual started to enjoy programming and thought of it
                    as a career i would excel in if i give it my all.
                </div>
                <div className="stack">
                    <span className="stack_tag">2023 to present</span>
                    Working as a Freelancer
                </div>
            </div>
            <div className="on_web">
                <h1 className="intro_tag">On the web</h1>
                <ul>
                    <li>
                        <a href="https://github.com/Yehonatal" target="_blank">
                            <AiFillGithub />
                            @Yehonatal
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/yonatan-afewerk/"
                            target="_blank"
                        >
                            <AiFillLinkedin />
                            @Yonatan-Afewerk
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/Jehonatal" target="_blank">
                            <BsTelegram />
                            @Yehonatal
                        </a>
                    </li>
                </ul>
            </div>
            <div className="on_contact">
                <h1 className="intro_tag">Where you can get my content</h1>
                <p>
                    Join me on a behind-the-scene programming journey, Weekly
                    updates on projects, blogs and other content
                </p>

                <div className="btn_contact">
                    <span>
                        <PiTelegramLogoDuotone />
                    </span>
                    <a href="https://t.me/LearningStuff" target="_blank">
                        Obsessed, my telegram account{" "}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
