import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

export default function Header() {


    return (
        <div className="Header">
            <NavLink to="/home" className="shimmer">Home</NavLink>
            <NavLink to="/calendar" className="shimmer">Events</NavLink>
            <NavLink to="/gallery" className="shimmer">Gallery</NavLink>
            <NavLink to="/about" className="shimmer">About</NavLink>
        </div>
    )
}