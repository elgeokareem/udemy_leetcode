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

  pop() {
    let pre;
    let temp = this.head;

    // TODO: add conditionals in case LL is empty or just have one item etc.
    while (temp.next !== null) {
      pre = temp;
      temp = temp.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length -= 1;

    return this;
  }
}

const ll = new LinkedList(1);
ll.push(2);
ll.push(3);
ll.pop();

console.log(JSON.stringify(ll, null, 2));
