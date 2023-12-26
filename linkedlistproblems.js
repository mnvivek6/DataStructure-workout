// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addnode(value){
//         const node=new Node(value)
//         if(!this.head){
//             this.head=node;
//         }
//         else{
//             this.tail.next=node;
//         }
//         this.tail=node
    // }
    // addfirst(value){
    //     const node=new Node(value)
    //     if(!this.head){
    //         this.head=node
    //         this.tail=node
    //     }
    //     else{
    //         node.next=this.head
    //         this.head.prev=node
    //         this.head=node
    //     }
    // }
    // addlast(value){
    //     const node=new Node(value)
    //     if(!this.head){
    //         this.head=node
    //         this.tail=node
    //     }
    //     else{
    //         this.tail.next=node
    //         node.prev=this.tail
    //         this.tail=node
    //     }
    // }
//    deletefirst(){
//         if(!this.head){
//             return null;
//         }
//         else{
//             this.head=this.head.next
//             this.head.prev=null
//         }
//    }
//    deletelast(){
//     if(!this.head){
//         return null
//     }
//     else{
//         this.tail=this.tail.prev
//         this.tail.next=null
//     }
//    }
//    toArray(){

//     let temp= this.head
//     let array=[]
//     while (temp) {
        
//         array.push(temp.value)
//         temp=temp.next
//     }
//     return array
//    }
//    addafter(value,pos){
//     const node = new Node(value)
//     if (!this.head) {
//         this.head=node
//     }else if (this.head.value==pos) {
//         this.head.next=node
        
//     }  
//    }
    // print(){
    //     if(!this.head){
    //         console.log("empty");
    //     }
    //     else{
    //         let temp=this.head
    //         while(temp){
    //             if(temp){
    //                 console.log(temp.value);
    //                 temp=temp.next
    //             }
    //         } 
    //     }
    // }
// }
// const list=new linkedlist()
// list.addfirst(10)
// list.addnode(10)
// list.addnode(20)
// list.addnode(30)
// list.addnode(40)
// list.addnode(50)

// list.addlast(30)
// list.deletefirst()
// list.deletelast()
// list.print()

// const resultar=list.toArray()
// console.log(resultar);


// class Node{
//     constructor(value){
//         this.value= value
//         this.next= null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }
//     addnode(value){
//         const node = new Node(value)
//         if (!this.head) {
//             this.head= node
//         }else{
//             this.tail.next = node
//         }
//         this.tail= node
//     }
     
//     print(){
//         if (!this.head) {
//             console.log('empty');
//         }else{
//             let temp = this.head
//             while (temp) {
//                 console.log(temp.value);
//                 temp=temp.next
//             }
//         }
//     }
// }

// const list= new linkedlist()

// list.addnode(1)
// list.adnode(2)
// list.adnode(3)
// list.adnode(4)
// list.print()



// class Node{
//     constructor(value){
//         this.value = value
//         this.next= null
//     }
// }
//     class linkedlist{
//         constructor(){
 
//             this.head = null
//             this.tail = null
//         }
//         addnode(value){
//             const node = new Node(value)
//             if (!this.head) {
//                 this.head= node
//             }else{
//                 this.tail.next = node
//             }
//             this.tail = node
//         }
//         print(){
//             if(!this.head){
//                 console.log('empty');
//             }else{
//                 let temp = this.head
//                 while(temp){
//                     if (temp) {
//                         console.log(temp.value);
//                         temp = temp.next
//                     }
//                 }
//             }
//         }
//     }

//     const list = new linkedlist()
//     list.addnode(1)
//     list.addnode(2)
//     list.addnode(3)
//     list.print()


// class Node{
//     constructor(value){
//         this.value= value
//         this.next = null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addnode(value){
//       const node = new Node(value)
//       if (!this.head) {
//         this.head= node

//       }else{
//         this.tail.next = node
//       }
//       this.tail=node
//     }
//     addfirst(value){
//         const node = new Node(value)
//         if (!this.head) {
//             this.head = node
//             this.tail= node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//     }
//     print(){
//         if (!this.head) {
//             console.log('empty');
//         }else{
//             let temp = this.head
//             while (temp) {
//                 console.log(temp.value);
//                 temp=temp.next
//             }
//         }
//     }
// }

// const listt = new linkedlist()
// listt.addnode(11)
// listt.addnode(12)
// listt.addnode(13)
// listt.addnode(14)
// listt.addnode(15)
// listt.addfirst(1)
// listt.addfirst(2)
// listt.addfirst(3)
// listt.addfirst(4)

// listt.print()


class Node {
    constructor(value){
        this.value=value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.tail=null
    }
    addnode (value){
        const node = new Node(value)
        if (!this.head) {
            this.head= node
        }else{
            this.tail.next= node
        }
        this.tail=node
    }
    addfirst (value){
        const node = new Node(value)
        if (!this.head) {
            this.head=node
            
        }else{
            node.next = this.head
            this.head = node
        }
    }
    print(){
        if (!this.head) {
            console.log('list is empty');
        }else{
          let  temp = this.head
            while (temp) {
                console.log(temp.value);
                temp= temp.next
            }
        }
    }
}

const list = new linkedlist()
list.addnode(1)
list.addnode(2)
list.addnode(3)
list.addnode(4)
list.addfirst(5)
list.addfirst(5)
list.addfirst(5)
list.print()