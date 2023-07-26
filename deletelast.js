
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

        let node = new Node(value)
        if(!this.head){
            this.head= node
        }else{
            this.tail.next= node 
        }
        this.tail=node
    }
   deletelast(){

    if (!this.head) {
         return null        
    }else{

        let temp = this.head
        while (temp.next.next) {
            
            temp= temp.next
           
        }
        temp.next=null
        this.tail=temp
    }
   }

    print(){
        let current = this.head
        if (!this.head) {
            console.log('list empty');
        }else{

          
            while (current) {
                console.log(current.value);
                current=current.next
            }
        }
    }
}

const list = new linkedlist()

list.adnode(50)
list.adnode(60)
list.adnode(70)
list.adnode(80)
list.adnode(90)
list.adnode(100)
list.deletelast()
list.print()