import "babelify/polyfill";
import "angular";
import "angular-new-router";

import {Component, View, AsModule, RouteConfig, bootstrap} from "a1atscript";

@AsModule('myApp', ['ngNewRouter'])
@Component({
  selector: "app"
})
@View({
  template: "<p>Awesome {{app.awesome}}</p>"
})
class App {
  constructor() {
    this.awesome = "Hello!";
  }
}

bootstrap(App);
