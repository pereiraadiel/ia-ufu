import { TreeNode, Tree } from "../structs/tree.struct";
import { CLI } from "../utils/cli";

// Busca em largura
export const BreadthSearch = (root: TreeNode) => {
  const queue: Tree = [];
  queue.push(root);

  while (queue.length > 0) {
    const current = queue.shift();

    if (current) {
      CLI.output(current.data);
      queue.push(...current.children);
    }
  }
};
