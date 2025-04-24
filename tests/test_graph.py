import unittest
from src.python.graph import Graph

class TestGraph(unittest.TestCase):
    def setUp(self):
        """Set up a new graph for testing."""
        self.graph = Graph(directed=True)
        self.graph.add_vertex('A')
        self.graph.add_vertex('B')
        self.graph.add_vertex('C')
        self.graph.add_edge('A', 'B')
        self.graph.add_edge('A', 'C')

    def test_add_vertex(self):
        """Test adding a vertex."""
        self.graph.add_vertex('D')
        self.assertTrue(self.graph.vertex_exists('D'))
        self.assertEqual(len(self.graph.graph), 4)  # Should have 4 vertices now

    def test_add_edge(self):
        """Test adding an edge."""
        self.graph.add_edge('B', 'C')
        self.assertIn('C', self.graph.get_adjacent_vertices('B'))
        self.assertEqual(len(self.graph.graph['B']), 1)  # B should have 1 edge now

    def test_remove_edge(self):
        """Test removing an edge."""
        self.graph.remove_edge('A', 'B')
        self.assertNotIn('B', self.graph.get_adjacent_vertices('A'))
        self.assertEqual(len(self.graph.graph['A']), 1)  # A should have 1 edge left

    def test_remove_vertex(self):
        """Test removing a vertex."""
        self.graph.remove_vertex('A')
        self.assertFalse(self.graph.vertex_exists('A'))
        self.assertEqual(len(self.graph.graph), 2)  # Should have 2 vertices left

    def test_dfs(self):
        """Test depth-first search."""
        visited = self.graph.dfs('A')
        self.assertIn('A', visited)
        self.assertIn('B', visited)
        self.assertIn('C', visited)
        self.assertEqual(len(visited), 3)  # Should visit all vertices

    def test_vertex_exists(self):
        """Test vertex existence check."""
        self.assertTrue(self.graph.vertex_exists('A'))
        self.assertFalse(self.graph.vertex_exists('D'))  # D does not exist

    def test_add_edge_invalid_vertices(self):
        """Test adding an edge with non-existent vertices."""
        with self.assertRaises(ValueError):
            self.graph.add_edge('A', 'D')  # D does not exist
        with self.assertRaises(ValueError):
            self.graph.add_edge('D', 'B')  # D does not exist

if __name__ == '__main__':
    unittest.main()