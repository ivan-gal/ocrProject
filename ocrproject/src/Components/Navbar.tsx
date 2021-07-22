import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="nav-container">
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
