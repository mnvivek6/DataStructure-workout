class Graph{
    constructor(){
        this.adjlist = new Map()
    }
    addVertex(vertex){
        this.adjlist.set(vertex,new Set())
    }
    addEdge(vertex1,vertex2){
        this.adjlist.get(vertex1).add(vertex2)
        this.adjlist.get(vertex2).add(vertex1)
    }
    getvertexNeighbors(vertex){
        return this.adjlist.get(vertex)
    }
    depthfirstsearchRecursice(vertex,visited = []){
        visited.push(vertex)
    
        this.getvertexNeighbors(vertex).forEach(neighbor =>{
            if(!visited.includes(neighbor)){

                this.depthfirstsearchRecursice(neighbor,visited)
            }

          })
        return visited
    }
   display(){
        for(let [vertex,neighbors] of graph.adjlist ){
            for(let neighbor of neighbors){
                console.log(`${vertex} --> ${neighbor}`);
            }
        }
   }
}

const graph = new Graph()

graph.addVertex("a")
graph.addVertex("b")
graph.addVertex("c")
graph.addVertex("d")
graph.addVertex("e")
graph.addVertex("f")
graph.addVertex("g")
graph.addVertex("h")
graph.addVertex("i")
graph.addVertex("j")
graph.addVertex("k")

graph.addEdge("a","k")
graph.addEdge("a","h")
graph.addEdge("a","e")
graph.addEdge("a","c")
graph.addEdge("b","k")
graph.addEdge("b","i")
graph.addEdge("b","g")
graph.addEdge("b","d")

graph.display()

console.log(graph.getvertexNeighbors("c"));

console.log(graph.depthfirstsearchRecursice("a"));
// console.log(graph.depthfirstsearchRecursice("d"));


// class Graph{
//     constructor(){
//         this.adjList = new Map()
//     }
//     addVertex(vertex){
//         this.adjList.set(vertex, new Set())
//     }
//     addEdge(vertex1,vertex2){
//         this.adjList.get(vertex1).set(vertex2)
//         this.adjList.get(vertex2).set(vertex1)
//     }
//     getvtxneighbors(vertex){
//         return this.adjList.get(vertex)
//     }
//     DFS(vertex,visited= []){
//         visited.push(vertex)
//         this.getvtxneighbors(vertex).forEach(neighbor => {
//             if (!visited.includes(neighbor)) {
//                 this.DFS(neighbor,visited)
//             }
//         });
//         return visited
//     }
//     display(){
//         for (const [vertex,neighbors] of graph.adjList) {
//             for (const neighbor of neighbors) {
//                 console.log(`${vertex}-->${neighbor}`);
//             }
//         }
//     }
// }