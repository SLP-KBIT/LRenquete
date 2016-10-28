import _ from 'lodash';
import createStore from '../utils/createStore';
import Dispatcher from '../dispatchers/AppDispatcher';

let alertContent = null;

const setAlertContent = (content) => (alertContent = content);

const AlertStore = createStore({
  getAlertContent() {
    return alertContent;
  }
});

AlertStore.dispatchToken = Dispatcher.register((payload) => {
  const action = payload.action;

  switch (action) {
    case 'SHOW_ALERT':
      const content = payload.content;
      setAlertContent(content);
      AlertStore.emitChange();
      break;

    case 'HIDE_ALERT':
      setAlertContent(null);
      AlertStore.emitChange();
      break;

    default:
      // do nothing
  }
});

export default AlertStore;
