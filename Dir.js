import Node from './Node';

export default class extends Node {
  constructor(name) {
    super(name);
    this.type = 'dir';
  }
}
