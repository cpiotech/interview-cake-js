function BinaryTreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(val) {
  this.left = new BinaryTreeNode(val);
  return this.left;
}

BinaryTreeNode.prototype.insertRight = function(val) {
  this.right = new BinaryTreeNode(val);
  return this.right;
}

function balancedBinaryTree(root) {
  if (!root) return false;
  let stack = [];
  let depth = [];
  stack.push([root, 0]);

  while (stack.length !== 0) {
    let item = stack.pop();
    let node = item[0], d = item[1];

    if (!node.left && !node.right) {
      // leaf node
      if (depth.indexOf(d) === -1) {
        depth.push(d);
        if (depth.length > 2 || 
            depth.length === 2 && Math.abs(depth[0] - depth[1]) > 1) {
            return false;
        }
      }
    }
    
    if (node.left) {
      stack.push([node.left, d + 1]);
    }
    if (node.right) {
      stack.push([node.right, d + 1]);
    }
  }
  return true;
}

var a = new BinaryTreeNode('a');
var b = a.insertLeft('b');
var c = a.insertRight('c');
var d = b.insertLeft('d');
var e = b.insertRight('e');
var f = c.insertRight('f');

console.log(balancedBinaryTree(a));