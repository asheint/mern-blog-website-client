import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { UserContext } from '../context/UserContext';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800? true : false);
  const { currentUser } = useContext(UserContext);

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
        {currentUser?.id && isNavShowing && 
          <ul className="nav__menu">
            <li><Link to="/profile/sdfsdf" onClick={closeNavHandler} className="nav__link">Profile</Link></li>
            <li><Link to="/create" onClick={closeNavHandler} className="nav__link">Create Post</Link></li>
            <li><Link to="/authors" onClick={closeNavHandler} className="nav__link">Authors</Link></li>
            <li><Link to="/logout" onClick={closeNavHandler} className="nav__link">Logout</Link></li>
          </ul>
        }
        {!currentUser?.id && isNavShowing && 
          <ul className="nav__menu">
            <li><Link to="/login" onClick={closeNavHandler} className="nav__link">Login</Link></li>
            <li><Link to="/authors" onClick={closeNavHandler} className="nav__link">Authors</Link></li>
          </ul>
        }
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prevState => !prevState)}>
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
