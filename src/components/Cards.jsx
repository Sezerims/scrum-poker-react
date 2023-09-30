import React from "react";
import Card from "./Card";
import cards from "../cards";

const createCard = (card, index) => {
    return <Card key={index} value={card} />
}

const Cards = () => {
    return (
        <div id="card-list">
            {cards.map(createCard)}
        </div>
    );
}

export default Cards;