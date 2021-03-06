import { LinkedNode } from './LinkedNode'

/**
 * 双向链表
 */
export class LinkedList<T> {

  head: LinkedNode<T>;

  constructor(element: T) {
    this.head = new LinkedNode(element);
  }

  isHead(element: T): boolean {
    return this.head.element === element;
  }

  find(element: T): LinkedNode<T> | null {
    let currentNode = this.head;
    while (currentNode && currentNode.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findLast(): LinkedNode<T> {
    if (!this.head.next) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newElement: T, element: T): boolean {
    const currentNode = this.find(element);
    if (currentNode) {
      const rawNextNode = currentNode.next;
      const newNode = new LinkedNode(newElement);
      newNode.next = rawNextNode;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      if (rawNextNode) {
        rawNextNode.prev = newNode;
      }
      return true;
    }
    return false;
  }

  remove(element: T): boolean {
    if (this.isHead(element) && !this.head.next) {
      return false;
    }

    const currentNode = this.find(element);
    if (currentNode) {
      const rawPrevNode = currentNode.prev;
      const rawNextNode = currentNode.next;
      rawPrevNode.next = rawNextNode;
      if (rawNextNode) {
        rawNextNode.prev = rawPrevNode;
      }
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
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
    console.log('>>> dispaly end.\n\r');
  }

}
