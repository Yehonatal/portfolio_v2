const Footer = () => {
    const date = new Date();

    return (
        <div>
            <div className="footer_tag">
                © {date.getFullYear()} Yonatan Afewerk Teshome. All Rights
                Reserved.
            </div>
        </div>
    );
};

export default Footer;
