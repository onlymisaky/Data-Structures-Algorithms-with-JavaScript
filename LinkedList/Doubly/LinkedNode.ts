/**
 * 双向链表节点
 */

export class LinkedNode<T> {
  prev!: null | LinkedNode<T>;
  element!: T;
  next!: null | LinkedNode<T>;

  constructor(element: T) {
    this.prev = null;
    this.element = element;
    this.next = null;
  }
}
