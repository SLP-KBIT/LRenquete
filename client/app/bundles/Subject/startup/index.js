import 'reset.css/reset.css'
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';

import React from 'react';
import ReactOnRails from 'react-on-rails';
import SubjectContainer from '../containers/SubjectContainer';

const Subject = (props) => (
  <SubjectContainer />
);

ReactOnRails.register({ Subject });
