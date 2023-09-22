import React from "react";
import Cards from "./Cards";
import Voters from "./Voters";

const Main = () => {
    return (
        <div className="main">
            <section id="section-voting">
                <div className="results">
                    <h2>Voted:</h2>
                    <p><span id="vote-counter">0</span>/5</p>
                </div>
                <Cards />
            </section>

            <section id="section-results">
                <div className="results">
                    <h2>Average:</h2>
                    <p>1.50</p>
                </div>
                <div className="room-settings">
                    <button id="anon-voting" className="toggle bi bi-person-fill"></button>
                    <button id="secret-voting" className="toggle bi bi-eye-fill"></button>
                </div>
                <Voters />
            </section>
        </div>
    );
}

export default Main;