// class MinHeap{
//   constructor(){
//     this.list = [null]
//   }
//   insert(value){
//     const len = this.list.length
//     this.list.push(value);
//     if(len === 1){
//       return value;
//     }
//     this.heapifyUp();
//     return this.list[1];
//   }
//   remove(){
//     if(this.list.length === 1) return null;
//     if(this.list.length === 2) return this.list.pop();
//     const prevRoot = this.list[1];
//     this.list[1] = this.list.pop();
//     this.heapifyDown();
//     return prevRoot;
//   }
//   build(values){
//     if(typeof values === 'number') values = [values];
//     values.forEach((value) => this.insert(value));
//   }
//   heapifyUp(){
//     let i = this.list.length - 1;
//     const val = this.list[i];
//     while(!this.isRoot(i) && this.getParentNode(i) > val){
//       [this.list[this.getParentIndex(i)], this.list[i]] = [val,this.getParentNode(i)];
//       i = this.getParentIndex(i);    
//     }
//   }
//   heapifyDown(){
//     if(this.list.length < 3) return;
//     let i = 1;
//     const currentVal = this.list[1];
//     let leftVal = this.getLeftNode(i);
//     let rightVal = this.getRightNode(i);
//     while(leftVal !== undefined && (currentVal > leftVal || currentVal > rightVal)){
//       if(currentVal > leftVal && (rightVal === undefined || leftVal < rightVal)){
//         [this.list[this.getLeftIndex(i)],this.list[i]] = [currentVal,leftVal];
//         i = this.getLeftIndex(i);
//       } else {
//         [this.list[this.getRightIndex(i)],this.list[i]] = [currentVal,rightVal];
//         i = this.getRightIndex(i);
//       }
//       leftVal = this.getLeftNode(i);
//       rightVal = this.getRightNode(i);
//     }
//   }
//   isRoot(index){
//     return index === 1;
//   }
//   getLeftIndex(index){
//     return 2*index;
//   }
//   getLeftNode(index){
//     return this.list[this.getLeftIndex(index)];
//   }
//   getRightIndex(index){
//     return 2 * index + 1;
//   }
//   getRightNode(index){
//     return this.list[this.getRightIndex(index)];
//   }
//   getParentIndex(index){
//     return Math.floor(index/2);
//   }
//   getParentNode(index){
//     return this.list[this.getParentIndex(index)];
//   }
// }
// const a = [4,5,2,3,6,1];
// const heap = new MinHeap();
// heap.build(a);
// console.log(heap.insert(-1));
// console.log(heap.remove());
// console.log(heap.list);




// heap.insert(1)
// heap.insert(5)
// heap.insert(15)
// heap.display()

// class MinHeap {
//   constructor() {
//     this.list = [null]
//   }
//   insert(value) {
//     const len = this.list.length
//     this.list.push(value)
//     if (len === 1) {
//       return value
//     }
//     this.heapifyUp()
//     return this.list[1]
//   }
//   remove() {
//     if (this.list.length === 1) return null;

//     if (this.list.length === 2) return this.list.pop();
//     const prevRoot = this.list[1]
//     this.list[1] = this.list.pop()
//     this.heapifyDown()
//     return prevRoot
//   }
//   Build(value) {

//     if (typeof value === "number") value = [value]
//     value.forEach((element) => this.insert(element));
//   }
//   heapifyUp() {

//     let i = this.list.length - 1
//     const val = this.list[i]
//     while (!this.isRoot(i) && this.getParantNode(i) > val) {
//       [this.list[this.getParantIndex(i)], this.list[i]] = [val, this.getParantNode(i)]
//       i = this.getParantIndex(i)
//     }


//   }
//   heapifyDown() {

//     if (this.list.length < 3) return;
//     let i = 1
//     const currentVal = this.list[1]
//     let leftVal = this.getLeftNode(i)
//     let rightVal = this.getRightNode(i)
//     while (leftVal !== undefined && (currentVal > leftVal || currentVal > rightVal)) {
//       if (currentVal > leftVal && (rightVal === undefined || leftVal < rightVal)) {
//         [this.list[this.getLeftindex(i)], this.list[i]] = [currentVal, leftVal]
//         i = this.getLeftindex(i)
//       } else {
//         [this.list[this.getRightIndex(i)], this.list[i]] = [currentVal, rightVal]
//         i = this.getRightIndex(i)

//       }
//       leftVal = this.getLeftNode(i)
//       rightVal = this.getRightNode(i)
//     }
//   }
//   isRoot(index) {
//     return index === 1
//   }
//   getLeftindex(index) {
//     return index * 2
//   }
//   getLeftNode(index) {
//     return this.list[this.getLeftindex(index)]
//   }
//   getRightIndex(index) {
//     return 2 * index + 1
//   }
//   getRightNode(index) {
//     return this.list[this.getRightIndex(index)]
//   }
//   getParantIndex(index) {
//     return Math.floor((index) / 2)
//   }
//   getParantNode(index) {
//     return this.list[this.getParantIndex(index)]
//   }
// }

// const min = new MinHeap()

// const a = [9, 5, 3, 27, 4, 1]

// min.Build(a)
// console.log(min.list);


