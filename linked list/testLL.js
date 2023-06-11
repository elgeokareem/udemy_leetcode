class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const startNode = new Node(value);

    this.head = startNode;
    this.tail = startNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;

    return this;
  }
}

const ll = new LinkedList(4);
ll.push(5);

console.log(JSON.stringify(ll, null, 2));
