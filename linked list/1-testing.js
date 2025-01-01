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
}

const ll = new LinkedList();

ll.push(1);
ll.push(2);
ll.push(3);

ll.print();
