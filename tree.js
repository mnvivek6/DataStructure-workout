// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right=null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root= null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const newNode= new Node(value)
//         if (this.isEmpty()) {
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//        if (newNode.value<root.value) {
//         if (root.left===null) {
//             root.left = newNode
//         }else{
//             this.insertNode(root.left,newNode)
//         }
//        }else{
//         if(root.right === null) {
//             root.right= newNode
//         }else{
//             this.insertNode(root.right,newNode)
//         }
//        }
//     }
//     search(root,value){
//           if (!root) {
//             return false
//           }else{
//             if (root.value === value) {
//                 return true
//             }else if (value<root.value) {
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//           }
//     }
// }


// const bst = new BinarySearchTree()
// console.log(bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(14)
// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,4));



// class Node{
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         return this.root ===null
//     }
//     insert(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.root=node
//         }else{
//                this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if (node.value<root.value) {
//             if (root.left===null) {
//                 root.left= node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if (root.right===null) {
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     search(root,value){
//         if (!root) {
//             return null
//         }else{
//             if (root.value===value) {
//                 return true
//             }else if (value<root.value) {
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }

// }

// const bstr = new BinarySearchTree()
// bst.insert(5)
// console.log(bstr.isEmpty());
// bstr.insert(10)
// bstr.insert(5)
// bstr.insert(14)
// console.log(bstr.search(bstr.root,5));


// class Node{
//     constructor(value){
//         this.value= value
//         this.left = null
//         this.right= null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root= null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.root=node
//         }else{
//           this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//           if (node.value<root.value) {
//             if (root.left===null) {
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//           }else{
//             if (root.right===null) {
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//           }
//     }
//     search(root,value){
//         if (!root) {
//             return null
//         }else if (root.value===value) {
//             return true
//         }else if (value<root.value) {
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//     }
//     preOrder(root){
//         if (root) {
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)

//         }
//     }
//     inOrder(root){
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }

//     }
//     postOrder(root){
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
//     levelOrder(){
//         const queue = []
//         queue.push(this.root)
//         while (queue.length) {
//             let current = queue.shift()
//             console.log(current);
//             if (current.left) {
//                 queue.push(current.left)
//             }
//             if (current.right) {
//                 queue.push(current.right)
//             }
//         }
//     }
//     min(root){
//         if (!root.left) {
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if (!root.right) {
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if (root === null) {
//             return root
//         }
//         if (value<root.value) {
//             root.left = this.deleteNode(root.left,value)
//         }else if (value > root.value) {
//             root.right = this.deleteNode(root.right,value)

//         }else{
//             if (!root.left&&!root.right) {
//             return null   
//             }
//             if (!root.left) {
//                 return root.right
//             }else if (!root.right) {
//                 return root.left
//             }
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }

// const bst = new BinarySearchTree()
// console.log(bst.isEmpty());
// bst.insert(50)
// bst.insert(39)
// bst.insert(12)
// bst.insert(4)
// console.log(bst.search(bst.root,5));
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder()
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));


