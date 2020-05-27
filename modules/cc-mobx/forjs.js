import { Observer } from './ObserverClass';

export function ObserverJs(arg1, componentClass) {
  if (Array.isArray(arg1)) {
    return (baseClass, componentClass) =>
      Observer(arg1)(baseClass ? baseClass.extend(componentClass) : componentClass);
  }
  let baseClass = arg1;
  return Observer(baseClass ? baseClass.extend(componentClass) : componentClass);
}

export function ObservableStore(Opt) {
  let fun = function() {
    this.ctor && this.ctor(arguments);
  };

  fun.prototype = Opt;

  return fun;
}
