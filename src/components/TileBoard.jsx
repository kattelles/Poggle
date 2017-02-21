import React, { Component } from 'react';
import Tile from "./Tile";

const dice = [ "aaafrs", "aaeeee", "aafirs", "adennn", "aeeeem", "aeegmu",
                "aegmnn", "afirsy", "bjkqxz", "ccenst", "ceiilt", "ceilpt",
                "ceipst", "ddhnot", "dhhlor", "dhlnor", "dhlnor", "eiiitt",
                "emottt", "ensssu", "fiprsy", "gorrvw", "iprrry", "nootuw",
                "ooottu"];

var TileBoard = React.createClass({
  getInitialState() {
    let randomizedLetters = this._randomizeDice();
    return {
      letters: randomizedLetters,
    };
  },

  _randomizeDice() {
    let randomizedLetters = [];
    dice.forEach((die) => {
      let index = Math.floor(Math.random() * (6 - 0));
      let letter = die[index];
      if (letter === "q") {
        randomizedLetters.push("qu");
      } else {
        randomizedLetters.push(letter);
      }
    });
    return randomizedLetters;
  },

  render() {
    let letters = this.state["letters"];
    let idx = 0;
    let rows = [];
    while (rows.length < 5) {
      let currRow = [];
      while (currRow.length < 5) {
        let letter = letters[idx];
        currRow.push(<Tile
          onClick={this.props.handleClick}
          key={idx + currRow.length}
          boardCleared={this.props.boardCleared}
          letter={letter}/>);
        idx += 1;
      }
      rows.push(<div key={idx} className="row">{currRow}</div>);
    };
    return (
      <div className="blue-area">
        {rows}
      </div>
    );
  }
});

export default TileBoard;
