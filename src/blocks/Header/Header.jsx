import React from "react";
import './Header.scss';
import Sidebar from "../Sidebar/Sidebar";
import {Route} from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import NeonCC from "../Content-cards/Neon/NeonCC";

const Header = () => {
    return (
        <div className="Header">
            <Sidebar />
        </div>
    );
}

export default Header;