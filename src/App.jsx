import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";

const App = () => {
    return (
        <div>
            <h1>Python Developer Starter Kit</h1>
            <div className="cardholder">
                <Card
                    name="Python 3"
                    category="Language"
                    link="https://www.python.org/downloads/"
                />
                <Card
                    name="PyCharm"
                    category="IDE"
                    link="https://www.jetbrains.com/pycharm/"
                />
                <Card
                    name="Git"
                    category="Version Control"
                    link="https://git-scm.com/downloads"
                />
                <Card
                    name="GitHub"
                    category="Code Collaboration Platform"
                    link="https://github.com/"
                />
                <Card
                    name="freeCodeCamp Python Tutorials"
                    category="Tutorial"
                    link="https://youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB&si=7G6HQ6WlesVAPJtn"
                />
                <Card
                    name="Python Crash Course"
                    category="Textbook"
                    link="https://a.co/d/8WrfFxm"
                />
                <Card
                    name="PyTest"
                    category="Testing Framework"
                    link="https://docs.pytest.org/en/stable/"
                />
                <Card
                    name="Jupyter Notebook"
                    category="Interactive Coding Environment"
                    link="https://jupyter.org/"
                />
                <Card
                    name="Flask"
                    category="Web Framework"
                    link="https://flask.palletsprojects.com/en/3.0.x/"
                />
                <Card
                    name="pandas"
                    category="Data Analysis Library"
                    link="https://pandas.pydata.org/"
                />
            </div>
        </div>
    );
};

export default App;
