import createAction from '../utils/createAction';

const AlertAction = createAction({
  showAlert(content) {
    this.dispatch({
      action: 'SHOW_ALERT',
      content,
    });
  }, 

  hideAlert() {
    this.dispatch({ action: 'HIDE_ALERT' });
  }
});

export default AlertAction;
