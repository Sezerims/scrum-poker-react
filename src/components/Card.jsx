import React from "react";

const Card = (props) => {

    // DOM
    let cards = document.querySelectorAll(".card");
    let isSelected = false;
    let vote;

    cards.forEach(card => card.addEventListener("click", () => {
        let voteCounter = 0;
        isSelected = card.classList.contains("selected");
        cards.forEach(card => card.classList.remove("selected"));
        if(isSelected) {
            card.classList.remove("selected");
            vote = null;
        }
        else {
            card.classList.add("selected");
            vote = card.value;
            voteCounter ++;
        }
        console.log("Current vote: " + vote);
        document.querySelector("#vote-counter").innerText = voteCounter;
    }));

    return (
        <button className="card" value={props.value}>{props.value}</button>
    );
}

export default Card;

