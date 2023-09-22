import React from "react";

const Main = () => {
    return (
        <div className="main">
            <section id="section-voting">
                <div className="results">
                    <h2>Voted:</h2>
                    <p><span id="vote-counter"></span>/5</p>
                </div>
                <div id="card-list">
                    <button className="card" value="1">1</button>
                    <button className="card" value="2">2</button>
                    <button className="card" value="3">3</button>
                    <button className="card" value="X">✨</button>
                </div>
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
                <ul id="voter-list">
                    <li className="voter">
                        <div className="vote-container">
                            <p className="voter-name">Ayşe</p>
                            <div className="vote"><span>1</span></div>
                        </div>
                    </li>
                    <li className="voter">
                        <div className="vote-container">
                            <p className="voter-name">Fatma</p>
                            <div className="vote"><span>2</span></div>
                        </div>
                    </li>
                    <li className="voter">
                        <div className="vote-container">
                            <p className="voter-name">Hayriye</p>
                            <div className="vote"><span>1</span></div>
                        </div>
                    </li>
                    <li className="voter">
                        <div className="vote-container">
                            <p className="voter-name">Ahmet</p>
                            <div className="vote"><span>3</span></div>
                        </div>
                    </li>
                    <li className="voter">
                        <div className="vote-container">
                            <p className="voter-name">Mehmet</p>
                            <div className="vote"><span>1</span></div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Main;