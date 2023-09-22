import React from "react";
import Card from "./Card";

const Cards = () => {
    return (
        <div id="card-list">
            <Card value={1} />
            <Card value={2} />
            <Card value={3} />
            <Card value={"✨"} />
        </div>
    );
}

export default Cards;