import { getHasPrefixList } from './stringUtils.js';

export const bindingMethods = (instance, prefix) => {
  const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(instance));
  const bindingMethods = getHasPrefixList(prefix, keys);
  const handlers = {};
  bindingMethods.forEach((name) => {
    handlers[name] = instance[name].bind(instance);
  });
  instance.view.addEvent(handlers);
};
