import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';

const Header = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Blog</Link></li>

        <li><Link>My Order</Link></li>
        <li><Link>My wish</Link></li>

        <li><Link>Add Product</Link></li>
        <li><Link>My Product</Link></li>
        <li><Link>My Buyers</Link></li>

        <li><Link>All Sellers</Link></li>
        <li><Link>All Buyers</Link></li>
        <li><Link>Reported Items</Link></li>

    </>
    return (
        <div className=''>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost" to='/'><img src={logo} alt="" className='w-52'/></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-primary" to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;