
class Node{

    constructor(value){
        this.value = value
        this.next= null
    }
}
class linkedlist{
    constructor(){
        this.head = null
        this.tail= null
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    append(value){
        const node = new Node(value)

        if (this.isEmpty()) {

            this.head = node
            
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    print(){
        if (this.isEmpty()) {
            console.log('list is empty');
        }else{
            let current = this.head

            while (current) {
                if (current) {
                   console.log(current.value);
                    current = current.next
                }
            }
        }
    }
}

const list = new linkedlist()

list.append(40)
list.append(48)
list.append(39)
list.print()