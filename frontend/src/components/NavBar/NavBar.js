import React from 'react';

import './NavBar.css';
const NavBar = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-inverse bg-inverse border-bottom border-warning'>
                <button
                    className='navbar-toggler navbar-toggler-right navbar-dark'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon '></span>
                </button>

                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav '>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>
                                Home
                            </a>
                        </li>
                        <li className='nav-item dropdown nav-item active '>
                            <a
                                className='nav-link dropdown-toggle '
                                id='navbarDropdown'
                                role='button'
                                data-toggle='dropdown'
                                aria-haspopup='true'
                                aria-expanded='false'
                            >
                                Gear
                            </a>
                            <div
                                className='dropdown-menu  '
                                aria-labelledby='dropdownMenuButton'
                            >
                                <a
                                    className='dropdown-item'
                                    href='/gear/infantry'
                                >
                                    Infantry
                                </a>
                                <a
                                    className='dropdown-item'
                                    href='/gear/ranged'
                                >
                                    Ranged
                                </a>

                                <a
                                    className='dropdown-item'
                                    href='/gear/cavalry'
                                >
                                    Cavalry
                                </a>
                                <a className='dropdown-item' href='/gear/mixed'>
                                    Mixed
                                </a>
                            </div>
                        </li>
                        <li className='nav-item dropdown '>
                            <a
                                className='nav-link dropdown-toggle'
                                id='navbarDropdown'
                                role='button'
                                data-toggle='dropdown'
                                aria-haspopup='true'
                                aria-expanded='false'
                            >
                                Heroes
                            </a>
                            <div
                                className='dropdown-menu'
                                aria-labelledby='dropdownMenuButton'
                            >
                                <a
                                    className='dropdown-item'
                                    href='/heroes/infantry'
                                >
                                    Infantry
                                </a>
                                <a
                                    className='dropdown-item'
                                    href='/gear/ranged'
                                >
                                    Ranged
                                </a>

                                <a
                                    className='dropdown-item'
                                    href='/gear/cavalry'
                                >
                                    Cavalry
                                </a>
                                <a className='dropdown-item' href='/gear/mixed'>
                                    Mixed
                                </a>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='grid'>
                                Familiars
                            </a>
                        </li>
                        <li className='nav-item dropdown ' id='activeY'>
                            <a
                                className='nav-link dropdown-toggle'
                                href='#'
                                id='navbarDropdown'
                                role='button'
                                data-toggle='dropdown'
                                aria-haspopup='true'
                                aria-expanded='false'
                            >
                                Talents
                            </a>
                            <div
                                className='dropdown-menu'
                                aria-labelledby='navbarDropdown'
                            >
                                <a className='dropdown-item' href='#'>
                                    Action
                                </a>
                                <a className='dropdown-item' href='#'>
                                    Another action
                                </a>
                                <div className='dropdown-divider'></div>
                                <a className='dropdown-item' href='#'>
                                    Something else here
                                </a>
                            </div>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='grid'>
                                Battle Strategies
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link disabled' href='#'>
                                Disabled
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default NavBar;
