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
            this.tail.next=node
        }
        this.tail=node
    }
    adfirst(value){
        const node = new Node(value)
        if (!this.head) {
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
    }
    adlast(value){
        const node = new Node(value)
        if(!this.head){
            this.head=node
        }else{
         this.tail.next=node
         this.tail=node
        }
        this.tail=node
    }
    adbefore(value,pos){
        const node = new Node(value)
        if (!this.head) {
            this.head=node
        }else if (this.head.value==pos) {
            node.next=this.head
            this.head=node
        }else{

            let current = this.head
            while (current) {
               if (current.next.value==pos) {
                
                node.next = current.next
                current.next = node
                 return
               }
               current= current.next
            }
        }
    }
    adafter(value,pos){
        const node = new Node(value)
        if (!this.head) {
            this.head=node
        }else if (this.head.value==pos) {
        node.next=this.head.next
            this.head.next=node

        }else{
            let current = this.head
            while (current) {
                if (current.value==pos) {
                    node.next=current.next
                    current.next = node
                }
                current=current.next
            }
        }
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
            let current = this.head
            while (current.next.next) {
                current=current.next
        }
        current.next=null
        this.tail= current
    }
}
deleteafter(pos){
    if(!this.head){
        return null
    }else if (this.head.value==pos) {
        this.head.next=this.head.next.next
        
    }else{
        let current = this.head
        while (current) {
            if (current.value==pos) {
                current.next=current.next.next
            }
        current=current.next
        }
    }
}

deletepos(pos){

    if (!this.head) {
        return null
    }else if (this.head.value==pos) {
        this.head=this.head.next
    }else{
        let current = this.head
        while (current.next) {
           if (current.next.value==pos) {
            current.next=current.next.next
           }
           current=current.next
        }
    }
}
todecimal(){
let current=this.head
let result=0
while (current) {

    result=result*2+current.value
    current=current.next
    
}
return result
}
toArray(){
    let current = this.head
    let array=[]
    while (current) {
        array.push(current.value)
        current=current.next
    }
    return array
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

list.adnode(1)
list.adnode(0)
list.adnode(1)
list.adnode(0)
list.adnode(1)
// list.adfirst(0)
// list.adbefore(3,5)
// list.deletefirst()
// list.deletelast()
// list.deleteafter(1)
list.deletepos(4) 
let arr = list.toArray()
console.log(arr);

let result=list.todecimal()
console.log(result);
// list.adafter(7,1)
// list.adlast(10)
list.print()


