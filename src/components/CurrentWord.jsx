import React, { Component } from 'react';

var CurrentWord = React.createClass({
  render() {
    return (
      <div className="word-area">
        <div className="current-header">Current Word:</div>
        <div className="current-word">{this.props.currWord}</div>
      </div>
    );
  }
});

export default CurrentWord;
