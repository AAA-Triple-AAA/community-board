import React from "react";
import "./Card.css";

const Card = () => {
    return (
        <div className="card">
            <div className="img-container">
                <img src="" alt="" />
            </div>
            <h5 className="card-name">NAME</h5>
            <h6 className="card-category">CATEGORY</h6>
            <button className="link-button">LINK</button>
        </div>
    );
};

export default Card;
