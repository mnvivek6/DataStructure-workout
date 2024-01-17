// class WeightedGraph {
//     constructor() {
//         this.adjacencyList = {};
//     }

//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = [];
//         }
//     }

//     addEdge(vertex1, vertex2, weight) {
//         if (!this.adjacencyList[vertex1]) {
//             this.addVertex(vertex1);
//         }
//         if (!this.adjacencyList[vertex2]) {
//             this.addVertex(vertex2);
//         }

//         this.adjacencyList[vertex1].push({ node: vertex2, weight });
//         this.adjacencyList[vertex2].push({ node: vertex1, weight });
//     }

//     display() {
//         for (let vertex in this.adjacencyList) {
//             const neighbors = this.adjacencyList[vertex].map(neighbor => {
//                 return `${neighbor.node} (weight: ${neighbor.weight})`;
//             });
//             console.log(`${vertex} -> ${neighbors.join(', ')}`);
//         }
//     }
// }

// const weightedGraph = new WeightedGraph();
// weightedGraph.addVertex('a');
// weightedGraph.addVertex('b');
// weightedGraph.addVertex('c');
// weightedGraph.addVertex('d');
// weightedGraph.addEdge('a', 'b', 3);
// weightedGraph.addEdge('a', 'c', 1);
// weightedGraph.addEdge('b', 'c', 4);
// weightedGraph.addEdge('b', 'd', 2);
// weightedGraph.display();



class WeightedGraph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if (!this.adjecencyList[vertex]) {
            this.adjecencyList[vertex] = []
        }
    }
    addEdge(vertex1,vertex2,weight){
        if (!this.adjecencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjecencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].push({node:vertex2,weight})
        this.adjecencyList[vertex2].push({node:vertex1,weight})
    }
    display(){
        for (const vertex in this.adjecencyList) {
             const neighbors = this.adjecencyList[vertex].map(neighbor=>{
                return `${neighbor.node} (weight:${neighbor.weight})`
             })
             console.log(`${vertex} -> ${neighbors.join(',')}`);
        }
    }
}

const weightedGraph = new WeightedGraph()
weightedGraph.addVertex('a');
weightedGraph.addVertex('b');
weightedGraph.addVertex('c');
weightedGraph.addVertex('d');
weightedGraph.addEdge('a', 'b', 3);
weightedGraph.addEdge('a', 'c', 1);
weightedGraph.addEdge('b', 'c', 4);
weightedGraph.addEdge('b', 'd', 2);
weightedGraph.display();