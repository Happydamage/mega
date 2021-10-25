import React from "react";
import "./Sidebar.scss";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
            <div className="Sidebar">
                <div className="sidebar">
                    <NavLink to="/slider">Sliders</NavLink>
                </div>
                <div className="burger">
                    <NavLink to="/burger">Burger</NavLink>
                </div>
                <div className="buttons">
                    <a href="/button">Buttons</a>
                </div>
                <div className="animation">
                    <a href="/animation">Animation</a>
                </div>
                <div className="cards">
                    <a href="/cards">Content-cards</a>
                </div>
            </div>
    );
}

export default Sidebar;