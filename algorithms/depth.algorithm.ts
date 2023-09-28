import { TreeNode, Tree } from "../structs/tree.struct";
import { CLI } from "../utils/cli";

// Busca em profundidade
export const DepthSearch = (root: TreeNode) => {
  const stack: Tree = [];
  stack.push(root);

  while (stack.length > 0) {
    const current = stack.pop();

    if (current) {
      CLI.output(current.data);
      stack.push(...current.children.reverse());
    }
  }
};
