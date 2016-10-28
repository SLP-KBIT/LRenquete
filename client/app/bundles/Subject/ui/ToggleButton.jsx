import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import autoBind from 'react-autobind';

const isFunc = (obj) => typeof obj === 'function';

export default class ToggleButton extends Component {
  static propTypes = {
    content: PropTypes.array,
    onClick: PropTypes.func,
    defaultIndex: PropTypes.number,
    disable: PropTypes.bool,
  }

  static defaultProps = {
    content: ['✗', '◯'],
    defualtIndex: 0,
    disable: false,
  }

  constructor(props) {
    super(props);
    this.state = { currentIndex: this.props.defaultIndex };
    autoBind(this);
  }

  onClick() {
    if (this.props.disable) return false;
    const index = (this.state.currentIndex + 1) % this.props.content.length;
    this.setState({ currentIndex: index, klass: 'pulse' });
    if (isFunc) this.props.onClick(index);
  }

  render() {
    return (
      <div className="toggle-button" onClick={this.onClick}>
        {this.props.content[this.state.currentIndex]}
      </div>
    );
  }
}
