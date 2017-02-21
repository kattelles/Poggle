import React, { Component } from 'react';

var Scores = React.createClass({
  getInitialState() {
    let words = this.props.submittedWords;
    return {
      words: words,
      totalScore: 0,
      scores: [],
    };
  },

  componentWillReceiveProps(nextProps) {
    let newWords = nextProps.submittedWords;
    this._calculateWordScores(newWords);
  },

  _calculateWordScores(words) {
    let total = 0;
    let scores = [];
    words.forEach((word) => {
      if ((word.length < 8) && (word.length >= 3)) {
        total += word.length - 2;
        scores.push(word.length - 2);
      } else if (word.length >= 8) {
        total += 6;
        scores.push(6);
      } else {
        scores.push(0);
      }
    });
    this.setState({
      totalScore: total,
      scores: scores
    });
  },

  render() {
    let words = this.state.words.map((word) => {
      return (<li className="word">{word}</li>);
    });

    let scores = this.state.scores.map((score) => {
      return (<li className="score">{score}</li>);
    });

    return (
      <div className="score-box">
        <div className="word-list">
          <ul className="words">
            <h2>Word</h2>
            {words}
          </ul>
          <ul className="scores">
            <h2>Score</h2>
            {scores}
          </ul>
        </div>
        <div className="total-score">
          <h2>Total Score</h2>
          <span>{this.state.totalScore}</span>
        </div>
      </div>
    );
  }
});

export default Scores;
