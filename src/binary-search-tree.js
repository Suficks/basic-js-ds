const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootValue = null;

  root() {
    return this.rootValue
  }

  add(data) {
    const newNode = new Node(data)
    if (!this.rootValue) {
      this.rootValue = newNode;
    }
    else {
      this.insertNode(this.rootValue, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  has(data, node = this.rootValue) {
    if (node === null) {
      return false;
    }
    if (data < node.data) {
      return this.has(data, node.left)
    }
    else if (data > node.data) {
      return this.has(data, node.right)
    }
    else return true
  }

  find(data, node = this.rootValue) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      return this.find(data, node.left)
    }
    else if (data > node.data) {
      return this.find(data, node.right)
    }
    else return node
  }

  remove(data, node = this.rootValue) {
    if (node === null) {
      return node;
    } else if (data < node.data) {
      node.left = this.remove(data, node.left);
      return node
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
      return node
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }
      if (!node.left && !node.right) {
        return null;
      }
      else {
        const rightMin = this.min(node.right);
        node.data = rightMin;
        node.right = this.remove(rightMin, node.right);
      }
      return node
    }
  }

  min(node = this.rootValue) {
    if (node === null) {
      return null;
    } else if (node.left === null) {
      return node.data
    } else {
      return this.min(node.left)
    }
  }

  max(node = this.rootValue) {
    if (node === null) {
      return null;
    } else if (node.right === null) {
      return node.data
    } else {
      return this.max(node.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};