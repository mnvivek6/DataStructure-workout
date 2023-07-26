
class Node{

    constructor(value){
        this.value = value;
        this.next= null
    }
}

class list{

    constructor(){

        this.head = null
        this.tail = null
        this.size=0
    }
    addNode(value){
        const node = new Node(value)
        if(this.head == null){
            this.head = node
        }else{
            this.tail.next = node
        }
        this.tail= node
    }
    sum(){
        let temp= this.head
        let sum = 0
        while (temp) {

            sum+= temp.value
            temp = temp.next
            
        }
        return sum
    }
    print(){
        if (!this.head) {

            console.log('list is empty');
            
        }else{

            let curr = this.head
            while(curr){
                console.log(curr.value);
                curr = curr.next;
            }
        }
    }
   
}

const lisi = new list()

lisi.addNode(30)
lisi.addNode(29)
const l=lisi.sum()
console.log(l);
lisi.print() 