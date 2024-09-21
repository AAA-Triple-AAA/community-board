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
                    imgRef="/images/Python-Symbol.png"
                />
                <Card
                    name="PyCharm"
                    category="IDE"
                    link="https://www.jetbrains.com/pycharm/"
                    imgRef="/images/PyCharm-Icon.png"
                />
                <Card
                    name="Git"
                    category="Version Control"
                    link="https://git-scm.com/downloads"
                    imgRef="/images/Git-Symbol.png"
                />
                <Card
                    name="GitHub"
                    category="Code Collaboration Platform"
                    link="https://github.com/"
                    imgRef="/images/GitHub-Logo.png"
                />
                <Card
                    name="freeCodeCamp Courses"
                    category="Tutorial"
                    link="https://youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB&si=7G6HQ6WlesVAPJtn"
                    imgRef="/images/freeCodeCamp-Thumbnail.png"
                />
                <Card
                    name="Python Crash Course"
                    category="Textbook"
                    link="https://a.co/d/8WrfFxm"
                    imgRef="/images/PythonCrashCourse-Art.png"
                />
                <Card
                    name="PyTest"
                    category="Testing Framework"
                    link="https://docs.pytest.org/en/stable/"
                    imgRef="/images/Pytest-Logo.png"
                />
                <Card
                    name="Jupyter Notebook"
                    category="Interactive Coding Environment"
                    link="https://jupyter.org/"
                    imgRef="/images/Jupyter-Logo.png"
                />
                <Card
                    name="Flask"
                    category="Web Framework"
                    link="https://flask.palletsprojects.com/en/3.0.x/"
                    imgRef="/images/Flask-Logo.png"
                />
                <Card
                    name="pandas"
                    category="Data Analysis Library"
                    link="https://pandas.pydata.org/"
                    imgRef="/images/pandas-Logo.png"
                />
            </div>
        </div>
    );
};

export default App;
