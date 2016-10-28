import _ from 'lodash';
import React, { Component } from 'react';
import moment from 'moment';
import autoBind from 'react-autobind';
import DateButton from '../ui/DateButton';
import Header from '../ui/Header';
import TableLine from './Subject1/TableLine';

export default class Subject1 extends Component {;
  constructor(props) {
    super(props);
    const result = {}
    result[0] = [0, 0, 0, 0, 0, 0]
    const advanceResult = {}
    advanceResult[0] = [0, 0]
    this.state = {
      date: moment(),
      runCount: 0,
      result,
      advanceResult,
    };
    autoBind(this);
  }

  handleChangeDate(date) {
    this.setState({ date });
  }

  handleAddRunCount() {
    const runCount = this.state.runCount + 1;
    this.setState({ runCount });
  }

  render() {
    return (
      <div className="subject1">
        <Header
          date={this.state.date}
          handleChange={(date) => this.handleChangeDate(date)}
          handleAddRunCount={this.handleAddRunCount}
        />
        <table>
          <tbody>
            <tr>
              <td colSpan="2" className="team-id">
                <span>K</span><input type="text" />
              </td>
              <td colSpan="3" className="empty" />
              <td colSpan="3" className="subject-id">課題１</td>
              <td colSpan="4" className="subject-name">図形模走</td>
              <td colSpan="6" className="sheet-name">審判シート</td>
              <td className="ui" />
            </tr>
            <tr>
              <td className="gray">時刻</td>
              <td className="gray">審判</td>

              <td className="gray">班</td>
              <td className="gray">学生</td>
              <td className="gray">試走</td>

              <td className="gray">V1</td>
              <td className="gray">L2</td>
              <td className="gray">V2</td>

              <td className="gray">C1</td>
              <td className="gray">V3</td>
              <td className="gray">C2</td>
              <td rowSpan="2" className="gray">小計</td>

              <td rowSpan="2" className="gray">　</td>
              <td className="gray">P1</td>
              <td className="gray">V0</td>
              <td rowSpan="2" className="gray">小計</td>
              <td rowSpan="2" className="gray">得点</td>
              <td rowSpan="2" className="gray">承認</td>
              <td rowSpan="2">　</td>
            </tr>
            <tr>
              <td className="gray">00:00</td>
              <td className="gray">T00</td>

              <td className="gray">G00</td>
              <td className="gray">S00</td>
              <td className="gray">0</td>

              <td className="gray">転向</td>
              <td className="gray">直進</td>
              <td className="gray">転向</td>

              <td className="gray">曲進</td>
              <td className="gray">転向</td>
              <td className="gray">曲進</td>

              <td className="gray">発音</td>
              <td className="gray">停止</td>
            </tr>
            <tr>
              <td className="mini-gray">　</td>
              <td className="mini-gray">　</td>

              <td className="mini-gray">　</td>
              <td className="mini-gray">　</td>
              <td className="mini-gray">　</td>

              <td className="mini-gray">5≦</td>
              <td className="mini-gray">10≦</td>
              <td className="mini-gray">15≦</td>

              <td className="mini-gray">20≦</td>
              <td className="mini-gray">25≦</td>
              <td className="mini-gray">30≦</td>

              <td className="mini-gray">通過</td>
              <td className="mini-gray">　</td>

              <td className="mini-gray"><p>10+<br />5+<br />　</p></td>
              <td className="mini-gray"><p>15+<br />10+<br />5+<br />　</p></td>
              <td className="mini-gray">達成</td>
              <td className="mini-gray">　</td>
              <td className="mini-gray">　</td>
              <td>　</td>
            </tr>
            {(() => (
              _.times(this.state.runCount + 1, (index) => (
                <TableLine
                  key={`table-line-key-${index}`}
                  runCount={index}
                />
              ))
            ))()}
          </tbody>
        </table>
      </div>
    );
  }
}
