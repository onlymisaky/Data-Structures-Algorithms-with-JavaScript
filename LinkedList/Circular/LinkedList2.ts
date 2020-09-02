import { LinkedNode } from '../Doubly/LinkedNode';

/**
 * 双向链表
 */
export class LinkedList<T>  {
  head: LinkedNode<T>;

  constructor(element: T) {
    this.head = new LinkedNode(element);
    this.head.next = this.head;
    this.head.prev = this.head;
  }

  isHead(element: T): boolean {
    return this.head.element === element;
  }

  find(element: T): LinkedNode<T> | null {
    let currentNode = this.head;
    while (currentNode && currentNode.element !== element) {
      if (currentNode.next !== this.head) {
        currentNode = currentNode.next;
      } else {
        currentNode = null;
      }
    }
    return null;
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
      return true;
    }
    return false;
  }

  dispaly(): void {
    let currentNode = this.head;
    console.log('>>> dispaly start:');
    while (currentNode) {
      if (currentNode.next !== this.head) {
        console.log(currentNode.element);
        currentNode = currentNode.next;
      } else {
        currentNode = null;
      }
    }
    console.log('>>> dispaly end.\n\r');
  }

}
