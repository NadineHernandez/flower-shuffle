import React, { Component } from "react";
import "./reset.css"
import "./style.css";
import { Dahlia, Hydrangea, Peony, Daisy, Carnation, Daffodil, Gardenia, Iris, Lily, Orchid, Rose, Zinnia } from "../List/index.js";

const alreadyClicked = [];

let currentScore = 0;
let justClicked;

function shuffle() {
    var ul = document.querySelector('ul');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
console.log("shuffle now")
};

// handle click event
// compare image value to already clicked array
// if === -1 then increment score else set score to 0
// then shuffle

class Game extends Component {
    state = {
        score: 0
    };

dahliaClick = event => {
    justClicked = "dahlia";
    this.handleClick()
};

peonyClick = event => {
    justClicked = "peony";
    this.handleClick()
};

daisyClick = event => {
    justClicked = "daisy";
    this.handleClick()
};

carnationClick = event => {
    justClicked = "carnation";
    this.handleClick()
};

daffodilClick = event => {
    justClicked = "daffodil";
    this.handleClick()
};

gardeniaClick = event => {
    justClicked = "gardenia";
    this.handleClick()
};

hydrangeaClick = event => {
    justClicked = "hydrangea";
    this.handleClick()
};

irisClick = event => {
    justClicked = "iris";
    this.handleClick()
};

lilyClick = event => {
    justClicked = "lily";
    this.handleClick()
};

orchidClick = event => {
    justClicked = "orchid";
    this.handleClick()
};

roseClick = event => {
    justClicked = "rose";
    this.handleClick()
};

zinniaClick = event => {
    justClicked = "zinnia";
    this.handleClick()
};

handleClick = event => {
    console.log(justClicked + "test")
    if (alreadyClicked.indexOf(justClicked) < 0) {
        currentScore ++;
        this.setState({
            score: currentScore
        });
        alreadyClicked.push(justClicked);
        console.log(alreadyClicked);
    } else {
        currentScore = 0;
        this.setState({
            score: currentScore
        });
        alreadyClicked.length = 0;
    };
    console.log("shuffle time")
    shuffle();
};

render () {
    return(
        <div class="container">
            <h1>Loves Me, Loves Me Not</h1>
            <h3>Click each flower but don't click the same one more than once.</h3>
            <h2>Score: {currentScore}</h2>
            <ul>
                <li>
                    <button onClick={this.dahliaClick}>
                    <Dahlia />
                    </button>
                </li>
                <li>
                    <button onClick={this.peonyClick}>
                    <Peony />
                    </button>
                </li>
                <li>
                    <button onClick={this.daisyClick}>
                    <Daisy />
                    </button>
                </li>
                <li>
                    <button onClick={this.carnationClick}>
                    <Carnation />
                    </button>
                </li>
                <li>
                    <button onClick={this.daffodilClick}>
                    <Daffodil />
                    </button>
                </li>
                <li>
                    <button onClick={this.gardeniaClick}>
                    <Gardenia />
                    </button>
                </li>
                <li>
                    <button onClick={this.hydrangeaClick}>
                    <Hydrangea />
                    </button>
                </li>
                <li>
                    <button onClick={this.irisClick}>
                    <Iris />
                    </button>
                </li>
                <li>
                    <button onClick={this.lilyClick}>
                    <Lily />
                    </button>
                </li>
                <li>
                    <button onClick={this.orchidClick}>
                    <Orchid />
                    </button>
                </li>
                <li>
                    <button onClick={this.roseClick}>
                    <Rose />
                    </button>
                </li>
                <li>
                    <button onClick={this.zinniaClick}>
                    <Zinnia />
                    </button>
                </li>
            </ul>
        </div>
    );
}
}

export default Game;