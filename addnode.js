
// class Node {

//     constructor(value){
//         this.value =value 
//         this.next= null
//     }
// }

// class linketdlist{

//     constructor(){

//         this.head= null
//         this.tail= null
//     }
//     adnode(value){

//         const node = new Node(value)
//         if (!this.head) {

//             this.head=node
            
//         }else{
//             this.tail.next=node
//         }
//         this.tail= node
//     }
//     print(){

//        if (!this.head) {
        
//         console.log('list is empty');

//        }else{

//         let temp = this.head
//         while (temp) {
            
//             if (temp) {
                
//                 console.log(temp.value);
//                 temp= temp.next
//             }
//         }
//        }
        
//     }
// }

// const list = new linketdlist()

// list.adnode(49)
// list.adnode(58)
// list.adnode(10)
// list.print()



// class Node{

//     constructor(value){
//         this.value= value
//         this.next= null
//     }
// }
// class linkedlist {

//     constructor(){

//         this.head= null
//         this.tail=null
//     }
//     adnode(value){

//         const node = new Node(value)
//         if (!this.head) {

//             this.head=node
//             this.tail=node
            
//         }else{

//             this.tail.next= node
//         }
//         this.tail=node
//     }
//     print(){

//         if (!this.head) {

//             console.log('list is empty')
//         }
//         else{
//             let temp= this.head
//             while (temp) {

//                     console.log(temp.value)

//                     temp=  temp.next
//             }
//         }
//     }
// }

// const list= new linkedlist()

// list.adnode(49)
// list.adnode(10)
// list.adnode(30)
// list.print()


// class Node{

//     constructor(value){

//         this.value= value
//         this.next=null
//     }
// }

// class linkedlist{

//     constructor(){

//         this.head= null
//         this.tail=null
//     }
//    adnode(value){

//     const node = new Node(value)

//     if (!this.head) {
//         this.head=node
//     }else{

//         this.tail.next=node
//     }
//     this.tail=node
//    }
//   prepend(value){

//     const node = new Node(value)
//     if (!this.head) {
//         this.head=node
//     }else{
//     this.tail.next=node
//     }
//     this.tail=node
//   }
//   apend(value){
//     const node = new Node(value)
//     if (!this.head) {
//         this.head=node
//     }else{

//         node.next=this.head
//     }
//     this.head=node
//   }
   
//     print(){

//         if (!this.head) {

//             console.log('list is empty');
            
//         }else{

//             let temp= this.head
//             while (temp) {
//                 console.log(temp.value);
//                 temp= temp.next
//             }
//         }
//     }
// }

// const list = new linkedlist()

// list.adnode(49)
// list.adnode(23)
// list.adnode(10)
// list.adnode(50)
// list.prepend(40)
// list.prepend(59)
// list.prepend(20)
// list.apend(1111)
// list.print()

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
    prepend(value){
        const node = new Node(value)
        if (!this.head) {
            this.head=node
        }else{
          
            node.next=this.head
            this.head=node
        }
    }
    apend(value){
        const node = new Node(value)
        if (!this.head) {
            this.head=node
        }else{
          var temp = this.head
          while (temp.next) {
            temp=temp.next
          }
          temp.next=node
        }
        this.tail=node
    }
    deletefirst(){

        if (!this.head) {
            return null
        }else{

            this.head = this.head.next
            
        }
    }
    deletelast(){
        if (!this.head) {
            return null
        }else{

            let temp = this.head
            while (temp.next.next) {
                temp=temp.next
                
            }
            temp.next=null
            this.tail=temp
        }
    }
    addafter(value,pos){

        const node= new Node(value)
        if (!this.head) {
            
            this.head=node
        }else if (this.head.value==pos) {

        node.next=this.head.next
        this.head.next=node           
        }else{
            let temp = this.head
            while (temp) {
                if (temp.value==pos) {
                    node.next=temp.next
                    temp.next=node
                    return
                }
                temp=temp.next
            }
        }
    }
    addbefore(value,pos){

        const node = new Node(value)
        if (!this.head) {
            this.head=node
        }else if (this.head.value==pos) {
            node.next=this.head
            this.head=node
        }else{
            let temp = this.head
            while (temp) {               
                if (temp.next.value==pos) {                  
                    node.next=temp.next
                    temp.next=node
                    return
                }
                temp=temp.next
            }
        }
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


list.adnode(10)
list.adnode(20)
list.adnode(30)
list.adnode(40)
list.adnode(50)
list.adnode(60)
list.adnode(70)
list.addafter(30,10)
list.addbefore(15,20)
// list.apend(5)
// list.prepend(10)
// list.deletelast()
// list.deletefirst()
list.print()









