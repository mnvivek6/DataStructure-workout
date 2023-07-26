
// class Node{

//     constructor(value){

//         this.value= value
//         this.next=null
//     }
// }

// class linkedlist{

//     constructor(){

//         this.head= null
//         this.tail= null
//     }
//     adnode(value){
//         let node = new Node(value)

//         if (!this.head) {

//             this.head= node
//             this.tail= node

//         }else{

//             this.tail.next= node
//         }
//         this.tail=node
//     }
//     addbefore(value,pos){
//         const node=new Node(value)
//         if(!this.head){
//             this.head=node
//         }
//         else if(this.head.value==pos)
//         { 
//             node.next=this.head
//             this.head=node
//         }
//         else{
//             let temp=this.head
//             while(temp){
//                 if(temp.next.value==pos){
//                     node.next=temp.next
//                     temp.next=node
//                     return
//                 }
//                 temp=temp.next
//             }
//         }
//     }
//     print(){

//         if (!this.head) {

//             console.log('list is empty ');

//         }else{

//             let temp = this.head
//             while (temp) {
//                 console.log(temp.value);

//                 temp=temp.next
//             }
//         }
//     }
// }

// const list = new linkedlist()

// list.adnode(20)
// list.adnode(10)
// list.adnode(40)
// list.adnode(50)
// list.addbefore(30,50)
// list.print()

// class Node {

//     constructor(value) {

//         this.value = value
//         this.next = null
//     }
// }

// class linkedlist {

//     constructor() {

//         this.head = null
//         this.tail = null
//     }
//     adnode(value) {
//         const node = new Node(value)
//         if (!this.head) {
//             this.head = node
//         } else {
//             this.tail.next = node
//         }
//         this.tail = node

//     }
//     adbefore(value,pos){
//         const node = new Node(value)
//         if (!this.head) {
//             this.head= node         
//         }else if (this.head.value==pos) {
//             node.next= this.head
//             this.head=node           
//         }else{        
//          let temp= this.head
//          while(temp ){
//             if (temp.next.value==pos) {
//                 node.next = temp.next
//                 temp.next= node
//                 return           
//              }
             
//          }
        
         
//         }
//     }
//     print(){

//         let current = this.head
//         if (!this.head) {
                
//             console.log('list is empty');
//         }else{

//          if (current) {

//             while (current) {
//                 console.log(current.value);
//                 current = current.next;
//             }
            
//          }
//         }
//     }
// }

// const list = new linkedlist()

// list.adnode(10)
// list.adnode(20)
// list.adnode(30)
// list.adnode(40)
// list.adbefore(50,40)
// list.print()


class Node{

    constructor(value){

        this.value = value
        this.next= null
    }
}

class linkedlist{

    constructor(){

        this.head=null
        this.tail=null
    }
    adnode(value){
        let node = new Node(value)
        if (!this.head) {

            this.head= node
            
        }else{
            this.tail.next= node
           
        }
        this.tail= node
    }
    adbefore(value,pos){
        let node = new Node(value)
        if(!this.head)
        {
            this.head= node      
        }else if(this.head.value== pos){
               node.next= this.head
               this.head=node
        }
        else{
            let current= this.head
            while (current) {
                if (current.next.value==pos) {
                    
                    node.next= current.next
                    current.next= node
                    return
                }
                current=current.next
            }
        }
    }
    toArray() {
        let current = this.head;
        let result = [];
      
        while (current) {
          result.push(current.value);
          current = current.next;
        }
      
        return result;
      }
      toDecimal() {
        let current = this.head;
        let result = 0;
        while (current) {
          result = result * 2 + current.value;
          current = current.next;
        }
        return result;
      }
      
    print(){
        let current=this.head
       if (!this.head) {
        console.log('list is empty');
       }else{

        while (current) {
            console.log(current.value);
            current=current.next

        }
       }
    }
}

const list =new linkedlist()

list.adnode(1)
list.adnode(0)
list.adnode(0)
list.adnode(1)

// list.adbefore(6,0)
list.print()
// list.toArray()
// const arr = list.toArray()

const decimal = list.toDecimal()
console.log(decimal);

// console.log(arr);