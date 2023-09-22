import React from "react";

const Voter = (props) => {
    return (
        <li className="voter">
            <div className="vote-container">
                <p className="voter-name">{props.name}</p>
                <div className="vote"><span>{props.vote}</span></div>
            </div>
        </li>
    );
}

export default Voter;