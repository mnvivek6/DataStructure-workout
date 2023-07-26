

// class stack{
//     constructor(){

//         this.list = []
//     }
//     push(element){

//         this.list.push(element)
//     }
//     pop(){
//         return this.list.pop()
//     }
//     peek(){
//         return this.list[this.list.length -1]
//     }
//     isEmpty(){
//         return this.list.length === 0
//     }
//     size(){
//        return this.list.length
//     }
//     print(){
//         console.log(this.list.toString());
//     }
// }

// const tak = new stack()

// tak.push(41)
// tak.push(42)
// tak.push(43)
// tak.push(44)
// tak.push(45)
// tak.push(46)
// tak.push(47)
// // console.log(tak.pop());
// console.log(size());
// console.log(tak.peek());
// tak.print()



// class stack{
//     constructor(){
//         this.list = []
//     }
//     push(element){
//         this.list.push(element)
//     }
//     pop(){
//         return this.list.pop()
//     }
//     peek(){
//         return this.list[this.list.length-1]
//     }
//     size(){
//         return this.list.length
//     }
//     print(){
//         console.log(this.list.toString());
//     }
//     isEmpty(){
//         return this.list.length ===0
//     }
   
// }

// const Stack = new stack()

// Stack.push(10)
// Stack.push(20)
// Stack.push(30)
// Stack.push(40)

// console.log(Stack.peek());
// console.log(Stack.size());
// Stack.print()



// class Stack{
//     constructor(){
//         this.list = []
//     }
//     push(element){
//         this.list.push(element)
//     }
//     pop(){
//         this.list.pop()
//     }
//     peek(){
//        return this.list[this.list.length-1]
//     }
//     size(){
//        return this.list.length
//     }
//     print(){
//         console.log(this.list.toString());
//     }
//     deletemiddle(){}
// }

// const stack = new Stack()
// stack.push(1)
// stack.push(1)

// stack.push(1)
// stack.push(11)
// // stack.pop()
// // console.log(stack.size());
// console.log(stack.peek());
// stack.print()


// class Stack{
//     constructor(size){
//         this.array = new Array(size)
//         this.size = size 
//         this.top = -1
//     }
//     push(value){
        
//         this.top++
//         this.array[this.top]=value
//     }
//     pop(){
//         if(this.top == -1 ){
//             return
//         }
//         this.top--
//     }
//     deletemid(){
//         if(this.top == -1 ){
//             return
//         }
//         const mid = Math.floor( this.top/ 2)
//        return this.array[mid]=undefined
//     }
//     display(){
//         for(let i=0 ; i<=this.top ; i++ ){
//             console.log(this.array[i])
//         }
//     }
// }

// const stack =new Stack(10);
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.display()
// console.log("after");
// stack.deletemid()
// stack.display()




// class Stack{
//     constructor(size){
//         this.array = new Array(size)
//         this.size = size
//         this.top = -1

//     }
//     push(value){
//         this.top++
//         this.array[this.top]=value
//     }
//     pop(){
//         if (this.top==-1) {
//             return null
//         }else{
//             this.top--;
//         }
//     }
//     deletemid() {
//         if (this.top === -1) {
//           return null;  
//         }
//         const mid = Math.floor(this.top / 2);
//          this.array.splice(mid, 1) ;
//          return this.top--
//       }
//       peek(){
//         return this.top+1
//       }
//     display(){
//         if (this.top==-1) {
//             return null
//         }else{
//             for (let i = 0; i <=this.top; i++) {
//                 console.log(this.array[i]);
                
//             }
//         }
        
//     }
// }
// const stack = new Stack(40)
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)

// // stack.deletemid()
// stack.display()
// console.log(stack.peek());


// class Stack{
//     constructor(size){
//         this.array = Array(size)
//         this.top = -1
//     }
//     push(element){

//         this.top++
//         this.array[this.top]=element

