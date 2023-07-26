
class Node{

    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.tail = null
        this.size= 0
    }
    isEmpty(){
       return this.size==0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            node.next = this.head
            this.head= node
        }
        this.size++
    }
    print(){
        if (this.isEmpty()) {

            console.log('list is empty');
            
        }else{
            let curr= this.head
            while (curr) {

                if (curr) {
                    console.log(curr.value);
                    curr = curr.next
                }
                
            }
        }
    }
}

const list = new linkedlist()
console.log('list is empty',list.isEmpty());
console.log('list is not empty',list.getSize());
list.print()
list.prepend(10)
list.print()
list.prepend(40)
list.prepend(30)
list.print()
