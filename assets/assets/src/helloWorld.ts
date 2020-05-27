import { _decorator, Component, LabelComponent } from 'cc';
import store from './store/store';

const { ccclass, property } = _decorator;

@ccclass('helloWorld')
@mm.Observer
export class helloWorld extends Component {
  @property(LabelComponent)
  lb_score: LabelComponent = null;

  start() {
    // Your initialization goes here.
    mm.mobx.reaction(
      () => store.countStore.count,
      result => {
        console.log('mylog-----', 'mm.mobx.reaction', result);
      },
      { fireImmediately: true }
    );
  }

  onLoad() {
    console.log('mylog-----', 'onLoad');
  }

  componentDidMount() {
    console.log('mylog-----', 'componentDidMount');
  }

  @mm.react
  renderLabel() {
    this.lb_score.string = store.countStore.count.toString();
  }
  @mm.reaction(() => store.countStore.count, { fireImmediately: true })
  reactionCount(res) {
    console.log('mylog-----', '@mm.reaction', res);
  }
}
