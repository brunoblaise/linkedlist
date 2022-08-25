class Node {
  constructor(elements, next = null) {
    this.elements = elements;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertH(elements) {
    const node = new Node(elements, this.head);

    this.head = node;

    this.size++;
    return node;
  }

  add(elements) {
    let node = new Node(elements);

    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }
  insert(elements, index) {
    if (index < 0 || index > this.size) return -1;
    else {
      let node = new Node(elements);

      let current, prev, it;

      current = this.head;
      it = 0;
      if (index === 0) {
        this.insertH(elements);
      } else {
        while (it < index) {
          it++;
          prev = current;
          current = current.next;
        }
        node.next = current;
        prev.next = node;
      }
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) return -1;
    else {
      let current, prev, it;
      it = 0;
      current = this.head;
      prev = current;
      if (index === 0) {
        this.head = current.next;
      } else {
        while (it < 0) {
          it++;
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
      }
      this.size--;

      return current.elements;
    }
  }

  deleteL(elements) {
    let current = this.head;

    let prev = null;
    while (current != null) {
      if (current.elements === elements) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.elements;
      }
      prev = current;
      current = current.next;
    }

    return -1;
  }

  indexOf(elements) {
    let current = this.head;
    let it = 0;
    while (current != null) {
      if (current.elements === elements) {
        console.log('elements', current.elements);
        return it;
      }

      it++;
      current = current.next;
    }
    return null;
  }
  print() {
    let current = this.head;

    let str = '';
    while (current) {
      str += current.elements + '-->';

      current = current.next;
    }

    return console.log(str);
  }

  get length() {
    return console.log(this.size);
  }
}

let node = new LinkedList();

node.insertH(1);
node.add(2);

node.add(4);

node.add(5);
node.insert(47, 0);

node.deleteL(1);
console.log(node.indexOf(47));
node.removeFrom(0);

node.length

node.print();
