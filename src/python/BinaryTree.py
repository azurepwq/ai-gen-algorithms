class TreeNode:
    def __init__(self, key: int):
        self.left = None
        self.right = None
        self.val = key

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, key: int) -> None:
        if not isinstance(key, int):
            raise ValueError("Key must be an integer")
        
        if self.root is None:
            self.root = TreeNode(key)
        else:
            self._insert(self.root, key)

    def _insert(self, node: TreeNode, key: int) -> None:
        if key < node.val:
            if node.left is None:
                node.left = TreeNode(key)
            else:
                self._insert(node.left, key)
        elif key > node.val:  # Handle duplicates by ignoring them
            if node.right is None:
                node.right = TreeNode(key)
            else:
                self._insert(node.right, key)
        else:
            raise ValueError("Duplicate key insertion is not allowed")

    def inorder(self, node: TreeNode) -> None:
        if node:
            self.inorder(node.left)
            print(node.val, end=' ')
            self.inorder(node.right)

    def __str__(self) -> str:
        values = []
        self._inorder_to_list(self.root, values)
        return "BinaryTree: " + " ".join(map(str, values))

    def __repr__(self) -> str:
        return f"BinaryTree({', '.join(map(str, self._inorder_to_list(self.root, [])))})"

    def _inorder_to_list(self, node: TreeNode, values: list) -> None:
        if node:
            self._inorder_to_list(node.left, values)
            values.append(node.val)
            self._inorder_to_list(node.right, values)

    def delete(self, key: int) -> None:
        # Implementation for deleting a node goes here
        pass

    def log_operation(self, operation: str, key: int) -> None:
        # Implement logging logic here
        print(f"Operation: {operation}, Key: {key}")

# Example usage
bt = BinaryTree()
bt.insert(8)
bt.insert(3)
bt.insert(10)
bt.insert(1)
bt.insert(6)
bt.insert(4)
bt.insert(7)

print("Inorder traversal of the binary tree:")
bt.inorder(bt.root)
print("\n" + str(bt))