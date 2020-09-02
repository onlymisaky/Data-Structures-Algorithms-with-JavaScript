import { LinkedList } from './LinkedList';
import { head, z, s, q } from '../Data'

/**
 * 边界情况
 * 1. find 一个不存在的 element
 * 2. insert 在最后追加
 * 3. remove 一个不存在的 element
 * 4. remove head
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
list.insert({ val: '1' }, { val: '2' });
list.dispaly();

/**
 * Test remove()
 */
list.remove(q);
list.dispaly();
list.remove(z);
list.dispaly();
list.remove(head);
list.dispaly();
