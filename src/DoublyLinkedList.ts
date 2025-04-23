import { Node } from "./Node";

class DoublyLinkedList<T> {
  private head: Node<T> | null; // Reference to the first node
  private tail: Node<T> | null; // Reference to the last node
  private count: number; // Current number of elements in the list

  constructor() {
      this.head = null; // Initialize head as null
      this.tail = null; // Initialize tail as null
      this.count = 0; // Initialize count to zero
  }

  // Method to add an element to the end of the doubly linked list
  append(value: T): void {
      const newNode = new Node<T>(value); // Create a new node
      if (this.count === 0) {
          this.head = newNode; // Set head if list is empty
          this.tail = newNode; // Set tail if list is empty
      } else {
          this.tail!.next = newNode; // Link the new node to the end
          newNode.prev = this.tail; // Link the previous tail to the new node
          this.tail = newNode; // Update the tail to the new node
      }
      this.count++; // Increment the count of elements
  }

  // Method to remove an element from the end of the doubly linked list
  removeLast(): T | null {
      if (this.count === 0) return null; // Return null if the list is empty
      const value = this.tail!.value; // Get the value of the last node
      this.tail = this.tail!.prev; // Move the tail pointer back
      if (this.tail) {
          this.tail.next = null; // Clear the next reference of the new tail
      } else {
          this.head = null; // If the list is now empty, clear the head
      }
      this.count--; // Decrement the count of elements
      return value; // Return the removed value
  }

  // Method to get the current number of elements in the doubly linked list
  getSize(): number {
      return this.count; // Return the count of elements
  }

  // Method to check if the doubly linked list is empty
  isEmpty(): boolean {
      return this.count === 0; // Return true if count is zero
  }

  find(value: T): T | null {
      let current = this.head;
      // To prevent infinite loop in case of a circular list, limit traversal to at most 'count' nodes
      let traversed = 0;
      while (current && traversed < this.count) {
          if (current.value === value) {
              return current.value; // Return the value if found
          }
          current = current.next;
          traversed++;
      }
      return null; // Return null if not found
  }
}

export default DoublyLinkedList;