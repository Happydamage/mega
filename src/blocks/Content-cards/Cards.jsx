import React from "react";
import "./Cards.scss";
import NeonCC from "./Neon/NeonCC";
import CrystalCC from "./Crystal/Crystal";


const Cards = () => {
    return (
        <div className="container">
            <NeonCC />
            <CrystalCC />
        </div>
    );
}

export default Cards;

