const isMethod = (key, obj) => obj !== 'constructor' && _.isFunction(obj[key]);

const binder = (obj) => {
  const self = obj;
  Object.getOwnPropertyNames(Object.getPrototypeOf(self), key => {
    if (isMethod(key, self)) {
      self[key] = self[key].bind(self);
    }
  });
};

export default binder;