// class Node{
//     constructor(value){
//         this.value= value
//         this.left=null
//         this.right=null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if (node.value<root.value) {
//             if (root.left===null) {
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if (root.right===null) {
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     search(root,value){
//         if (!root) {
//             return false
//         }else{
//             if (root.value=== value) {
//                 return true
//             }else if (value<root.value) {
//                 return this.search(root.left,value)
//             }else{
//                return this.search(root.right,value)
//             }
//         }
//     }
//     preOrder(root){
//         if (root) {
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     levelOrder(root){

//         const queue= []
//         queue.push(root)
//         while (queue.length) {
//             let current = queue.shift()
//             console.log(current.value);
//             if (current.left) {
//                 queue.push(current.left)
//             }
//             if (current.right) {
//                 queue.push(current.right)
//             }
//         }
//     }

// }
// const bst = new BinarySearchTree()
// console.log(bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)
// bst.preOrder(bst.root)
// bst.levelOrder(bst.root)
// console.log(bst.search(bst.root,1))

// class Node{
//     constructor(value){
//         this.value = value
//         this.left=null
//         this.right = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root == null
//     }
//     insert(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(node.value<root.value){
//             if(root.left==null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if (root.right==null) {
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     search(root,value){

//         if (!root) {
//             return null
//         }else{
//             if (root.value===value) {
//                 return true
//             }else if (value<root.value) {
//                return this.search(root.left,value)
//             }else{
//                return this.search(root.right,value)
//             }
//         }
//     }
//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if (root===null) {
//             return null
//         }
//         if (value<root.value) {
//             root.left = this.deleteNode(root.left,value)
//         }else if (value>root.value) {
//             root.right= this.deleteNode(root.right,value)
//         }else{
//             if (!root.left&&!root.right) {
//                 return null
//             }
//             if (!root.left) {
//                 return root.right
//             }else if (!root.right) {
//                 return root.left
//             }
//             root.value= this.min(root,right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }

// const bst = new BinarySearchTree()

// console.log(bst.isEmpty());
// bst.insert(10)
// bst.insert(14)
// bst.insert(3)
// bst.insert(12)
// bst.insert(7)
// bst.delete(3)
// console.log(bst.search(bst.root,3));



// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if (node.value<root.value) {
//             if (root.left===null) {
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if (root.right===null) {
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     search(root,value){
//         if (!root) {
//             return null
//         }else{
//             if(root.value===value){
//                 return true
//             }else{
//                 if (value<root.value) {
//                 return this.search(root.left,value)
//                 }else{
//                   return this.search(root.right,value)
//                 }
//             }
//         }
//     }
//     delete(value){
//         this.root= this.deleteNode(this.root,value)
//     }
//     min(root){
//         if (!root.left) {
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if (root.right) {
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
//     deleteNode(root,value){
//         if(root==null){
//             return null
//         }
//         if (root.value>value) {
//             this.left = this.deleteNode(root.left,value)

//         }else if (value>root.value) {
//             this.right = this.deleteNode(root.right,value)
//         }else{
//             if (!root.left&&!root.right) {
//                 return null
//             }
//             if (!root.left) {
//             return root.right
//             }else if (!root.right) {
//                 return  root.left
//             }
//     root.value= this.min(root.right,value)
//    root.right= this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
//     postOrder(root){
//         if (root) {

//          this.postOrder(root.left)
//          this.postOrder(root.right)
//          console.log(root.value);
//         }
//     }
//     inOrder(root){
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     preOrder(root){
//         if (root) {
//            console.log(root.value);
//            this.preOrder(root.left)
//            this.preOrder(root.right)
//         }
//     }
// }
// const bst = new BinarySearchTree()
// bst.isEmpty()
// bst.insert(30)
// bst.insert(7)
// bst.insert(9)
// bst.insert(1)
// bst.insert(20)
// console.log(bst.search(bst.root,3));
// bst.postOrder(bst.root)


// class Node {
//     constructor(value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }
//     isEmpty() {
//         return this.root == null
//     }
//     insert(value) {
//         const node = new Node(value)
//         if (this.root === null) {
//             this.root = node
//         } else {
//             this.insertNode(this.root, node)
//         }
//     }
//     insertNode(root, node) {
//         if (node.value < root.value) {
//             if (root.left == null) {
//                 root.left = node
//             } else {
//                 this.insertNode(root.left, node)
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = node
//             } else {
//                 this.insertNode(root.right, node)
//             }
//         }

//     }
//     search(root, value) {
//         if (!root) {
//             return null
//         } else {
//             if (root.value === value) {
//                 return true
//             } else {
//                 if (root.value > value) {
//                     return this.search(root.left, value)
//                 } else if (root.value < value) {
//                     return this.search(root.right, value)
//                 }
//             }
//         }
//     }
//     preOrder(root) {
//         if (root) {
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root) {
//         if (root) {
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root) {
//         if (root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
//     min(root) {
//         if (!root.left) {
//             return root.value
//         } else {
//             return this.min(root.left)
//         }
//     }
//     max(root) {
//         if (!root.right) {
//             return root.value
//         } else {
//             return this.max(root.right)
//         }
//     }
//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }
//     deleteNode(root, value) {
//         if (root == null) {
//             return null
//         }
//         if (root.value > value) {
//         root.left = this.deleteNode(root.left,value)
//         }else if (root.value< value) {
//             root.right  = this.deleteNode(root.right,value)
//         }else{
//             if (!root.left&&!root.right) {
//                 return null
//             }
//             if (!root.left) {
//                 return root.right
//             }else if (!root.right) {
//                 return root.left
//             }
//             root.value = this.min(root.right,value)
//             root.right = this.deleteNode(root.right,root,value)
//         }
//         return root
//     }
    
    
// }

// const bst = new BinarySearchTree()


// bst.insert(20)
// bst.insert(11)
// bst.insert(10)
// bst.insert(1)
// bst.preOrder(bst.root)

// bst.delete(7)
// const vali=bst.validate()
// console.log(vali);
// bst.inOrder(bst.root)
// console.log(bst.search(bst.root,7));

class Node{
    constructor(value){
        this.value=value
        this.left = null
        this.right= null
    }
   
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){
       const node = new Node(value)
       if (this.isEmpty()) {
        this.root= node
       }else{
        this.insertNode(this.root,node)
       }
    }
    insertNode(root,node){
        if (node.value<root.value) {
            if (root.left==null) {
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if (root.right==null) {
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        if (!root) {
            return null
        }
            if (root.value==value) {
                return true 
            }else if (root.value>value) {
                return root.left= this.search(root.left,value)
            }else if (root.value<value) {
                  return root.right = this.search(root.right,value)   
            }
        
    }
    preOrder(root){
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    
    deleteNode(root,value){
        if (root==null) {
         return null   
        }
       if (root.value>value) {
        root.left = this.deleteNode(root.left,value)
       }else if (root.value<value) {
        root.right = this.deleteNode(root.right,value)
       }else{
        if(!root.left&&!root.right){
            return null
        }
        if (!root.left) {
            return root.right
        }else if (!root.right) {
            return root.left
        }
        root.value = this.min(root.right,value)
        root.right = this.deleteNode(root.right,root,value)
       }
       return root
    }
    levelOrder(root){
        const queue = []
        queue.push(root)
        while (queue.length) {
            let current = queue.shift()
            console.log(current.value);
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
    }
    
    // validate() {
    //     return this.validateNode(this.root, -Infinity, Infinity);
    //   }
    //   validateNode(root, min, max) {
    //     if (root=== null) {
    //       return true;
    //     }
    //     if (root.value <= min || root.value >= max) {
    //       return false;
    //     }
    //     return this.validateNode(root.left,min,root.value) && this.validateNode(root.right,root.value,max)
    //   }
    validate(){
        return this.validateNode(this.root,-Infinity,Infinity)
    }
    validateNode(root,min,max){
        if (root === null) {
            return true
        }
        if (root.value <= min || root.value >= max) {
            return false
        }
        return this.validateNode(root.left,min,root.value)&&this.validateNode(root.right,root.value,max)
    }
   
}
const bst = new BinarySearchTree()
bst.insert(20)
bst.insert(10)
bst.insert(11)
bst.insert(1)
bst.insert(7)
bst.levelOrder(bst.root)
// bst.preOrder(bst.root)