import _ from 'lodash';
import If from 'ifx';
import axios from 'axios';
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

const isClear = (num) => num >= 30;

export default class TableLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runTime: moment(),
      group: '00',
      teacher: '00',
      student: '00',
      results: [0, 0, 0, 0, 0, 0],
      advanceResults: [0, 0],
      removed: false,
      submitted: false,
    };
    autoBind(this);
  }

  handleChangeTime(runTime) {
    if (this.state.submitted) return false;
    this.setState({ runTime });
  }

  onRemoveComponent() {
    if (this.state.submitted) return false;
    this.setState({ removed: true });
  }

  onChangeGroup(event) {
    if (this.state.submitted) return false;
    const group = event.target.value;
    this.setState({ group });
  }

  onChangeTeacher(event) {
    if (this.state.submitted) return false;
    const teacher = event.target.value;
    this.setState({ teacher });
  }

  onChangeStudent(event) {
    if (this.state.submitted) return false;
    const student = event.target.value;
    this.setState({ student });
  }

  onClickSection(data, section) {
    if (this.state.submitted) return false;
    const results = this.state.results;
    results[section] = data;
    this.setState({ results });
  }

  onClickAdvance(data, section) {
    if (this.state.submitted) return false;
    const advanceResults = this.state.advanceResults;
    advanceResults[section] = data;
    this.setState({ advanceResults });
  }

  onSubmit() {
    if (this.state.submitted) return false;
    axios.post('/api/subjects/1', {
      run_time: this.state.runTime.format(),
      group: this.state.group,
      teacher: this.state.teacher,
      student: this.state.student,
      results: this.state.results,
      advanceResults: this.state.advanceResults,
    }).then(res => {
      this.setState({ submitted: true });
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    const sum = calcSumByArray(this.state.results) * 5;
    const adSum = calcSumByArray(this.state.advanceResults) * 5;
    const resultType = isClear(sum + adSum) ? 'clear' : 'fail';
    const klass =
      If(this.state.submitted === true)(() =>
        If(isClear(sum + adSum))(() => 'input clear')
        .Else(() => 'input fail'))
      .Else(() => 'input');
    if (this.state.removed) return null;
    return (
      <tr className={klass}>
        <td>
          <TimePicker
            className="timepicker"
            showSecond={false}
            style={{ width: '8vw' }}
            format="HH:mm"
            defaultValue={this.state.runTime}
            onChange={this.state.handleChangeTime}
          />
        </td>
        <td className="input-judge">
          <span>T</span>
          <input
            className="judge"
            onChange={this.state.onChangeTeacher}
            value={this.state.teacher}
          />
        </td>
        <td className="input-team">
          <span>G</span>
          <input
            className="team"
            onChange={this.state.onChangeGroup}
            value={this.state.group}
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
            disable={this.state.submitted}
            defaultIndex={0}
          />
        </td>
        <td className="section-l2">
          <ToggleButton
            onClick={data => this.onClickSection(data, 1)}
            disable={this.state.submitted}
            defaultIndex={0}
          />
        </td>
        <td className="section-v2">
          <ToggleButton
            onClick={data => this.onClickSection(data, 2)}
            disable={this.state.submitted}
            defaultIndex={0}
          />
        </td>
        <td className="section-c1">
          <ToggleButton
            onClick={data => this.onClickSection(data, 3)}
            disable={this.state.submitted}
            defaultIndex={0}
          />
        </td>
        <td className="section-v3">
          <ToggleButton
            onClick={data => this.onClickSection(data, 4)}
            disable={this.state.submitted}
            defaultIndex={0}
          />
        </td>
        <td className="section-c2">
          <ToggleButton
            onClick={data => this.onClickSection(data, 5)}
            disable={this.state.submitted}
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
            content={['✗', '◯', '◎']}
            defaultIndex={0}
          />
        </td>
        <td className="advance-v0">
          <ToggleButton
            onClick={data => this.onClickAdvance(data, 1)}
            content={['✗', '△', '◯', '◎']}
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
            if (isClear(sum + adSum)) {
              return <img width="50" height="50" src="/dekita.png" alt="yokudekimasita" />;
            }
            return null;
          })()}
        </td>
        <td className="ui">
          <button
            className="submit-button"
            onClick={this.onSubmit}
          >送信</button>
          <button
            className="delete-button"
            onClick={this.onRemoveComponent}
          >削除</button>
        </td>
      </tr>
    );
  }
}
