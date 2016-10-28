import _ from 'lodash';
import Dispatcher from '../dispatchers/AppDispatcher';


const BaseAction = {
  dispatch(payload) {
    Dispatcher.dispatch(payload);
  },
};

const createAction = action => _.assign({}, BaseAction, action);

export default createAction;
