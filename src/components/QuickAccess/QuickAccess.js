import './QuickAccess.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const QuickAccess = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/home" className="link-style">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="link-style">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/myOrders" className="link-style">My Orders</NavLink>
                </li>
                <li>
                    <NavLink to="/manageOrders" className="link-style">Manage Orders</NavLink>
                </li>
                <li>
                    <NavLink to="/addNewServices" className="link-style">Add a new service</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default QuickAccess;