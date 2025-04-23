import { Node } from "../Node";

describe('Node', () => {
  test('should create a new node', () => {
    const node = new Node(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });

  test('should create a new node with a next pointer', () => {
    const node = new Node(1);
    const nextNode = new Node(2);
    node.next = nextNode;
    expect(node.next).toBe(nextNode);
  });

  test('should create a new node with a prev pointer', () => {
    const node = new Node(1);
    const prevNode = new Node(0);
    node.prev = prevNode;
    expect(node.prev).toBe(prevNode);
  });

  test('should create a new node with a next and prev pointer', () => {
    const node = new Node(1);
    const nextNode = new Node(2);
    const prevNode = new Node(0);
    node.next = nextNode;
    node.prev = prevNode;
    expect(node.next).toBe(nextNode);
    expect(node.prev).toBe(prevNode);
  });

  // edge cases
  test('should handle null values for next and prev', () => {
    const node = new Node(1);
    node.next = null;
    node.prev = null;
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });

  test('should create a new node with a string value', () => {
    const node = new Node<string>('test');
    expect(node.value).toBe('test');
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });

  test('should handle undefined value', () => {
    // Use 'any' to bypass TypeScript's type checking for this test
    expect(() => new Node<any>(undefined)).toThrow('Value cannot be undefined');
  });
});

