const observable = mm.mobx.observable;

export default class CountStore {
  @observable count = 0;

  constructor() {
    setInterval(() => this.count++, 1000);
  }
}
