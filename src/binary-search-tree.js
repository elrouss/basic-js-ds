const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootstock = null;
  }

  root = () => this.rootstock;

  add = (data) => this.rootstock = this._addNode(this.rootstock, data);

  _addNode = (node, data) => {
    if (!node) return new Node(data);
    if (node.data === data) return node;

    data < node.data
      ? node.left = this._addNode(node.left, data)
      : node.right = this._addNode(node.right, data);

    return node;
  }

  has = (data) => {
    const searchNode = (node, data) => {
      if (!node) return false;
      if (node.data === data) return true;

      return data < node.data
        ? searchNode(node.left, data)
        : searchNode(node.right, data);
    }

    return searchNode(this.rootstock, data);
  }

  find = (data) => {
    const searchNode = (node, data) => {
      if (!node) return null;
      if (node.data === data) return node;

      return data < node.data
        ? searchNode(node.left, data)
        : searchNode(node.right, data);
    }

    return searchNode(this.rootstock, data);
  }

  remove = (data) => this.rootstock = this._removeNode(this.rootstock, data);

  _removeNode = (node, data) => {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    }

    if (node.data < data) {
      node.right = this._removeNode(node.right, data);
      return node;
    }

    if (!node.left && !node.right) return null;

    if (!node.left) {
      node = node.right;
      return node;
    }

    if (!node.right) {
      node = node.left;
      return node;
    }

    let minFromRight = node.right;
    while (minFromRight.left) {
      minFromRight = minFromRight.left;
    }

    node.data = minFromRight.data;
    node.right = this._removeNode(node.right, minFromRight.data);

    return node;
  }

  min = () => {
    if (!this.rootstock) return null;

    let node = this.rootstock;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max = () => {
    if (!this.rootstock) return null;

    let node = this.rootstock;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};