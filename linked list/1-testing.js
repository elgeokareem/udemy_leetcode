class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // head siempre va de primero (izquierda)
  constructor(value) {
    if (value) {
      this.length = 1;
      this.head = new Node(value);
      this.tail = new Node(value);
      return;
    }

    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  print() {
    console.log(JSON.stringify(this, null, 2));
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  // return poped item
  pop() {
    if (this.length === 0) return;
    if (this.length === 1) {
      this.length--;
      this.head = null;
      this.tail = null;
      return;
    }

    let temp = this.head;
    for (let index = 1; index < this.length - 1; index++) {
      temp = temp.next;
    }

    temp.next = null;
    this.tail = temp;
    this.length--;
  }

  // agergar nodo al principio de la linkedlist
  unshift(value) {
    if (this.length === 0) {
      this.push(value);
      return;
    }

    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  // quitar el primer nodo y devolverlo
  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) this.pop();

    const temp = this.head;
    this.head = this.head.next;
    this.length--;

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    temp.value = value;
  }

  // insert node at given index
  insert(index, value) {
    if (index < 0 || index >= this.length) return undefined;

    let prev = this.head;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      prev = temp;
      temp = temp.next;
    }

    const node = new Node(value);

    node.next = temp;
    prev.next = node;
    this.length++;
  }
}

const ll = new LinkedList();

ll.push(1);
ll.push(2);
ll.push(3);
ll.unshift(0);
ll.shift();
ll.set(1, 5);
ll.insert(1, 4);

ll.print();
