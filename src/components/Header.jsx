import React from "react";

const Header = () => {
    return (
        <header>
            <h1>Scrum Poker</h1>

            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a className="nav-link" href="">Create A Room</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Join A Room</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Sign In</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;