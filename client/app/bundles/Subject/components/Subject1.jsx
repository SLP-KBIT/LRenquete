import React, { Component } from 'react';
import moment from 'moment';
import autoBind from 'react-autobind';
import TimePicker from 'rc-time-picker'
import DateButton from '../ui/DateButton';
import Header from '../ui/Header';

const disabledHours = () => (
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
);

export default class Subject1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      time: moment('2010-01-01 00:00:00'),
    };
    autoBind(this);
  }

  handleChangeDate(date) {
    this.setState({ date });
  }

  handleChangeTime(time) {
    this.setState({ time });
  }

  render() {
    return (
      <div className="subject1">
        <Header
          date={this.state.date}
          handleChange={(date) => this.handleChangeDate(date)}
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
            </tr>
            <tr className="input">
              <td>
                <TimePicker
                  className="timepicker"
                  style={{ width: '8vw' }}
                  format="mm:ss"
                  showSecond="mm:ss"
                  disabledHours={disabledHours}
                  defautValue={this.state.time}
                  onChange={this.handleChangeTime}
                />
              </td>
              <td>
                <span>T</span>
                <input className="judge" />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
