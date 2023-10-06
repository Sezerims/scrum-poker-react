import React from "react";

const Custom = () => {
    return (
        <div className="custom-vote">
            <p>🌟 Custom Vote 🌟</p>
            <input type="number"/>
            <div className="button-container">
                <button className="cancel-button">Cancel</button>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    );
}

export default Custom;