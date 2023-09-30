import React from "react";
import Card from "./Card";
import cards from "../cards";

const Cards = () => {
    return (
        <div id="card-list">
            <Card value={cards[0]} />
            <Card value={cards[1]} />
            <Card value={cards[2]} />
            <Card value={cards[3]} />
        </div>
    );
}

export default Cards;