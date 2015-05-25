import "babelify/polyfill";
import "angular";
import "angular-new-router";
import "angular-resource";

import {Component, View, AsModule, RouteConfig, bootstrap} from "a1atscript";
import template from "./froyo.html"
import * as Froyo from "./Froyo.js"
import FroyoList from "./froyoList/froyoList.js";
import FroyoDetail from "./froyoDetail/froyoDetail.js";
import FroyoForm from "froyoForm/froyoForm.js";
import FroyoNew from "./froyoNew/froyoNew.js";

// with this descriptor definition

function accessor(target, name, desc) {

  delete desc.writable;
  desc.initializer = function() { return undefined; };
  desc.get = function() {
    return this._born + " Hello!";
  };
  desc.set = function(value) {
    this._born = value;
  };
  return desc;
}

class Person {
  @accessor
  born = Date.now();
}

var p = new Person();
var desc = Object.getOwnPropertyDescriptor(p, 'born')
console.log(desc);

@AsModule('froyo',
  ['ngNewRouter',
  'ngResource',
  FroyoList,
  FroyoDetail,
  FroyoNew,
  FroyoForm,
  Froyo])
@Component({
  selector: "froyo"
})
@View({
  template: template
})
@RouteConfig({
  path: "/", component: FroyoList
})
@RouteConfig({
  path: "/new", component: FroyoNew
})
@RouteConfig({
  path: "/:id", component: FroyoDetail
})
class FroyoApp {
  constructor() {
    this.awesome = "Hello!";
  }
}

bootstrap(FroyoApp);
