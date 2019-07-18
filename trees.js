class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  hasChildren() {
    return this.children.size > 0;
  }

  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    return this.children.delete(key);
  }

  getDeepChild(keys) {
    const [key, ...rest] = keys;
    const node = this.getChild(key);
    if (!node || rest.length === 0) {
      return node;
    }
    return node.getDeepChild(rest);
  }

  getChildren() {
    return [...this.children.values()];;
  }
}

export default Tree;
