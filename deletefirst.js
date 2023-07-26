class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class linkedlist{
    constructor(){

        this.head = null
        this.tail= null
    }
    addnode(value){
        const node = new Node(value)
        if (!this.head) {
            this.head = node 
            this.tail =node
            
        }else{
            this.tail.next = node
            node.prev = this.tail
        }
        this.tail= node
    }
    deletefirst(){
        if(!this.head){
            return null
        }else{

            this.head= this.head.next
            this.head.prev= null
        }
    }
    print(){
        if (!this.head) {
            console.log('list is empty');
            
        }else{
            let temp = this.head
            while (temp) {
                console.log(temp.value);
                temp = temp.next
            }
        }
    }

}

const list = new linkedlist()

list.addnode(10)
list.addnode(6)
list.print(list.deletefirst())