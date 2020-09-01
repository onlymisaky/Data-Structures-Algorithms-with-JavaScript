import { LinkedNode } from './LinkedNode'

/**
 * 双向链表
 */
export class LinkedList<T> {

  head: LinkedNode<T>;

  constructor(element: T) {
    this.head = new LinkedNode(element);
  }

  find(element: T): LinkedNode<T> {
    // todo
  }

  insert(newElement: T, element: T) {
    // todo
  }

  dispaly() {
    let currentNode = this.head;
    console.log('-------dispaly start-------');
    // todo
    console.log('-------dispaly end-------');
  }

}
