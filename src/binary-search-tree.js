const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
      this.root = null;
  }
  root() {
      return this.root;
  }
  add(data) {
      this.root = addWithin(this.root, data);
      function addWithin(node, data) {
          if (!node) {
              return new Node(data);
          }
          if (node.data === data) {
              return node;
          }
          if (data < node.data) {
              node.left = addWithin(node.left, data)
          } else {
              node.right = addWithin(node.right, data)
          }
          return node;
      }
  }
  has(data) {
      return searchWithin(this.root, data);
      function searchWithin(node, data) {
          if (!node) {
              return false;
          }
          if (node.data === data) {
              return true;
          }
          return data < node.data ?
              searchWithin(node.left, data) :
        
              searchWithin(node.right, data);
          
      }
  }
  find(data) {
      return findNode(this.root, data);
      function findNode(node, data) {
          if (node == null) {
              return null;
          }
          if (data < node.data) {
              return findNode(node.left, data);
          } else if ( data > node.data) {
              return findNode(node.right, data)
          } else {
              return node;
          }
      }
  }
  remove(data) {
      this.root = removeNode(this.root, data);
      function removeNode(node, data) {
          if (!node) {
              return null;
          }
          if (data < node.data) {
              node.left = removeNode(node.left, data);
              return node;
          } else if (data > node.data) {
              node.right = removeNode(node.right, data);
              return node;
          } else {
              if (node.left == null && node.right == null) {
                  node = null;
                  return node;
              } else if (node.left == null) {
                  node = node.right;
                  return node;
              } else if (node.right == null) {
                  node = node.left;
                  return node;
              } else {
                  let minFromRight = node.right;
                  while(minFromRight.left) {
                      minFromRight = minFromRight.left;
                  }
                  node.data = minFromRight.data;
                  node.right = removeNode(node.right, minFromRight.data);
              }
          }
          return node;
      }
  }
  min() {
     let node = this.root;
     if (node) {
      while(node && node.left) {
        node = node.left
      }
      return node.value;
     }
     return null
  }
  max() {
    let node = this.root;
    if (node) {
     while(node && node.right) {
       node = node.right
     }
     return node.value;
    }
    return null
  }
}

module.exports = {
  BinarySearchTree
};