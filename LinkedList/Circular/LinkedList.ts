import { LinkedList as DoublyLinkedList } from '../Doubly/LinkedList'
import { LinkedNode } from '../Doubly/LinkedNode';

/**
 * 双向链表
 */
export class LinkedList<T>  {
  length: number;
  head: LinkedNode<T>;

  constructor(element: T) {
    this.head = new LinkedNode(element);
    this.head.next = this.head;
    this.head.prev = this.head;
    this.length = 1;
  }

  find(element: T): LinkedNode<T> | null {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.element === element) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  isHead(element: T): boolean {
    return this.head.element === element;
  }

  insert(newElement: T, element: T): boolean {
    const currentNode = this.find(element);
    if (currentNode) {
      const rawNextNode = currentNode.next;
      const newNode = new LinkedNode(newElement);
      newNode.next = rawNextNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      rawNextNode.prev = newNode;
      this.length++;
      return true;
    }
    return false;
  }


  remove(element: T): boolean {
    if (this.isHead(element) && this.head.next.element === element) {
      return false;
    }

    const currentNode = this.find(element);
    if (currentNode) {
      const rawPrevNode = currentNode.prev;
      const rawNextNode = currentNode.next;
      rawPrevNode.next = rawNextNode;
      rawNextNode.prev = rawPrevNode;
      currentNode.prev = null;
      currentNode.next = null;
      this.length--;
      return true;
    }
    return false;
  }

  dispaly(): void {
    let currentNode = this.head;
    console.log('>>> dispaly start:');
    for (let i = 0; i < this.length; i++) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
    console.log('>>> dispaly end.\n\r');
  }

}
