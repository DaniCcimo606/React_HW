import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    const { logoText } = props;

    return (
        <div className="header">
            <Link to="/" className="logo">
                {logoText}
            </Link>
            <NavLink to="/menu" className="nav-link">Menu</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink>
        </div>
    );
};

export default Header;
