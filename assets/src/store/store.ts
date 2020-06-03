import CountStore from './CountStore';

class Store {
  static instance = null;

  countStore: CountStore;
  constructor() {
    this.countStore = new CountStore();
  }

  static getInstance() {
    return Store.instance || (Store.instance = new Store());
  }
}

const store: Store = Store.getInstance();

export default store;
