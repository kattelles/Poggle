import React, { Component } from 'react';
import CurrentWord from "./CurrentWord";
import Scores from "./Scores";
import TileBoard from "./TileBoard";

var Game = React.createClass({
  getInitialState() {
    return {
      currWord: "",
      submittedWords: [],
      boardCleared: false,
    };
  },

  _handleClick(letter, alreadySelected) {
    this.setState({boardCleared: false});
    if (alreadySelected) {
      let newWord = this.state.currWord.replace(letter, '');
      this.setState({currWord: newWord});
    } else {
     let newWord = this.state.currWord + letter;
     this.setState({currWord: newWord});
    }
  },

  _handleSubmit() {
    let wordToAdd = this.state.currWord;
    let newSubmittedWords = this.state.submittedWords;
    newSubmittedWords.push(wordToAdd);
    this.setState({
      currWord: "",
      submittedWords: newSubmittedWords,
      boardCleared: true,
    });
  },

  render() {
    return (
      <div>
        <div className="game-area">
          <TileBoard
            boardCleared={this.state.boardCleared}
            handleClick={this._handleClick}/>
          <CurrentWord currWord={this.state.currWord}/>
          <div onClick={this._handleSubmit} className="button">
            <div>Submit Word</div>
          </div>
        </div>
        <Scores submittedWords={this.state.submittedWords}/>
      </div>
    );
  }
});

export default Game;
