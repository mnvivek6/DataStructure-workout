
class Node{

    constructor(value){
        this.value= value
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
        if (!this.head) {
            this.head=node
        }else{
            this.tail.next= node         
        }
        this.tail=node
    }

   deletefirst(){
    if (!this.head) {
        return null
    }else{

        this.head=this.head.next
    }

   }
   deletelast(){

    if (!this.head) {
        return null
    }else{

        let temp=this.head
        while (temp.next.next) {

            temp=temp.next

            
        }
        temp.next=null
        this.tail=temp
    }

   }

    print(){

        if (!this.head) {
            console.log('list is empty');
        }else{

            let current = this.head
            while (current) {

                console.log(current.value);
                current=current.next
            }
        }
    }
}

const list = new linkedlist()
list.adnode(90)
list.adnode(40)
list.adnode(10)
list.adnode(20)
list.adnode(50)
list.deletelast()
list.deletefirst()
list.print()