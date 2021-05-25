import React, { Component } from 'react';
import profile from '../assets/icons/profile.svg'
import logout from '../assets/icons/logout.png'

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <img className='biglogo' src="https://www.advotics.com/wp-content/uploads/2019/07/advotics-logo-optimize.jpg" alt="logo" />
                    <span>powered by</span>
                    <img className='mini-logo' src='https://www.advotics.com/wp-content/uploads/2019/07/advotics-logo-optimize.jpg' alt="logo" />
                </div>
                <div className="menus">
                    <div className="user">
                        <p>Username</p>
                        <span>Company name</span>
                    </div>
                    <a href="/">
                        <img className='profile' src={profile} alt="profile" />
                    </a>
                    <a href="/">
                        <img className='logout' src={logout} alt="logout" />
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navbar;