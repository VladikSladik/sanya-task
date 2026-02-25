import { Link } from 'react-router-dom';
import HeaderLogo from '../assets/header_logo.svg';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src={HeaderLogo} alt="Rick and Morty Logo" />
        </Link>
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            Characters
          </Link>
        </nav>
      </div>
    </header>
  );
};
