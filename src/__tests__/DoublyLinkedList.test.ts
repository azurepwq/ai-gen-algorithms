// src/DoublyLinkedList.test.ts
import DoublyLinkedList from '../DoublyLinkedList';

describe('DoublyLinkedList', () => {
    let list: DoublyLinkedList<number>;
    let stringList: DoublyLinkedList<string>;
    let booleanList: DoublyLinkedList<boolean>;

    beforeEach(() => {
        list = new DoublyLinkedList(); // Initialize a new list before each test
        stringList = new DoublyLinkedList(); // Initialize a new list before each test
        booleanList = new DoublyLinkedList(); // Initialize a new list before each test
    });

    test('should start empty', () => {
        expect(list.getSize()).toBe(0);
        expect(list.isEmpty()).toBe(true);
    });

    test('should append elements correctly', () => {
        list.append(1);
        expect(list.getSize()).toBe(1);
        expect(list.isEmpty()).toBe(false);

        list.append(2);
        expect(list.getSize()).toBe(2);
    });

    test('should remove the last element correctly', () => {
        list.append(1);
        list.append(2);
        expect(list.removeLast()).toBe(2);
        expect(list.getSize()).toBe(1);
        expect(list.removeLast()).toBe(1);
        expect(list.getSize()).toBe(0);
        expect(list.isEmpty()).toBe(true);
    });

    test('should return null when removing from an empty list', () => {
        expect(list.removeLast()).toBeNull();
    });

    test('should handle multiple appends and removes', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.getSize()).toBe(3);

        expect(list.removeLast()).toBe(3);
        expect(list.getSize()).toBe(2);
        expect(list.removeLast()).toBe(2);
        expect(list.getSize()).toBe(1);
        expect(list.removeLast()).toBe(1);
        expect(list.getSize()).toBe(0);
    });

    test('should handle edge cases with a single element', () => {
        list.append(1);
        expect(list.getSize()).toBe(1);
        expect(list.removeLast()).toBe(1);
        expect(list.getSize()).toBe(0);
        expect(list.isEmpty()).toBe(true);
    });

    test('should handle multiple removals from an emp list', () => {
    expect(list.removeLast()).toBeNull(); // First removal
    expect(list.removeLast()).toBeNull(); // Second removal
  });

  test('should handle strings', () => {
    stringList.append('hello');
    expect(stringList.getSize()).toBe(1);
    expect(stringList.removeLast()).toBe('hello');
    expect(stringList.getSize()).toBe(0);
    expect(stringList.isEmpty()).toBe(true);
  });

  test('should handle booleans', () => {
    booleanList.append(true);
    expect(booleanList.getSize()).toBe(1);
    expect(booleanList.removeLast()).toBe(true);
    expect(booleanList.getSize()).toBe(0);
    expect(booleanList.isEmpty()).toBe(true);
  });

  test('should find elements correctly', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.find(2)).toBe(2);
    expect(list.find(4)).toBeNull();

    stringList.append('hello');
    stringList.append('world');
    expect(stringList.find('hello')).toBe('hello');
    expect(stringList.find('world')).toBe('world');
    expect(stringList.find('foo')).toBeNull();

    booleanList.append(true);
    booleanList.append(false);
    expect(booleanList.find(true)).toBe(true);
    expect(booleanList.find(false)).toBe(false);
  });
});