export class Node<T> {
  value: T; // Value of the node
  next: Node<T> | null; // Reference to the next node
  prev: Node<T> | null; // Reference to the previous node

  constructor(value: T) {
    if (value === undefined) {
      throw new Error('Value cannot be undefined');
    }

    this.value = value;
    this.next = null; // Initialize next as null
    this.prev = null; // Initialize prev as null
  }
}
