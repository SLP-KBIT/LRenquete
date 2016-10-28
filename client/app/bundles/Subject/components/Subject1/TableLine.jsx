import _ from 'lodash';
import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import autoBind from 'react-autobind';
import moment from 'moment';
import ToggleButton from '../../ui/ToggleButton';

const calcSumByArray = (array) => {
  let sum = 0;
  array.forEach(val => (sum += val));
  return sum;
};

export default class TableLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment(),
      team: '00',
      judge: '00',
      student: '00',
      result: [0, 0, 0, 0, 0, 0],
      advanceResult: [0, 0],
      removed: false,
    };
    autoBind(this);
  }

  handleChangeTime(time) {
    this.setState({ time });
  }

  onRemoveComponent() {
    this.setState({ removed: true });
  }

  onChangeTeam(event) {
    const team = event.target.value;
    this.setState({ team });
  }

  onChangeJudge(event) {
    const judge = event.target.value;
    this.setState({ judge });
  }

  onChangeStudent(event) {
    const student = event.target.value;
    this.setState({ student });
  }

  onClickSection(data, section) {
    const result = this.state.result;
    result[section] = data;
    this.setState({ result });
  }

  onClickAdvance(date, section) {
    const advanceResult = this.state.advanceResult;
    advanceResult[section] = data;
    this.setState({ advanceResult });
  }

  onSubmit() {
  }

  render() {
    const sum = calcSumByArray(this.state.result) * 5;
    const adSum = calcSumByArray(this.state.advanceResult) * 5;
    if (this.state.removed) return null;
    return (
      <tr className="input">
        <td>
          <TimePicker
            className="timepicker"
            showSecond={false}
            style={{ width: '8vw' }}
            format="HH:mm"
            defaultValue={this.state.time}
            onChange={this.state.handleChangeTime}
          />
        </td>
        <td className="input-judge">
          <span>T</span>
          <input
            className="judge"
            onChange={this.state.onChangeJudge}
            value={this.state.judge}
          />
        </td>
        <td className="input-team">
          <span>G</span>
          <input
            className="team"
            onChange={this.state.onChangeTeam}
            value={this.state.team}
          />
        </td>
        <td className="input-student">
          <span>S</span>
          <input
            className="student"
            onChange={this.state.onChangeStudent}
            value={this.state.student}
          />
        </td>
        <td className="input-run-count">
          <span>{this.props.runCount}</span>
        </td>
        <td className="section-v1">
          <ToggleButton
            onClick={data => this.onClickSection(data, 0)}
            defaultIndex={0}
          />
        </td>
        <td className="section-l2">
          <ToggleButton
            onClick={data => this.onClickSection(data, 1)}
            defaultIndex={0}
          />
        </td>
        <td className="section-v2">
          <ToggleButton
            onClick={data => this.onClickSection(data, 2)}
            defaultIndex={0}
          />
        </td>
        <td className="section-c1">
          <ToggleButton
            onClick={data => this.onClickSection(data, 3)}
            defaultIndex={0}
          />
        </td>
        <td className="section-v3">
          <ToggleButton
            onClick={data => this.onClickSection(data, 4)}
            defaultIndex={0}
          />
        </td>
        <td className="section-c2">
          <ToggleButton
            onClick={data => this.onClickSection(data, 5)}
            defaultIndex={0}
          />
        </td>
        <td className="sum">
          {sum}
        </td>
        <td className="empty" />
        <td className="advance-p1">
          <ToggleButton
            onClick={data => this.onClickAdvance(data, 0)}
            defaultIndex={0}
          />
        </td>
        <td className="advance-v0">
          <ToggleButton
            onClick={data => this.onClickAdvance(data, 1)}
            content={['✗', '◯', '◎']}
            defaultIndex={0}
          />
        </td>
        <td className="sum">
          {adSum}
        </td>
        <td className="sum">
          {sum + adSum}
        </td>
        <td className="mark">
          {(() => {
            if ((sum + adSum) >= 30) {
              return <img width="50" height="50" src="/dekita.png" alt="yokudekimasita" />;
            }
            return null;
          })()}
        </td>
        <td className="ui">
          <button className="submit-button">送信</button>
          <button
            className="delete-button"
            onClick={this.onRemoveComponent}
          >削除</button>
        </td>
      </tr>
    );
  }
}
