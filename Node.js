import Stats from './Stats';

export default class {
  constructor(name) {
    this.name = name;
  }

  getStats() {
    return new Stats(this.name, this.type);
  }

  getName() {
    return this.name;
  }
}
