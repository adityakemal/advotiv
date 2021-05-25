
import React, { Component } from 'react';
import { Menu } from 'react-feather';
import dashboard from '../assets/icons/dashboard.svg'


class SideNav extends Component {
    render() {
        return (
            <div className='sidenav'>
                <ul>
                    <li>
                        <Menu />
                    </li>
                    <li className='active'>
                        <img src={dashboard} alt="menu" />
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideNav;