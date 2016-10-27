import React, { Component } from 'react';
import Subject1 from '../components/Subject1';

export default class SubjectContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="subject-container">
        <Subject1 />
      </div>
    );
  }
}
