import {Service} from "a1atscript";

@Service('Froyo', [])
export default class Froyo {
  froyos = [
    {
      id: 1,
      flavor: "Chocolate",
      cost: "$2.00"
    },
    {
      id: 2,
      flavor: "Vanilla",
      cost: "$1.00"
    }
  ];
  idCounter = 3;

  buildNew() {
    return {
      id: null,
      flavor: "",
      cost: ""
    }
  }

  save(froyo) {
    var index = this.froyos.indexOf(testFroyo => testFroyo.id == froyo.id)
    if (index == -1) {
      froyo.id = this.idCounter;
      this.idCounter += 1;
      this.froyos.push(froyo);
    } else {
      this.froyos[index] = froyo;
    }
  }

  destroy(froyo) {
    var index = this.froyos.indexOf(testFroyo => testFroyo.id == froyo.id)
    if (index != -1) {
      this.froyos.splice(index, 1);
    }
  }

  all() {
    return this.froyos;
  }

  find(n) {
    return this.froyos.find(froyo => froyo.id == n);
  }
}
