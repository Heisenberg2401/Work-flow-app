import React from 'react'
import "./Header.css"
import { Link, useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();

    // const handleAuthenticaton = () => {
    //     if (user) {
    //       auth.signOut();
    //     }
    //   }
const user=sessionStorage.getItem('email')

const signout = e => {
    e.preventDefault();
    sessionStorage.clear()
    window.location.reload()

}

    return (
        
        <nav className="header">
            {user?
                <div className="header__nav">
                <h1>{user}</h1>
                <Link to="/create">
                    <div className="header__favourites">
                        <span className='header__optionLine2'>create workflow</span>
                    </div>
                </Link>
                <button type='submit' onClick={signout} className='login__signInButton'>signout</button>
                </div>
                :( 
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
            </div>)}
        </nav>
    )
}


export default Header