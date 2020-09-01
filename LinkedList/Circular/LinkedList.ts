import { LinkedNode } from './LinkedNode'

/**
 * 单链表
 */
export class LinkedList<T> {

  head: LinkedNode<T>;

  constructor(element: T) {
    this.head = new LinkedNode(element);
  }

  find(element: T): LinkedNode<T> {
    let currentNode = this.head;
    while (currentNode.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newElement: T, element: T) {
    const newNode = new LinkedNode(newElement);
    const currentNode = this.find(element);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  dispaly() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }

}