//     }
//     pop(){
//         if (this.top==-1) {
//             return null
//         }
//         this.top--
//     }
//     peek(){
//         return this.array[this.top]
//     }
//     size(){
//         return this.top+1
//     }
//     display(){
//         if(this.top==-1){
//             return null
//         }else{
//             for (let i = 0; i <=this.top; i++) {
//                  console.log(this.array[i]);
                
//             }
//         }
//     }
// }

// const stack = new Stack(50)

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// // stack.pop()
// stack.display()
// console.log(stack.size());
// console.log(stack.peek());

// class QueueWithStacks {
//     constructor() {
//       this.stack1 = [];
//       this.stack2 = [];
//     }
//     enqueue(element) {
//       this.stack1.push(element);
//     }
//     dequeue() {
//       if (this.stack1.length === 0 && this.stack2.length === 0) {
//         throw new Error("Queue is empty");
//       }
//       if (this.stack2.length === 0) {
//         while (this.stack1.length > 0) {
//           this.stack2.push(this.stack1.pop());
          
//         }
//       }
//       console.log(this.stack2);
//       return this.stack2.pop();
      
//     }
//   }
  
//   const queue = new QueueWithStacks();
// queue.enqueue("s");
// queue.enqueue("a");
// queue.enqueue("i");
// queue.enqueue("f");
// queue.enqueue("u");


// console.log(queue.dequeue()); // Output: 1
// console.log(queue.dequeue()); // Output: 2

// queue.enqueue(4);
// console.log(queue.dequeue()); // Output: 3
// console.log(queue.dequeue());






// class StackwithQeueu{
//   constructor(){
//     this.stack1=[]
//     this.stack2=[]
//   }
//   enqueue(element){
//     this.stack1.push(element)
//   }
//   dequeue(){
//     if (this.stack1.length ===0 && this.stack2.length===0) {
//       return null
//     }
//     if (this.stack2.length==0) {
//       while (this.stack1.length>0) {
//              this.stack2.push(this.stack1.pop())
//              console.log(this.stack2);
//       }
//     }
   
//     return this.stack2.pop()
//   }
//   display(){
//     if(this.stack1.length==0&&this.stack2.length==0){
//       return null
//     }else{
//       for (let i = 0; i < this.stack2.length; i++) {
//             console.log(this.stack2[i]);
//       }
//     }
//   }
// }

// const queue = new StackwithQeueu()
//  queue.enqueue(1)
//  queue.enqueue(2)
//  queue.enqueue(3)
//  queue.enqueue(4)
//  queue.dequeue()
//  console.log(queue.dequeue());
//  queue.display()


// class StackwithQeueu{
//   constructor(){
//     this.stack1 = []
//     this.stack2 = []
//   }
//   enqueue(element){
//     this.stack1.push(element)
//   }
//   dequeue(){
//     if (this.stack2==0) {
//       while (this.stack1.length>0) {
//         this.stack2.push(this.stack1.pop())
//       }
//     }
//     return this.stack2.pop()
//   }
//   display(){
//     if (this.stack1.length==0&&this.stack2.length==0) {
//       return null
//     }else {
//       for (let i = 0; i < this.stack2.length; i++) {
//         console.log(this.stack2[i]); 
//    }
//     }
//   }
// }

// const queu = new StackwithQeueu()

// queu.enqueue(1)
// queu.enqueue(2)
// queu.enqueue(3)
// queu.enqueue(4)
// queu.enqueue(5)
// queu.enqueue(6)
// queu.dequeue()
// console.log(queu.dequeue());
// queu.display()


// class Stack{
//     constructor(size){
//         this.array = new Array(size)
//         this.size= size
//         this.top = -1
//     }
//     push(element){
       
//         this.top++
//         this.array[this.top]=element
//     }
//     pop(){

//         if (this.top==-1) {
//             return null
//         }
//         this.top--
//     }
//     deletemid(){
//         if (!this.top) {
//             return null
//         }else if (this.top<2) {
//             return this.array
//         } 
//         const mid = Math.floor(this.top/2)
//         this.array.splice(mid,1)
//         return this.top--
//     }
//     peek(){
//         if (this.top==-1) {
//             return null
//         }
//         return this.array[this.top]

