const Header = (props) => {
    const { text } = props;

    return (
        <div className="header">
            <a href="/" className="logo">
                {text}
            </a>
        </div>
    );
};

export default Header;
