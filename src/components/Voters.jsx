import React from "react";
import Voter from "./Voter";
import voters from "../voters";

const createVoter = (voter, index) => {
    return <Voter key={index} name={voter.name} vote={voter.vote} />
}

const Voters = () => {
    return (
        <ul id="voter-list">
            {voters.map(createVoter)}
        </ul>
    );
}

export default Voters;