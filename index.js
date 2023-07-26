function bst(value){

    bstHelper(this.root,value)

    const node= new Node(value)
    if(this.root==null){
        this.root=node
    }else{
        bstHelper(this.root,node)
    }
}

function bstHelper(root,node){
    
    if(value<root.value){
        if(root.left==null){
            root.left=node
        }else{
            bstHelper(root.left,node)
        }
    }else{
        if(root.right==null){
            root.right=node
        }else{
            bstHelper(root.right,node)
        }
    }
}


let a=[]

const buildHeap=()=>{

    const parrent=Math.floor((a.length-2)/2)

    for(let i=parrent;i>=0;i--){
        heapHealper(i)
    }
}

const heapHealper=(current)=>{

    let leftIndx=current*2+1

    while(leftIndx<=a.length-1){
        let rightIdx=current*2+2

        let shiftIndx
        if(rightIdx<a.length && a[rightIdx]<a[rightIdx]){
            shiftIndx=rightIdx
        }else{
            shiftIndx=leftIndx
        }

        if(a[current]>a[shiftIndx]){
            let t=a[shiftIndx]
            a[shiftIndx]=a[current]
            a
        }
    }
}


const dltHeap=()=>{

    let t=a[0]
    a[0]=a[a.length-1]
    a[a.length-1]=t

    a.pop()

    shiftdown(0)
}

const shiftdown=(current)=>{

    let leftidx=current*2+1

    while(leftidx<a.length ){

        let rightIdx=current*2+2

        let fh
        if(rightIdx<a.length && a[rightIdx]<a[leftidx]){
            
        }
    }
}