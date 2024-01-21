/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (!root) return 0;

    const treeHeight = node => {
        let height = 0;
        while (node.left) {
            height++;
            node = node.left;
        }
        return height;
    };

    const exists = (idx, h, node) => {
        let left = 0, right = Math.pow(2, h) - 1;
        for (let i = 0; i < h; i++) {
            let mid = Math.floor((left + right) / 2);
            if (idx <= mid) {
                node = node.left;
                right = mid;
            } else {
                node = node.right;
                left = mid + 1;
            }
        }
        return node !== null;
    };

    const height = treeHeight(root);
    if (height === 0) return 1;

    let left = 0, right = Math.pow(2, height) - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (exists(mid, height, root)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return Math.pow(2, height) - 1 + left;
};