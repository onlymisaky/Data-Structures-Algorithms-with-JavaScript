import { LinkedNode } from './LinkedNode'

/**
 * 单向链表
 */
export class LinkedList<T> {

  head: LinkedNode<T>;

  constructor(element: T) {
    this.head = new LinkedNode(element);
  }

  find(element: T): LinkedNode<T> | null {
    let currentNode = this.head;
    while (currentNode && currentNode.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newElement: T, element: T): boolean {
    const currentNode = this.find(element);
    if (currentNode) {
      const newNode = new LinkedNode(newElement);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      return true;
    }
    return false;
  }

  findPrev(element: T): LinkedNode<T> | null {
    let currentNode = this.head;
    if (currentNode.element === element) {
      return null;
    }
    while (currentNode && currentNode.next && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  isHead(element: T): boolean {
    return this.head.element === element;
  }

  remove(element: T): boolean {
    if (this.isHead(element)) {
      if (this.head.next) {
        this.head = this.head.next;
        return true;
      }
      return false;
    }
    const prevNode = this.findPrev(element);
    if (prevNode && prevNode.next) {
      prevNode.next = prevNode.next.next;
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
