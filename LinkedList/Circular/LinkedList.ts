import { LinkedNode } from './LinkedNode'

/**
 * 单向链表
 */
export class LinkedList<T> {

  head: LinkedNode<T>;

  constructor(element: T) {
    this.head = new LinkedNode(element);
  }

  find(element: T): LinkedNode<T> {
    let currentNode = this.head;
    while (currentNode && currentNode.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newElement: T, element: T) {
    const currentNode = this.find(element);
    if (currentNode) {
      const newNode = new LinkedNode(newElement);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  findPrev(element: T): LinkedNode<T> {
    let currentNode = this.head;
    while (currentNode && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(element: T) {
    const prevNode = this.findPrev(element);
    if (prevNode) {
      prevNode.next = prevNode.next.next;
    }
  }

  dispaly() {
    let currentNode = this.head;
    console.log('-------dispaly start-------');
    while (currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
    console.log('-------dispaly end-------');
  }

}
