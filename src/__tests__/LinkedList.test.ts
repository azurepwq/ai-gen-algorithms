import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  let ll: LinkedList;

  beforeEach(() => {
    ll = new LinkedList(5); // Create a new LinkedList before each test
  });

  test('should initialize with size 0', () => {
    expect(ll.getSize()).toBe(0);
    expect(ll.isEmpty()).toBe(true);
  });

  test('should enqueue elements', () => {
    expect(ll.enqueue(10)).toBe(true);
    expect(ll.getSize()).toBe(1);
    expect(ll.isEmpty()).toBe(false);

    expect(ll.enqueue(20)).toBe(true);
    expect(ll.getSize()).toBe(2);
  });

  test('should dequeue elements', () => {
    ll.enqueue(10);
    ll.enqueue(20);

    expect(ll.dequeue()).toBe(10);
    expect(ll.getSize()).toBe(1);

    expect(ll.dequeue()).toBe(20);
    expect(ll.getSize()).toBe(0);
    expect(ll.isEmpty()).toBe(true);
  });

  test('should return null when dequeuing from an empty list', () => {
    expect(ll.dequeue()).toBe(null);
  });

  test('should not enqueue when the list is full', () => {
    ll.enqueue(10);
    ll.enqueue(20);
    ll.enqueue(30);
    ll.enqueue(40);
    ll.enqueue(50);

    expect(ll.enqueue(60)).toBe(false); // List is full
    expect(ll.getSize()).toBe(5);
  });
});