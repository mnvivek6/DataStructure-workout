
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
        if (!this.head) {
            this.head=node
            
    }else{
        this.tail.next= node
    }
    this.tail=node
    }
    deletepos(value){
        if(!this.head){
            return null
        }
        else if(this.head.value==value){
            this.head=this.head.next
            this.size--
            return null
        }
        else{
            let prev=this.head
            while(prev.next && prev.next.value !== value){
                if(prev.next){
                    const removeNode = prev.next
                    prev.next = removeNode.next
                    this.size--
                    return value
                }
                return null
            }
        }
    }
    print(){

        if (!this.head) {
            return null
        }else{

            let temp = this.head
            while(temp){
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
list.deletepos(40)

list.print()