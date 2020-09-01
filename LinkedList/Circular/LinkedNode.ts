/**
 * 单向链表节点
 */

export class LinkedNode<T> {
  element!: T;
  next!: null | LinkedNode<T>;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}
