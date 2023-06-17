class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
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

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let pre = this.head;
    let temp = this.head.next;
    while (temp.next !== null) {
      pre = temp;
      temp = temp.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length--;

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // shift
}

const ll = new LinkedList();
ll.push(5);
ll.push(6);
ll.push(7);
ll.unshift(4);
ll.pop();

console.log(JSON.stringify(ll, null, 2));
