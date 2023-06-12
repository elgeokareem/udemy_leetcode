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
    if (this.length === 0) {
      return undefined;
    }

    let pre = this.head;
    let temp = this.head;

    while (temp.next !== null) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
}

const ll = new LinkedList(1);
ll.pop();

console.log(JSON.stringify(ll, null, 2));
