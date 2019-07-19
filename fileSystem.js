import path from 'path';
import Tree from '/trees';

const getPathParts = filepath => filepath.split(path.sep).filter(e => e !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  isDirectory(filepath) {
    const current = this.findNode(filepath);
    return !!current && current.getMeta().type === 'dir';
  }

  isFile(filepath) {
    const current = this.findNode(filepath);
    return !!current && current.getMeta().type === 'file';
  }

  mkdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    if (!this.isDirectory(dir)) {
      return false;
    }
    const parent = this.findNode(dir);
    return parent.addChild(base, { type: 'dir' });
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    if (!this.isDirectory(dir)) {
      return false;
    }
    const parent = this.findNode(dir);
    return parent.addChild(base, { type: 'file' });
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
