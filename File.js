import Node from './Node';

export default class extends Node {
  constructor(name, body) {
    super(name);
    this.type = 'file';
    this.body = body;
  }
  
  getBody() {
    return this.body;
  }
}
