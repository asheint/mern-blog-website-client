import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
//import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  return (
    
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__logo'>
        <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className="nav__manu">
          <li><Link to="/" className="nav__link">Home</Link></li>
          <li> <Link to="/profile" className="nav__link">Profile</Link></li>
          <li><Link to="/create" className="nav__link">Create Post</Link></li>
          <li><Link to="/authors" className="nav__link">Authors</Link></li>
          <li><Link to="/logout" className="nav__link">Logout</Link></li>
        </ul>
        <button className="nav__troggle-btn"><AiOutlineClose /></button>
      </div>
    </nav>

  )
}

export default Header