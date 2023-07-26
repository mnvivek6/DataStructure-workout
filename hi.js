

class Stack{
    constructor(size){
       this.array=new Array(size)
        this.top=-1
        this.rev=[]
    }
    push(element){
        this.top++
        this.array.push(element)
    }
    revers(){
       
       for (let i = 0; i < this.top.length; i++) {
            this.rev.push(this.array.pop())

        
       }
    }
    display(){
        for (let i = 0; i <this.rev.length; i++) {
            console.log(this.rev[i]);
            
        }
    }
}
const stack= new Stack(50)
stack.push("h")
stack.push("e")
stack.push("l")
stack.push("l")
stack.push("o")
stack.reverse()
stack.display()
