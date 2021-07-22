import { NavLink } from 'react-router-dom';
import banner from '../img/Banner_Ivan_copy.jpg';

const Navbar: React.FC = () => {
  return (
    <div className="nav-container">
      <div
        className="navbar-logo"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <NavLink to="/">
        <div className="home option">Principal</div>
      </NavLink>
      <NavLink to="/api">
        <div className="API option">API endpoints</div>
      </NavLink>
      <NavLink to="/about">
        <div className="about option">Sobre mi</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
