import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 800) {
      setIsNavShowing(true);
    } else {
      setIsNavShowing(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__logo' onClick={closeNavHandler}>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        {isNavShowing && (
          <ul className="nav__menu">
            <li><Link to="/" onClick={closeNavHandler} className="nav__link">Home</Link></li>
            <li><Link to="/profile" onClick={closeNavHandler} className="nav__link">Profile</Link></li>
            <li><Link to="/create" onClick={closeNavHandler} className="nav__link">Create Post</Link></li>
            <li><Link to="/authors" onClick={closeNavHandler} className="nav__link">Authors</Link></li>
            <li><Link to="/logout" onClick={closeNavHandler} className="nav__link">Logout</Link></li>
          </ul>
        )}
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prevState => !prevState)}>
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
