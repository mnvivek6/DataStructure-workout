
class Node{
    constructor(value){
       this.value=value
       this.next=null
       this.prev=null
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
    toArray(){
        let arr=[]
        let current=this.head
        while (current) {
            arr.push(current.value)
            current=current.next
         
        }
        return arr
    }
    addtofirst(value){
        const node = new Node(value)
        if (!this.head) {
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
    }
    addtolast(value){
        const node = new Node(value)
        if(!this.head){
            this.head=node
        }else{
            this.tail.next=node
            this.tail=node
        }
    }
    addafter(value,pos){
        const node = new Node(value)
        if (!this.head) {
            this.head=node
        }else if (this.head.value== pos) {
            
            node.next=this.head.next
            this.head.next=node
        }else{
            let current = this.head
            while (current) {
                if(current.value==pos){
                   node.next=current.next
                   current.next=node
                }
             current=current.next
            }
            
        }
    }
    print(){

        if (!this.head) {
            console.log('lisst is empty');
        }else{
            let current = this.head
            while (current) {
                console.log(current.value);
                current= current.next
            }
        }
    }
   
}

const list = new linkedlist()
list.adnode(10)
list.adnode(20)
list.adnode(30)
list.adnode(40)
list.addtofirst(1)
list.addtolast(4)
list.addtolast(5)
list.addafter(155555,10)
// list.addtofirst(2)
// list.adnodeto(30,10)
// const result = list.toArray()
// console.log(result);
// list.addValueToPrev(50)
list.print()
