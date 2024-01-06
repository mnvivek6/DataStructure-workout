
    
// class Graph{
//     constructor(){
//         this.adjacencyList ={}
//     }
//     addVertex(vertex){
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if (!this.adjacencyList[vertex1]) {
//             this.addVertex(vertex1)
//         }
//         if (!this.adjacencyList[vertex2]) {
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
// }
// const graph = new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')

// class Graph {
//     constructor(){
//         this.adjecencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             this.adjecencyList[vertex]  = new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjecencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjecencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjecencyList[vertex1].add(vertex2)
//         this.adjecencyList[vertex2].add(vertex1)
//     }
//     hasEdge( vertex1 , vertex2 ) {
//        return( 
//          this.adjecencyList[vertex1].has(vertex2) &&
//         this.adjecencyList[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjecencyList[vertex1].delete(vertex2)
//         this.adjecencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             return
//         }
//         for(let adjacecvertex of this.adjecencyList[vertex]){
//             this.removeEdge(vertex,adjacecvertex)
//         }
//         delete this.adjecencyList[vertex]
//     }
//     display(){
//         for(let vertex in this.adjecencyList){
//             console.log( vertex + '->' + [...this.adjecencyList[vertex]]);

//         }
//     }
// }
// const graph1 = new Graph()

// graph1.addVertex('A')
// graph1.addVertex('B')
// graph1.addVertex('C')

// graph1.addEdge('A','B')
// graph1.addEdge('B','C')
// graph1.addEdge('A','C')
// graph.removeEdge('A','B')

// graph1.display()

// console.log(graph1.hasEdge('A','B'));
// graph1.removeVertex('A')
// graph1.display()

// class Graph {
//     constructor(){
//         this.adjacencyList={}
//     }
//     addVertex(vertex){
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex]= new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if (!this.adjacencyList[vertex1]) {
//             this.addVertex(vertex1)
//         }
//         if (!this.adjacencyList[vertex2]) {
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){

//         return(
//           this.adjacencyList[vertex1].has(vertex2)&&
//           this.adjacencyList[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if (!this.adjacencyList[vertex]) {
//             return
//         }
//         for (let adjacecvertex of this.adjacencyList[vertex]) {
//              this.removeEdge(vertex,adjacecvertex)
            
//         }
//         delete this.adjacencyList[vertex]
//     }
//     display(){
//         for (let  vertex in this.adjacencyList) {
//               console.log(vertex +'->'+[...this.adjacencyList[vertex]]);
            
//         }
//     }
// }
// const graph = new Graph()

// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addEdge('A','B')
// graph.addEdge('C','B')
// graph.display()


// class Graph{
//     constructor(){
//         this.adjecencyList= {}
//     }
//     addVertex(vertex){
//         if (!this.adjecencyList[vertex]) {
//             this.adjecencyList[vertex]= new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if (!this.adjecencyList[vertex1]) {
//             this.addVertex(vertex1)
//         }
//         if(!this.adjecencyList[vertex2]){
//             this.addVertex(vertex2)

//         }
//         this.adjecencyList[vertex1].add(vertex2)
//         this.adjecencyList[vertex2].add(vertex1)
//     }
//     hasEgde(vertex1,vertex2){
//         return(
//             this.adjecencyList[vertex1].add(vertex2)&&
//             this.adjecencyList[vertex2].add(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjecencyList[vertex1].delete(vertex2)
//         this.adjecencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             return 
//         }
//         for (let adjacecvertex of this.adjecencyList[vertex]) {
//             this.removeEdge(vertex,adjacecvertex)
            
//         }
//         delete this.adjecencyList[vertex]

//     }
//     display(){
//         for (let vertex  in this.adjecencyList) {
//            console.log(vertex +'->'+[...this.adjecencyList[vertex]]);
//         }
//     }

// }

// const graph = new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addEdge('A','B')
// graph.display()

// class Graph{
//     constructor(){
//         this.adjecencyList ={}
//     }
//     addVertex(vertex) {
//          if (!this.adjecencyList[vertex]) {
//             this.adjecencyList[vertex]=new Set()
//          }
//     } 
//     addEdge(vertex1,vertex2){
//        if (!this.adjecencyList[vertex1]) {
//         this.addVertex(vertex1)
//        }
//        if (!this.adjecencyList[vertex2]) {
//         this.addVertex(vertex2)
//        }
//        this.adjecencyList[vertex1].add(vertex2)
//        this.adjecencyList[vertex2].add(vertex1)
//     }
//     hasEdge(){
//         return(
//             this.adjecencyList[vertex1].add(vertex2)&&
//        this.adjecencyList[vertex2].add(vertex1)

//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjecencyList[vertex1].delete(vertex2)
//         this.adjecencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if (!this.adjecencyList[vertex]) {
//             return
//         }
//         for (let adjacentvertex of this.adjecencyList[vertex]) {
//           this.removeEdge(vertex,adjacentvertex)
//         }
//         delete this.adjecencyList[vertex]
//     }
//     display(){
//         for (let vertex in this.adjecencyList) {
//            console.log(vertex+'->'+[...this.adjecencyList[vertex]]);
            
//         }
//     }
   

// }
// const graph = new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addEdge('A','D')
// graph.addEdge('A','B')
// graph.addEdge('D','C')
// graph.addEdge('C','F')
// graph.removeEdge('A','B')
// graph.removeEdge('D','C')
// graph.removeVertex("A")
// graph.display()

// class Graph{
//     constructor(){
//         this.adjList ={}
//     }
//     addVertex(vertex){
//         if (!this.adjList[vertex]) {
//             this.adjList[vertex]= new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//             if (!this.adjList[vertex1]) {
//                 this.adjList(vertex1)
//             }
//             if (!this.adjList[vertex2]) {
//                 this.adjList(vertex2)
//             }
//             this.adjList[vertex1].add(vertex2)
//             this.adjList[vertex2].add(vertex1)
//     }
//     hasEdge(){
//         return(
//             this.adjList[vertex1].add(vertex2)&&
//             this.adjList[vertex2].add(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjList[vertex1].delete(vertex2)
//         this.adjList[vertex2].delete(vertex1)
//     }removeVertex(vertex){
        
//     }

// }


// class graph{
//     constructor(){
//         this.adjList = {

//         }
//     }
//     addVertex(vertex){
//         if (!this.adjList[vertex]) {
//             this.adjList[vertex] = new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if (!this.adjList[vertex1]) {
//             this.adjList(vertex1)
//         }
//         if(!this.adjList[vertex2]){
//             this.adjList(vertex2)
//         }
//         this.adjList[vertex1].add(vertex2)
//         this.adjList[vertex2].add(vertex1)
//     }
//     hasEdge(){
//         return(
//             this.adjList[vertex1].add(vertex2)&&
//             this.adjList[vertex2].add(vertex1)
//         )
//     }
// }




// class graph{
//     constructor(){
//         this.adjList={}
//     }
//     addVertext(vertex){
//         if (!this.adjList[vertex]) {
//             this.adjList(vertex)
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if (!this.adjList[vertex1]) {
//             this.adjList(vertex1)
//         }
//     }
// }


class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if (!this.adjecencyList[vertex]) {
            this.adjecencyList[vertex]= new Set
        }
    }
    addEdge(vertex1,vertex2){
        if (!this.adjecencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjecencyList[vertex2]) {
            this.adjecencyList(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    display(){
        for (let vertex in this.adjecencyList) {
             console.log(vertex+'->'+[...this.adjecencyList[vertex]]);
            
        }
    }


}

const graph = new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addEdge('a','b')
graph.display()
