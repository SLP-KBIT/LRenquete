import React, { Component, PropTypes } from 'react';

export default class DateButton extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="date-button"
        onClick={this.props.onClick}
      >{this.props.value}</button>
    );
  }
}

