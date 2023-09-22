import React from "react";
import Voter from "./Voter";

const Voters = () => {
    return (
        <ul id="voter-list">
            <Voter name={"Ayşe"} vote={1} />
            <Voter name={"Fatma"} vote={2} />
            <Voter name={"Hayriye"} vote={1} />
            <Voter name={"Ahmet"} vote={3} />
            <Voter name={"Mehmet"} vote={1} />
        </ul>
    );
}

export default Voters;