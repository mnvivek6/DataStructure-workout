class Node {

    constructor(value) {

        this.value = value
        this.next = null
    }

}

class linkedlist {

    constructor() {

        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size == 0

    }
    getSize() {
        return this.size
    }
    // 0(1)
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    // o(n)
    append(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head=node
        }else{
            
            let prev = this.head
            while (prev.next) {

                prev= prev.next 
            }
            prev.next= node
        }
        this.size++
    }
    print(){
        if (this.isEmpty()) {
            console.log('list is empty');
        }else{

            let curr= this.head
            while(curr){
                console.log(curr.value);
                curr=curr.next
            }
            
        }
    }
}



const list = new linkedlist()

console.log(list.isEmpty());


list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
console.log(list.getSize());
list.print()