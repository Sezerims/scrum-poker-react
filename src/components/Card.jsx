import React from "react";

const Card = (props) => {
    return (
        <button className="card" value={props.value}>{props.value}</button>
    );
}

export default Card;

