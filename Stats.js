export default class {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  isFile() {
    return this.type === 'file';
  }

  isDirectory() {
    return this.type === 'dir';
  }
}
