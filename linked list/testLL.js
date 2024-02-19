class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (!value) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return;
    }

    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // Remove last element from LL
  pop() {
    if (this.length === 0) {
      return;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return this.head; // or tail;
    }

    let pre = this.head;
    let temp = this.head.next;

    while (temp.next !== null) {
      pre = pre.next;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    return temp;
  }

  // Add element to start of the LL
  unshift(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;

      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  // Remove first element
  shift() {
    if (this.length === 0) {
      return;
    }

    if (this.length === 1) {
      const removedItem = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;

      return removedItem; // or tail
    }

    const removedNode = this.head;
    this.head = this.head.next;

    return removedNode;
  }

  // get node from index
  get(index) {
    if (index >= this.length) {
      throw new Error("ayy lmao");
    }

    let i = 0;
    let node = this.head;
    while (index < this.length && i !== index) {
      node = node.next;
      i++;
    }

    return node;
  }

  // Setting value given an index
  set(index, value) {
    const node = this.get(index);
    node.value = value;

    return this;
  }
}

const ll1 = new LinkedList();

ll1.push(1);
ll1.push(2);
ll1.push(3);
ll1.push(4);
ll1.push(5);
ll1.set(4, 100);

console.log(JSON.stringify(ll1, null, 2));
