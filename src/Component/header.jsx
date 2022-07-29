import React from 'react';
import Logo from '../images/logo.png'
const Header = () => {
    return (
        <header className='Header' >
            <div className='logodiv'>
                <img className='logo' src={Logo} alt="Ask&amp;Answer" />
                <h3>Ask&amp;Answer</h3>
            </div>
            <ul>
            <li><button className="Header-btn">Home </button> </li>
            <li><button className="Header-btn">About us</button>   </li>
            <li><button className="Header-btn">Contact Us </button>   </li>
            <li><button className="Header-btn"> Sign in</button>    </li>
            <li><button className="Header-btn fixed-btn">Register </button> </li>
            </ul>
        </header>
        )
   
}
 
export default Header;