//     }
//     display(){

//         for (let i = 0; i <=this.top; i++) {
//             console.log(this.array[i]);;
            
//         }
//     }
// }
// const stack= new Stack(50)
// stack.push(50)
// stack.push(0)
// stack.push(60)
// stack.deletemid()
// stack.pop()
// stack.display()


// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top=null
//         this.size=0
//     }
//     push(element){
        
//         const node = new Node(element)
//         if (!this.top) {
//             this.top=node
//         }
//         node.next = this.top
//         this.top = node
//         this.size++
//     }
//     print(){
       
        
//        let current = this.top
//         let elements = []
//         while (current) {
//             elements.push(current.data)
//             current= current.next
//         }
//         console.log(elements.toString());
//     }
// }

// const stack = new Stack()
// stack.push(50)
// stack.print()

// class Stack{
//     constructor(size){
//         this.Array=new Array(size)
//         this.top=-1
//     }
//     push(element){
        
//         this.top++
//         this.Array[this.top]=element
//     }
//     pop(){
//         if (!this.top) {
//             return null
//         }else{
//             return this.Array[this.top--]
//         }
//     }
//     peek(){
//         if (!this.top) {
//             return null
//         }else{
//             return this.Array[this.top]
//         }
//     }
//     print(){
//         for (let i = 0; i <=this.top; i++) {
//               console.log(this.Array[i]);       
//         }
//     }
// }

// const stack = new Stack(50)
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.pop()

// console.log(stack.peek());
// stack.print()


// class Stack{
//     constructor(size){
//         this.array =  new Array()
//         this.top = -1
//     }
//     push(value){
//         this.top++
//         this.array[this.top]=value
//     }
//     pop(){
//         if (!this.top) {
//             return null
//         }
//         return this.array[this.top--]
//     }
//     peek(){
//         return this.array[this.top]
//     }
//     deletemid(){
//         let mid= Math.floor(this.top/2)
//         this.array.slice(mid,1)
//         return this.top--

//     }
//     print(){

//         if (!this.top==-1) {
//             return null
//         }
//         for (let i = 0; i <=this.top; i++) {
//               console.log(this.array[i]);
            
//         }
//     }
// }
// const stack = new Stack(50)
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// stack.deletemid()
// stack.pop()
// console.log(stack.peek());
// stack.print()


// class StackwithQeueu{
//   constructor(){
//     this.stack1 = []
//     this.stack2 = []
//   }
//   enqueue(element){
//     this.stack1.push(element)
//   }
//   dequeue(){
//     if (this.stack2==0) {
//       while (this.stack1.length>0) {
//         this.stack2.push(this.stack1.pop())
//       }
//     }
//     return this.stack2.pop()
//   }
//   display(){
//     if (this.stack1.length==0&&this.stack2.length==0) {
//       return null
//     }else {
//       for (let i = 0; i < this.stack2.length; i++) {
//         console.log(this.stack2[i]); 
//    }
//     }
//   }
// }

// const queu = new StackwithQeueu()

// queu.enqueue(1)
// queu.enqueue(2)
// queu.enqueue(3)
// queu.enqueue(4)
// queu.enqueue(5)
// queu.enqueue(6)
// queu.dequeue()
// console.log(queu.dequeue());
// queu.display()

class StackwithQeueu{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(value){
        this.stack1.push(value)
    }
    dequeue(){
        if (this.stack1.length === 0 && this.stack2.length === 0) {
                return ("Queue is empty");
         }

        if (this.stack2.length===0) {
            while (this.stack1.length>0) {
                this.stack2.push(this.stack1.pop())
            }
        }
        console.log(this.stack2);
        return this.stack2.pop()
    }
    
}

const queue = new StackwithQeueu()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
console.log(queue.dequeue());