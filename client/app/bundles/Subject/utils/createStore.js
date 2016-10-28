import _ from 'lodash';
import EventEmitter from 'eventemitter2';

const BaseStore = _.extend({}, EventEmitter.prototype, {
  emitChange() {
    this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.off('change', callback);
  },
});

BaseStore.setMaxListeners(20);

const createStore = store => _.extend({}, BaseStore, store);

export default createStore;
