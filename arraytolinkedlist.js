class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
function arrayToLinkedList(array) {
    if (!array || array.length === 0) {
      return null;
    }
    let head = new Node(array[0]);
    let current = head;
    for (let i = 1; i < array.length; i++) {
      current.next = new Node(array[i]);
      current = current.next;
    }
    return head;
  }
  
  let array=[1,2,3,4,5,6]

  let linkedlist = arrayToLinkedList(array)
  console.log(linkedlist);