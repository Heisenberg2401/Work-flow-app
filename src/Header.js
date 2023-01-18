import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"

function Header() {


    // const handleAuthenticaton = () => {
    //     if (user) {
    //       auth.signOut();
    //     }
    //   }

    return (
        
        <nav className="header">
            
            <div className="header__nav">
                <Link to="/Login">
                    <div className="header__favourites">
                        <span className='header__optionLine2'>Login</span>
                    </div>
                </Link>
                <Link to="/Signup">
                    <div className="header__favourites">
                        <span className='header__optionLine2'>Signup</span>
                    </div>
                </Link>
                {/* <Link to="/Login" className="header__link">
                    <Link to={!user && '/login'} style={{ textDecoration: "none", color: "white" }}>
                        <div onClick={handleAuthenticaton} className="header__option">
                            <span className="header__optionLine1">Hello {!user ? 'Guest' : user.email}</span>
                            <span className="header__optionLine2">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                </Link> */}
            </div>
        </nav>
    )
}


export default Header