class Graph:
    def __init__(self, directed=False):
        self.graph = {}
        self.directed = directed
    
    def add_vertex(self, vertex: str) -> None:
        if vertex not in self.graph:
            self.graph[vertex] = []
    
    def add_edge(self, src: str, dest: str) -> None:
        if src not in self.graph or dest not in self.graph:
            raise ValueError("Both vertices must exist in the graph.")
        self.graph[src].append(dest)
        if not self.directed:
            self.graph[dest].append(src)
    
    def remove_edge(self, src: str, dest: str) -> None:
        if src in self.graph and dest in self.graph[src]:
            self.graph[src].remove(dest)
        if not self.directed and dest in self.graph and src in self.graph[dest]:
            self.graph[dest].remove(src)
    
    def remove_vertex(self, vertex: str) -> None:
        if vertex in self.graph:
            # Remove any edges from other vertices to this one
            for adj in list(self.graph):
                if vertex in self.graph[adj]:
                    self.graph[adj].remove(vertex)
            # Remove the vertex entry
            del self.graph[vertex]
    
    def get_adjacent_vertices(self, vertex: str) -> list:
        return self.graph.get(vertex, [])
    
    def __str__(self) -> str:
        return str(self.graph)

    def vertex_exists(self, vertex: str) -> bool:
        """Check if a vertex exists in the graph."""
        return vertex in self.graph

    def dfs(self, start: str, visited=None) -> list:
        """Perform Depth-First Search (DFS) starting from the given vertex."""
        if visited is None:
            visited = set()
        visited.add(start)
        for neighbor in self.graph.get(start, []):
            if neighbor not in visited:
                self.dfs(neighbor, visited)
        return visited

if __name__ == "__main__":
    # Example usage
    g = Graph(directed=True)
    g.add_vertex('A')
    g.add_vertex('B')
    g.add_edge('A', 'B')
    g.add_edge('A', 'C')
    print(g)