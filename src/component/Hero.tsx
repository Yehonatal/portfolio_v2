import "../style/hero.css";
import hero_img from "../assets/image.jpeg";
const Hero = () => {
    return (
        <div className="hero">
            <div className="glassTag">
                <p>Hello, I'm a passionate Developer from Ethiopia!</p>
            </div>

            <div className="intro_card">
                <div className="nameTag">
                    <h1>Yonatan Afewerk</h1>
                    <p>
                        Digital Nomad (Junior full-stack Developer & I write
                        stuff)
                    </p>
                </div>
                <div className="img">
                    <img src={hero_img} alt="image" width="125px" />
                </div>
            </div>

            <div className="intro_desc">
                <h1 className="intro_tag">Work</h1>
                <p>
                    I am an aspiring Full-Stack Developer with a big-picture
                    mindset. My goal is to become a well-rounded Dev, leveraging
                    the latest technologies and methodologies. I understand that
                    the road ahead is long and challenging, but I'm Disciplined
                    to stay afloat and code ahead. Along the way maybe make a
                    difference in people's lives.
                </p>
            </div>
        </div>
    );
};

export default Hero;
