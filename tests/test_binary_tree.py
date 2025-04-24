import unittest
from src.python.BinaryTree import BinaryTree

class TestBinaryTree(unittest.TestCase):
    def setUp(self):
        """Set up a new BinaryTree for each test."""
        self.bt = BinaryTree()

    def test_insert_single_node(self):
        """Test inserting a single node."""
        self.bt.insert(10)
        self.assertEqual(self.bt.root.val, 10)

    def test_insert_multiple_nodes(self):
        """Test inserting multiple nodes."""
        nodes = [10, 5, 15, 3, 7, 12, 18]
        for node in nodes:
            self.bt.insert(node)
        
        # Check the root and its children
        self.assertEqual(self.bt.root.val, 10)
        self.assertEqual(self.bt.root.left.val, 5)
        self.assertEqual(self.bt.root.right.val, 15)
        self.assertEqual(self.bt.root.left.left.val, 3)
        self.assertEqual(self.bt.root.left.right.val, 7)
        self.assertEqual(self.bt.root.right.left.val, 12)
        self.assertEqual(self.bt.root.right.right.val, 18)

    def test_insert_duplicate(self):
        """Test inserting a duplicate value raises ValueError."""
        self.bt.insert(10)
        with self.assertRaises(ValueError) as context:
            self.bt.insert(10)
        self.assertEqual(str(context.exception), "Duplicate key insertion is not allowed")

    def test_inorder_traversal(self):
        """Test inorder traversal."""
        nodes = [10, 5, 15, 3, 7, 12, 18]
        for node in nodes:
            self.bt.insert(node)
        
        # Capture the output of inorder traversal
        import io
        import sys
        captured_output = io.StringIO()
        sys.stdout = captured_output
        self.bt.inorder(self.bt.root)
        sys.stdout = sys.__stdout__  # Reset redirect.
        
        # Check the output
        self.assertEqual(captured_output.getvalue().strip(), "3 5 7 10 12 15 18")

    def test_insert_non_integer(self):
        """Test inserting a non-integer value raises ValueError."""
        with self.assertRaises(ValueError) as context:
            self.bt.insert("string")
        self.assertEqual(str(context.exception), "Key must be an integer")

    def test_log_operation(self):
        """Test logging operations."""
        import io
        import sys
        captured_output = io.StringIO()
        sys.stdout = captured_output
        self.bt.log_operation("insert", 10)
        sys.stdout = sys.__stdout__  # Reset redirect.
        self.assertEqual(captured_output.getvalue().strip(), "Operation: insert, Key: 10")

if __name__ == '__main__':
    unittest.main()