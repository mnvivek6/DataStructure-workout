class Node{
    constructor(value){
        this.value= value
        this.left = null
        this.right = null
    }
}

class BinarySearchtree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if (node.value<root.value) {
            if (root.left===null) {
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if (root.right=== null) {
                root.right= node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    inOrder(root){
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
}

const bst = new BinarySearchtree()

bst.insert(10)
bst.insert(15)
bst.insert(7)
bst.insert(3)
bst.inOrder(bst.root)