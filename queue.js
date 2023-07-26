// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }
// class queue{
//     constructor(){
//         this.front=null
//         this.rear=null
//     }
//     enqueue(value){
//         const node=new Node(value)
//         if(!this.front){
//             this.front=node;
//             this.rear=node
//         }
//         else{
//             this.rear.next=node
//             this.rear=node
//         }
//     }
//     dequeue(){
//         if(!this.front){
//             console.log("empty");
//         }
//         else{
//             this.front=this.front.next
//             if(this.front==null){
//                 this.rear=null
//             }
//         }
//     }
//     print(){
//         if(!this.front){
//             console.log("empty");
//         }
//         else{
//             let temp=this.front
//             while(temp){
//                 console.log(temp.value)
//                 temp=temp.next
//             }
//         }
//     }
// }
// const list =new queue()

// list.enqueue(10)
// list.enqueue(20)
// list.enqueue(30)
// list.enqueue(40)
// list.enqueue(50)
// list.dequeue()
// list.dequeue()
// list.dequeue()
// list.print()

class Node{
    constructor(value){
        this.value = value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.front=null
        this.rear=null
    }
    nq(value){
     const node = new Node(value)
     if (!this.front) {
        this.front=node
        this.rear=node
     }else{
         this.rear.next=node
         this.rear=node
}
    }
    dq(){
        if (!this.front) {
            console.log("empty");
        }else{
            this.front = this.front.next
            if (this.front==null) {
                this.rear=null
            }
        }
    }
    print(){
        if (!this.front) {
           console.log("empty");            
        }else{
            let temp = this.front
            while (temp) {
                console.log(temp.value);
                temp=temp.next
            }
        }
    }
}
const queue = new Queue()

queue.nq(1)
queue.nq(2)
queue.nq(3)
queue.nq(4)
queue.nq(5)
queue.dq()
queue.print()