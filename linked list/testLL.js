class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (value) {
      const startNode = new Node(value);

      this.head = startNode;
      this.tail = startNode;
      this.length = 1;
      return;
    }

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Empuja un nuevo nodo a la lista
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.head = newNode;
      this.length = 1;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // Saca el ultimo nodo de la lista
  pop() {
    // tenemos que crear 2 variables para guardar la referencia
    // esto es debido a que para llegar al ultimo nodo tenemos que recorrer toda la lista
    if (this.length === 0) {
      return;
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

  // agregar un item de primero
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
}

const ll = new LinkedList(1);
ll.push(2);
ll.push(3);
ll.pop();
ll.unshift(0);

console.log(JSON.stringify(ll, null, 2));
