

class Node{

    constructor(value){
        this.value = value
        this.left = null
    }
}

class linkedlist{

    constructor(){

        this.head= null
        this.tail= null
    }
    adnode(value){

        const node = new Node(value)

        if (!this.head) {
            
            this.head = node
        }else{

      this.tail.next = node
        
        }
        this.tail=node
      

    }
    adafter(value,pos){
        const node = new Node (value)
        if (!this.head) {
            this.head = node
        }
        else if (this.head.value==pos) {
            node.next = this.head.next
            this.head.next= node
        }else{
            let current = this.head
            while (current) {
                if (current.value == pos) {
                    node.next = current.next
                    current.next = node
                    return      
                }
                current=current.next
            }
        }
    }
    print(){
        if (!this.head) {

            console.log('empty');
            
        }else{
            let temp= this.head
            while (temp) {
                console.log(temp.value);
                temp=temp.next
            }
        }
    }
}


const list = new linkedlist()

list.adnode(10)
list.adnode(20)
list.adnode(30)
list.adnode(40)
list.adnode(50)
list.adafter(60,50)
list.adafter(15,10)
list.adafter(25,20)
list.print()