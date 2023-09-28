export class TreeNode {
  data: number;
  children: TreeNode[];

  constructor(data: number) {
    this.data = data;
    this.children = [];
  }

  addChild(child: TreeNode): void {
    this.children.push(child);
  }

  print(root: TreeNode = this, level: number = 0): void {
    if (!root) {
      return;
    }

    const indentation = "\t ".repeat(level);
    console.log(indentation + root.data);

    for (const child of root.children) {
      this.print(child, level + 1);
    }
  }
}

export type Tree = TreeNode[];
