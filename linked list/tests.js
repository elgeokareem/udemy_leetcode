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
      this.length = null;
      return;
    }

    const newNode = new Node(value);

    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  /**
   * El push debe hacer que el tail apunte al nuevo nodo.
   */
  push(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

const ll = new LinkedList(7);
console.log(ll.push(1));
