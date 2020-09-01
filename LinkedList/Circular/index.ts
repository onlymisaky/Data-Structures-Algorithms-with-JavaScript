import { LinkedList } from "./LinkedList";

const list = new LinkedList('head');

list.insert('z', 'head');
list.insert('s', 'z');
list.insert('q', 's');
list.dispaly();

list.remove('q');
list.dispaly();
