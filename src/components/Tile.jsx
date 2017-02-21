import React, { Component } from 'react';

var Tile = React.createClass({
  getInitialState() {
    return {
      isSelected: false,
    }
  },

  _handleClick() {
    if (this.state.isSelected) {
      this.setState({isSelected: false});
      this.props.onClick(this.props.letter, true);
    } else {
      this.setState({isSelected: true});
      this.props.onClick(this.props.letter, false);
    }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.boardCleared === true) {
      this.setState({isSelected: false});
    }
  },

  render() {
    let className;
    if (this.state.isSelected) {
      className = "tile-selected";
    } else {
      className = "tile";
    }
    return (
        <div onClick={this._handleClick} className={className}>
          <div>{this.props.letter}</div>
        </div>
    )
  }
});

export default Tile;
