import {Service, Config} from "a1atscript";

export var froyoSetup = {
  @Config('$httpProvider')
  config($httpProvider) {
    var defaults = $httpProvider.defaults.headers;

    defaults.patch = defaults.patch || {};
    defaults.patch['Content-Type'] = 'application/json';
    defaults.common['Accept'] = 'application/json';

  }
}

// writing a decent data layer sucks.

@Service('Froyo', ['$resource'])
export class Froyo {
  froyos = [];
  idCounter = 3;

  constructor($resource) {
    this.Endpoint = $resource('https://froyoserver.herokuapp.com/yogurts/:id',
     {id: '@id'},
     {update: { method: 'PATCH'}})
  }

  buildNew() {
    return new (this.Endpoint)();
  }

  save(froyo) {
    var promise;
    if (froyo.id) {
      promise = new Promise((resolve) => froyo.$save((saved) => resolve(saved)));
      promise = promise.then((saved) => {
        froyos.push(saved)
        return saved;
      });
    } else {
      promise = new Promise((resolve) => froyo.$update((saved) => resolve(saved)))
    }
    return promise;
  }

  destroy(froyo) {
    var promise = new Promise((resolve) => froyo.$delete(() => resolve() ));
    promise = promise.then(() => {
      var index = this.froyos.indexOf(froyo)
      if (index != -1) {
        this.froyos.splice(index, 1);
      }
    });
    return promise;
  }

  all() {
    var promise = new Promise((resolve) => this.Endpoint.query((froyos) => resolve(froyos)));
    promise = promise.then((froyos) => { this.froyos = froyos; return froyos });
    return promise;
  }

  find(n) {
    var found = this.froyos.find(froyo => froyo.id == n);
    var promise;
    if (found) {
      promise = new Promise((resolve) => resolve(found));
    } else {
      promise = new Promise((resolve) => this.Endpoint.get({id: n}, (froyo) => resolve(froyo)));
      promise = promise.then((froyo) => { this.froyos.push(froyo); return froyo} );
    }
    return promise;
  }
}
