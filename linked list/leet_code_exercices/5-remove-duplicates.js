// LL: Remove Duplicates ( ** Interview Question)
// Implement a member function called removeDuplicates() that removes all duplicate nodes from the linked
// list based on their values.
// Note: this linked list class does NOT have a tail which will make this method easier to implement.
//
// Output:
// The function should modify the linked list in-place, removing all nodes with duplicate values.
//
// Constraints:
// You are allowed to use the JavaScript Set data structure to keep track of unique node values.
//
// Example 1:
// Suppose you have a LinkedList object, list, with the following values:
// 1 -> 2 -> 3 -> 2 -> 1 -> 4
//
// After calling the removeDuplicates() function:
// list.removeDuplicates();
// The linked list should now have the following values: 1 -> 2 -> 3 -> 4
//
// Example 2:
// Now suppose you have a LinkedList object, list, with the following values:
// 3 -> 3 -> 3
//
// After calling the removeDuplicates() function:
// list.removeDuplicates();
// The linked list should now have the following value: 3
//
// Remember to update the length.

class Node {
  constructor(value) {
    return {
      value: value,
      next: null,
    };
  }
}

class LL {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  print() {
    console.log(JSON.stringify(this, null, 2));
  }

  push(value) {
    const node = new Node(value);

    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  removeNode(index) {
    console.log("Index to remove", index);
    let a = this.head;
    let b = this.head.next;

    let i = 0;
    while (i < index) {
      if (i === index - 1) {
        a.next = b.next;
        this.length--;
      }
      if (i === this.length - 1) {
        this.tail = b.next;
      }

      a = a.next;
      b = b.next;
      i++;
    }

    this.print();
  }

  // Bad implementation since im iterating the LL for any repeated value
  // removeDuplicates() {
  //   let i = 0;
  //   let currentNode = this.head;
  //   const s = new Set();
  //
  //   while (i < this.length) {
  //     const isValueRepeated = s.has(currentNode.value);
  //     if (!isValueRepeated) {
  //       i++;
  //       s.add(currentNode.value);
  //       currentNode = currentNode.next;
  //       continue;
  //     }
  //
  //     currentNode = currentNode.next;
  //     this.removeNode(i);
  //   }
  // }

  removeDuplicates() {
    let previous = null;
    let current = this.head;
    const s = new Set();

    if (!current) {
      return;
    }

    while (current !== null) {
      const isDuplicated = s.has(current.value);

      if (!isDuplicated) {
        s.add(current.value);
        previous = current;
        current = current.next;
        continue;
      }

      previous.next = current.next;
      this.length--;
      current = current.next;
    }
  }
}

const ll = new LL(1);
ll.push(1);
ll.push(1);
ll.removeDuplicates();
ll.print();
