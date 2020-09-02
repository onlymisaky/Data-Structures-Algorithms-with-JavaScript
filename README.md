# 数据结构与算法 JavaScript 描述

## 链表(LinkedList)

> 链表是由一组节点组成的集合，每个节点都使用一个对象的引用指向它的后继，指向另一个节点的引用叫做链。

不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针或链接)组成。

对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他元素。然而，链表需要使用指针，因此实现链表时需要额外注意。

数组的另一个细节是可以直接访问任何位置的任何元素，而要想访问链表中间的一个元素，需要从起点(表头)开始迭代列表直到找到所需的元素。

### 单向链表(Singly LinkedList)
[Singly LinkedList](https://github.com/onlymisaky/Data-Structures-Algorithms-with-JavaScript/blob/master/LinkedList/Singly/LinkedList.ts)


### 双向链表(Doubly LinkedList)
[Doubly LinkedList](https://github.com/onlymisaky/Data-Structures-Algorithms-with-JavaScript/blob/master/LinkedList/Doubly/LinkedList.ts)

双向链表和普通链表的区别在于，在链表中，一个节点只有链向下一个节点的链接，而在双向链表中，链接是双向的.一个链向下一个元素，另一个链向前一个元素。

双向链表提供了两种迭代列表的方法：从头到尾，或者反过来。我们也可以访问一个特定节点的下一个或前一个元素。在单向链表中，如果迭代列表时错过了要找的元素，就需要回到列表起点，重新开始迭代。这是双向链表的一个优点。

### 循环链表(Circular LinkedList)
[Circular LinkedList](https://github.com/onlymisaky/Data-Structures-Algorithms-with-JavaScript/blob/master/LinkedList/Circular/LinkedList.ts)
[Circular LinkedList2](https://github.com/onlymisaky/Data-Structures-Algorithms-with-JavaScript/blob/master/LinkedList/Circular/LinkedList2.ts)


循环链表可以像链表一样只有单向引用，也可以像双向链表一样有双向引用。循环链表和链表之间唯一的区别在于，最后一个元素指向下一个元素的指针(tail.next)不是引用null，而是指向第一个元素(head)。

双向循环链表有指向head元素的tail.next，和指向tail元素的head.prev。
