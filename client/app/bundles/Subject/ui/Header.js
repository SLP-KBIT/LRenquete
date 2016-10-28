import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import DateButton from './DateButton';

export default class Header extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    date: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h1>香川大学工学部 情報環境実験 II</h1>
        <DatePicker
          customInput={<DateButton />}
          className="datepicker"
          dateFormat="YYYY年MM月DD日"
          onChange={this.props.handleChange}
          selected={this.props.date}
        />
        <button className="add-button" onClick={this.props.handleAddRunCount}>
          + 記録を増やす
        </button>
      </div>
    );
  }
}


