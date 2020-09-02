import { LinkedList } from "./LinkedList";

const head = { val: 'head' };
const z = { val: 'z' };
const s = { val: 's' };
const q = { val: 'q' };

/**
 * 边界情况
 * 1. find 一个存在的 element
 * 2. remove 一个不存在的 element
 * 3. remove head
 */

/**
 * Test Create
 */
const list = new LinkedList(head);

/**
 * Test find() & insert()
 */
list.insert(z, head);
list.insert(s, z);
list.insert(q, s);
list.dispaly();

/**
 * Test findPrev() & remove()
 */
list.remove(q);
list.dispaly();
list.remove(head);
list.dispaly();
