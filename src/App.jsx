import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";

const App = () => {
    return (
        <div>
            <h1>Python Developer Starter Kit</h1>
            <div className="cardholder">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default App;
