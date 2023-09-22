import React from "react";

const Voter = (props) => {

    // DOM
    let votes = document.querySelectorAll(".vote")
    let vs = document.querySelectorAll(".vote span");

    let voters = document.querySelectorAll(".voter-name");

    let listOfVoters = [];

    voters.forEach(voter => {
        listOfVoters.push(voter.innerText);
    });

    let secretVoting = document.querySelector("#secret-voting");
    let anonVoting = document.querySelector("#anon-voting");

    secretVoting.addEventListener("click", () => {
        secretVoting.classList.toggle("bi-eye-fill");
        secretVoting.classList.toggle("bi-eye-slash-fill");
        votes.forEach(vote => vote.classList.toggle("face-down"));
        vs.forEach(v => v.classList.toggle("hidden"));
    });

    anonVoting.addEventListener("click", () => {
        if(anonVoting.classList.contains("bi-person-fill")) {
            let ctr = 1;
            voters.forEach(voter => {
                voter.innerText = "Anonymous Voter #" + ctr;
                ctr++;
            });
        }
        else {
            let ctr = 0;
            voters.forEach(voter => {
                voter.innerText = listOfVoters[ctr];
                ctr++;
            });
        }
        anonVoting.classList.toggle("bi-person-fill");
        anonVoting.classList.toggle("bi-incognito");
        // voters.forEach(voter => voter.classList.toggle("face-down"));

        voters.forEach(voter => voter.classList.toggle("selected"));
    });

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