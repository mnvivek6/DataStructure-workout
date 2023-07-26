class Node {
    constructor(value){
        this.value= value
        this.next= null
    }
}

class linkedlist{
    constructor(){

        this.head=null
        this.tail=null
        this.size=0
       
    }
    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    prepend(value){

        const node = new Node (value)
        if (this.isEmpty()) {
            this.head = node
        }else{
            node.next = this.head
            this.head= node
        }
        this.size++
    }
    print(){
        if (this.isEmpty()) {
            console.log("list is empty ");
        }else{
            let curr = this.head
            let listvalues= ''
            while(curr){
                listvalues += `${curr.value} `
                curr= curr.next         
            }
            console.log(listvalues);
        }
    }
}
const list= new linkedlist()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
list.prepend(40)
// list.prepend(50)
list.print()