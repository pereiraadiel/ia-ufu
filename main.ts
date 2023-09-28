import { BreadthSearch } from "./algorithms/breadth.algorithm";
import { DepthSearch } from "./algorithms/depth.algorithm";
import { TreeNode } from "./structs/tree.struct";
import { CLI } from "./utils/cli";

const tree = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);

tree.addChild(node2);
tree.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);
node3.addChild(node6);

// const nome = CLI.input("Olá, qual seu nome? ");
// CLI.output(`Olá ${nome}!`);

console.log(`Árvore: `);
tree.print();

console.time("Largura");
BreadthSearch(tree);
console.timeEnd("Largura");

console.time("Profundidade");
DepthSearch(tree);
console.timeEnd("Profundidade");
