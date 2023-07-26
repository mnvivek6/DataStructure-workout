// class Queue {
//     constructor() {
//       this.list = [];
//     }
  
//     enqueue(value) {
//       this.list.push(value);
//     }
  
//     dequeue() {
//       if (this.isEmpty()) {
//         console.log("Empty");
//       } else {
//         this.list.shift();
//       }
//     }
  
//     print() {
//       if (this.isEmpty()) {
//         console.log("Empty");
//       } else {
//         this.list.forEach((value) => {
//           console.log(value);
//         });
//       }
//     }
  
//     isEmpty() {
//       return this.list.length === 0;
//     }
//   }
  
//   const queueArray = new Queue();


// class queue{
//     constructor(){
//         this.que = []
//     }
//     enqueue(value){
//         this.que.push(value)
//     }
//     dequeue(){
//         this.que.shift()
//     }
//     print(){
//         if (!this.que) {
//             return null
//         }else{

//             this.que.forEach((value)=>{console.log(value);})
//         }
//     }
// }
// const queu= new queue()
// queu.enqueue(1)
// queu.enqueue(1)
// queu.enqueue(1)
// queu.enqueue(1)
// queu.print()



// class Queue {
//     constructor(size) {
//         this.front = -1
//         this.rear = -1
//         this.array = new Array(size)
//     }

//     nq(value) {
       
//         if (this.rear == -1) {
            
//             this.front = 0
//             this.rear = 0
//             this.array[0] = value
//             return
//         }
//         this.rear++
//         this.array[this.rear] = value
//     }

//     dq() {
//         if (this.front == -1) {
//             return 
//         }
//         if (this.front == this.rear) {
//             this.front = -1
//             this.rear = -1
//             return
//         }
//         this.front++
//     }
//     display() {
//         for (let i = this.front; i <= this.rear; i++) {
//             console.log(this.array[i]);

//         }
//     }
// }

// let queue = new Queue(50)

// queue.nq(30)
// queue.nq(80)
// queue.nq(40)
// console.log("before");
// queue.display()
// console.log("after");
// queue.dq()
// queue.display()



// class Queue{
//     constructor(size){
//          this.front=-1
//          this.rear=-1
//          this.array = new Array(size)
//     }
//     nq(value){
//         if (this.rear==-1) {
//             this.front=0
//             this.rear=0
//             this.array[0]=value
//             return
//         }
//         this.rear++
//         this.array[this.rear]=value
//     }
//     dq() {
//              if (this.front == -1) {
//                      return 
//                  }
//                  if (this.front == this.rear) {
//                      this.front = -1
//                      this.rear = -1
//                      return
//                  }
//                  this.front++
//         }
//     display(){
//         if (this.front==-1&&this.rear==-1) {
//             return null
//         }else{
//           for (let i = this.front; i <=this.rear; i++) {
//                console.log(this.array[i]);
               
            
//           }
//         }
//     }
// }

// const queue= new Queue(30)
// queue.nq(10)
// queue.nq(20)
// queue.nq(30)
// queue.nq(40)
// queue.nq(50)
// queue.dq()
// queue.display()


//   class Queue{
//     constructor(size){
//         this.front=-1
//         this.rear=-1
//         this.array= new Array(size)
//     }
//     nq(value){
//         if (this.rear==-1) {
//             this.front=0
//             this.rear=0
//             this.array[0]=value
//             return
//         }
//         this.rear++
//         this.array[this.rear]=value
//     }
//     dq(){
//         if (this.front==-1) {
//             return null
//         }else if (this.front==this.rear) {
//             this.front=-1
//             this.rear=-1
//             return
//         }
//         this.front++
//     }
//     print(){
//         if(this.front==-1&&this.reat==-1){
//             return null
//         }else{
//             for (let i = this.front; i <= this.rear; i++) {
//                  console.log(this.array[i]);
                
//             }
//         }
//     }
//   }
//   const queue = new Queue(50)
//   queue.nq(1)
//   queue.nq(2)
//   queue.nq(3)
//   queue.nq(4)
//   queue.nq(5)
//   queue.dq()
// queue.print()

// class Queue{
//     constructor(size){
//         this.front=-1
//         this.rear=-1
//         this.array= new Array(size)
//     }
//     nq(value){
//     if (this.rear==-1) {
//         this.front=0
//         this.rear=0
//         this.array[this.rear]=value
//         return
//        }
//        this.rear++
//        this.array[this.rear]=value
//     }
//     dq(){
//         if (this.front==-1) {
//             return null
//         }else if (this.front==this.rear) {
//             this.rear=-1
//             this.front=-1
//         }
//         this.front++
//     }
//     print(){
//         if (this.front==-1&&this.rear==-1) {
//             return null
//         }
//         for (let i = this.front; i <=this.rear; i++) {
//             console.log(this.array[i]);
//         }
//     }
// }

// const queue = new Queue(50)
// queue.nq(1)
// queue.nq(2)
// queue.nq(3)
// queue.nq(4)
// queue.dq()
// queue.print()


class Queue{
    constructor(size){
        this.front=-1
        this.rear=-1
        this.array= new Array(size)
    }
    nq(element){
        if (this.rear==-1) {
            this.front=0
            this.rear=0
            this.array[0]=element
            return null
        }
        this.rear++
        this.array[this.rear]=element
    }
    dq(){
        if (this.front==-1) {
            return null
        }else if (this.front==this.rear) {
            this.front=-1
            this.rear=-1
        }
        this.front++
    }
    peek(){
        return this.array[this.rear]
    }
    print(){
        if (this.front==-1&&this.rear==-1) {
            
            return null
        }
        for (let i = this.front; i <=this.rear; i++) {
            console.log(this.array[i]);
            
        }
    }
}
const queue = new Queue(50)
queue.nq(1)
queue.nq(2)
queue.nq(3)
queue.nq(4)
queue.nq(5)
// queue.dq()
console.log(queue.peek());
// queue.print()