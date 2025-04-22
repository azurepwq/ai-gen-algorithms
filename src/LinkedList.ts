/**
 * A circular queue implementation using an array.  
 * 
 * This class provides a basic implementation of a circular queue using an array.
 * It allows elements to be added to the end and removed from the front of the queue.
 * The queue is circular, meaning that when the end of the array is reached,
 * elements will wrap around to the beginning of the array.
 * 
 */
class LinkedList {
  private array: any[]; // Array to hold the elements of the linked list
  private size: number; // Maximum size of the linked list
  private head: number; // Index of the first element in the linked list
  private tail: number; // Index of the last element in the linked list
  private count: number; // Current number of elements in the linked list

  constructor(size: number) {
    this.size = size; // Set the maximum size
    this.array = new Array(size); // Initialize the array to hold elements
    this.head = -1; // Initialize head index to indicate no elements
    this.tail = -1; // Initialize tail index to indicate no elements
    this.count = 0; // Initialize count of elements to zero
  }

  // Method to add an element to the end of the linked list
  enqueue(element: any): boolean {
    if (this.count >= this.size) return false; // Return false if the list is full
    if (this.tail === -1) this.head = 0; // Set head to 0 if this is the first element

    this.tail = (this.tail + 1) % this.size; // Increment tail index circularly
    this.array[this.tail] = element; // Store the new element at the tail
    this.count++; // Increment the count of elements

    return true; // Return true indicating successful addition
  }

  // Method to remove an element from the front of the linked list
  dequeue(): any {
    if (this.count === 0) return null; // Return null if the list is empty
    const firstElement = this.array[this.head]; // Get the element at the head

    this.array[this.head] = undefined; // Clear the slot at head
    this.head = (this.head + 1) % this.size; // Increment head index circularly
    this.count--; // Decrement the count of elements
    if (this.count === 0) {
      this.head = -1; // Reset head and tail if the list is empty
      this.tail = -1;
    }

    return firstElement; // Return the removed element
  }

  // Method to get the current number of elements in the linked list
  getSize(): number {
    return this.count; // Return the count of elements
  }

  // Method to check if the linked list is empty
  isEmpty(): boolean {
    return this.count === 0; // Return true if count is zero
  }
}

export default LinkedList;