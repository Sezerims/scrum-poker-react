import React from "react";
import Voter from "./Voter";
import voters from "../voters";

const Voters = () => {
    return (
        <ul id="voter-list">
            <Voter name={voters[0]} vote={1} />
            <Voter name={voters[1]} vote={2} />
            <Voter name={voters[2]} vote={1} />
            <Voter name={voters[3]} vote={3} />
            <Voter name={voters[4]} vote={1} />
        </ul>
    );
}

export default Voters;