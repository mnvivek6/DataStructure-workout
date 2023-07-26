
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedlist{

    constructor(){
        this.head=null
        this.tail=null
    }
    adnode(value){
        const node = new Node(value)
        if(!this.head){
            this.head=node
        }else{
            this.tail.next=node
        }
        this.tail=node
    }
    adafter(value,pos){
        const node = new Node(value)
        if(!this.head){
            this.head=node
        }else if (this.head.value) {
            
        }
    }
    print(){
        if (!this.head) {
            console.log('list is empty');
        }
        let current= this.head
        while (current) {
            console.log(current.value);
            current=current.next
        }
    }
}

const list=new linkedlist()

list.adnode(1)
list.adnode(2)
list.adnode(3)
list.print()