import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "FAQ",
            href: "/faq"
        }
    ];

    return (
        <div className='Nav flex justify-between p-5 bg-neutral-800'>
            <h3 className="logo">Nav</h3>
            <ul className="navLinks flex justify-between">
                {navList.map((link, index) => (
                    <li key={index} className='link'>
                        <Link to={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nav;
