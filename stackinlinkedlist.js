// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.size = 0;
//   }

//   push(element) {
//     const newNode = new Node(element);
//     newNode.next = this.top;
//     this.top = newNode;
//     this.size++;
//   }

//   pop() {
//     if (!this.top) return null;

//     const poppedNode = this.top;
//     this.top = poppedNode.next;
//     poppedNode.next = null;
//     this.size--;
//     return poppedNode.data;
//   }

//   peek() {
//     if (this.isEmpty()) return null;
//     return this.top.data;
//   }

//   getSize() {
//     return this.size;
//   }

//   print() {
//     let current = this.top;
//     const elements = [];

//     while (current) {
//       elements.push(current.data);
//       current = current.next;
//     }

//     console.log(elements.join(", "));
//   }

//   isEmpty() {
//     return this.size === 0;
//   }
// }

// const stack = new Stack()
// console.log(stack.pop());
// stack.print()


// class Node{
//     constructor(data){
//         this.data=data
//         this.next= null
//     }
    
// }
// class Stack{
//     constructor(){
//         this.top = null
//         this.size= 0
//     }
//     push(element){
//         const node =new Node(element)
//         node.next = this.top
//         this.top=node
//         this.size++
//     }
//     pop(){
        
//         if (!this.top)return null;

//         const poped = this.top
//         this.top = poped.next
//         poped.next =null
//         this.size--
//         return poped.data
//     }
//     print(){
//         let current = this.top
//         let elements = []
//         while (current) {
//             elements.push(current.data)
//             current = current.next
//         }
//         console.log(elements.toString());
//     }
//    peek(){
//     if(!this.top){
//         return null
//     }
//     return this.top.data
//    }
// }


// const stack = new Stack()
// stack.push(1)
// stack.push(1)
// stack.push(1)
// stack.push(1)
// stack.push(12)
// stack.print()
// console.log(stack.peek());


// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class Stack{
//     constructor(){
//         this.top=null
//         this.size=null
//     }
//     push(element){
//         const node = new Node(element)
//         node.next = this.top
//         this.top=node
//         this.size++
//     }
//     pop(){
//         const poped = this.top
//         this.top= poped.next
//         poped.next=null
//         this.size--
//     }
//     peek(){
//         return this.top.data
//     }
//     print(){

//         let current = this.top
//         let elements= []
//         while (current) {
//             elements.push(current.data)
//             current=current.next
//         }
//         console.log(elements.toString());
//     }
// }

// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.pop()
// console.log(stack.peek());
// stack.print()

// class Node{
//     constructor(data){
//         this.data=data
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.data=null
//         this.size=0
//     }
//     push(element){
//         const node = new Node(element)
//         node.next = this.top
//         this.top=node
//         this.size++
//     }
//     pop(){
//         const poped = this.top
//         this.top= poped.next
//         poped.next = null
//         this.size --
//     }
//     peek(){
//         return this.top.data
//     }
//     print(){
//         let current = this.top
//         let elements= []
//         while (current) {
//             elements.push(current.data)
//             current = current.next
//         }
//         console.log(elements.toString());
//     }
// }

// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.pop()
// console.log(stack.peek());
// stack.print()


// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.top=null  
//     }
//     push(element){
//         const node = new Node(element)
//         node.next=this.top
//         this.top=node
//     }
//     pop(){
//        if (!this.top) {
//         return null
//        }
//         this.top = this.top.next  
//     }
//     peek(){
//         return this.top.data
//     }
//     print(){
//         let temp = this.top
//         while (temp) {
//             console.log(temp.data);
//             temp=temp.next
//         }
//         }
//     }
// const stack=new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)
// stack.push(7)
// stack.pop()
// stack.print()
// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//       this.top=null
//     }
//     push(element){
//         const node = new Node(element)
//         node.next= this.top
//         this.top=node
//     }
//     pop(){
//         if (!this.top) {
//             return null
//         }
//         this.top=this.top.next
//     }
//     peek(){
//         return this.top.data
//     }
//     print(){

//         let temp = this.top
//         while(temp){
//             console.log(temp.data);
//             temp=temp.next
//         }
//     }
// }

// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// stack.push(6)
// stack.pop()
// console.log(stack.peek());
// stack.print()


