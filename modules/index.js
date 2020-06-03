import * as mobx from 'mobx';
import { Observer, react, reaction } from './cc-mobx/ObserverClass';

const mm = {
    mobx,
    Observer,
    react,
    reaction,
}

let e = window || global;
if (e) {
    e.mm = mm
}