import React from "react";
import "./Card.css";

const Card = ({ name, category, link, imgRef }) => {
    return (
        <div className="card">
            <div className="img-container">
                <img src={imgRef} alt={imgRef} className="image" />
            </div>
            <h3 className="card-name">{name}</h3>
            <h4 className="card-category">{category}</h4>
            <a href={link} target="_blank" rel="noreferrer noopener">
                <button className="link-button">LINK 🔗</button>
            </a>
        </div>
    );
};

export default Card;
