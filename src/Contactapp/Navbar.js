import React from 'react';
import{Link} from 'react-router-dom'
let Navbar=()=>{
    return(<>
    <div>
        <nav className='navbar navabr  bg-dark'>
            <Link className='navbar-brand' to="contact">React Hooks -use State</Link>
            <div>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to="contact" className='nav-link'>contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    </>)
} 
export default Navbar
