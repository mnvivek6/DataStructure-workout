class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedlist{
    constructor(){
        this.head=null;
        this.tail=null
    }
    addnode(value){
        const node=new Node(value)
        if(!this.head){
            this.head=node
        }
        else{
            this.tail.next=node
        }
        this.tail=node
    }
    addafter(value,pos){
        const node=new Node(value)
        if(!this.head)
        {
            this.head=node;
        }
        else if(this.head.value==pos){
            node.next=this.head.next
            this.head.next=node
        }
        else{
            let temp=this.head
            while(temp){
                if(temp.value==pos)
                {
                    node.next=temp.next
                    temp.next=node
                    return
                }
                temp=temp.next
            }
        }
    }
    // addlast(value){
    //     const node=new Node(value)
    //     if(!this.head){
    //         this.head=node
    //     }
    //     else{
    //         this.tail.next=node
    //         this.tail=node
    //     }
    // }
   
    deletepos(pos){
        if(!this.head){
            return null
        }
        else if(this.head.value==pos){
            this.head=this.head.next
        }
        else{
            let temp=this.head
            while(temp){
                if(temp.next.value==pos){
                    temp.next=temp.next.next
                }
                temp=temp.next
            }
        }
    }
   
    print(){
        if(!this.head){
            console.log("empty");
        }
        else{
            let temp=this.head
            while(temp){
                if(temp){
                    console.log(temp.value);
                    temp=temp.next
                }
            }
        }
    }
}
const list = new linkedlist()

list.addnode(10)
list.addnode(20)
list.addnode(30)
list.addnode(40)
// list.addbefore(15,20)
// list.addafter(25,20)
// list.addlast(35)
// list.deletefirst()
list.deletepos(30)
// list.deletelast()
list.print()