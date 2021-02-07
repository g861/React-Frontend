import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
     const [click,setClick] = useState(false);
     const [button,setButton] = useState(true);

     const handleClick = () => setClick(!click);
     const CloseMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

     window.addEventListener('resize',showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo" onclick={ CloseMobileMenu }>
                    Trvl <i class="fab fa-affiliatetheme"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className= { click ? 'nav-menu active':'nav-menu' }>
                    <li className="nav-item">
                        <Link
                        to="/"
                        className="nav-links"
                        onclick={ CloseMobileMenu }
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/services"
                        className="nav-links"
                        onclick={ CloseMobileMenu }
                        >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/products"
                        className="nav-links"
                        onclick={ CloseMobileMenu }
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/sign-up"
                        className="nav-links-mobile"
                        onclick={ CloseMobileMenu }
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
