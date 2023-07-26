// function binary(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(target === arr[middleIndex]){
//         return middleIndex
//     }else if(target < arr[middleIndex]){
//         return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//         return search(arr,target,middleIndex+1,rightIndex)
//     }
// }

// console.log(binary([1,2,3,4,5],4));
// console.log(binary([1,2,3,4,5],3));
// console.log(binary([1,2,3,4,5],5));










// function binary(arr, target) {
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftindex,rightindex){

//     if (leftindex > rightindex) {
//         return -1
//     }
//     let middleindex = Math.floor((leftindex+rightindex)/2)
//     if (target===arr[middleindex]) {
//         return middleindex
//     }else if (target < arr[middleindex]) {
//          return search(arr,target,leftindex,middleindex-1)
//     }else{
//         return search(arr,target,middleindex+1,rightindex,)
//     }
// }

// console.log(binary([1,2,3,4,5,6,7],1));



// function binary(array,target) {
//     return search(array,target,0,array.length-1)
// }
// function search(array,target,leftIndex,rightindex) {

//     if (leftIndex > rightindex) {
//         return -1
//     }
//     let middleindex = Math.floor((leftIndex+rightindex)/2)

//     if (target === array[middleindex]) {
//         return middleindex
//     }else if (target < array[middleindex] ) {
//         return search(array,target,leftIndex,middleindex-1)

//     }else{
//         return search(array,target,middleindex+1,rightindex)
//     }  
// }
// console.log(binary([1,2,3,4,5,6,7],4))



// function binary(array,target) {

//     return search(array,target,0,array.length)
    
// }

// function search(array,target,leftIndex,rightIndex) {
    
//     if (leftIndex>rightIndex) {
//         -1
//     }

//     let middleindex = Math.floor((leftIndex+rightIndex)/2)

//     if (target === array[middleindex]) {
//         return middleindex
//     }else if (target< array[middleindex]) {
//         return search(array,target,leftIndex,middleindex-1)
//     }else{
//         return search(array,target,middleindex+1,rightIndex)
//     }
// }

// console.log(binary([1,2,3,4,5,6,7,8,9],1));



// function binary(array,target) {
//     return search(array,target,0,array.length)
// }

// function search(array,target,leftIndex,righIndex) {

//     if (leftIndex>righIndex) { 
//         return -1
//     }
//     let middleindex = Math.floor((leftIndex+righIndex)/2)

//     if (target== array[middleindex]) {

//         return middleindex
        
//     }else if (target < array[middleindex]) {
//        return search(array,target,leftIndex,middleindex-1)
//     }else{
//         return search(array,target,middleindex+1,righIndex)
//     }
    
// }

// console.log(binary([1,2,3,4,5,6,7],7));


// function binary(array,target) {
    
//    return search(array,target,0,array.length)
// }
// function search(array,target,leftIndex,rightIndex) {

//     if (leftIndex>rightIndex) {
//         return -1
//     }

//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)

//     if (target === array[middleIndex]) {

//         return middleIndex
        
//     }else if (target < array[middleIndex]) {
//        return search(array,target,leftIndex,middleIndex-1)
//     }else{
//        return search(array,target,middleIndex+1,rightIndex)
//     }
    
// }

// console.log(binary([1,2,3,4,5,6,7],1));



// function binary(array,target) {
    
//     return search(array,target,0,array.length)
// }

// function search(array,target,leftIndex,righIndex) {

//     if (leftIndex > righIndex) {
//         return -1
//     }

//     let middleindex = Math.floor((leftIndex+righIndex)/2)

//     if (target=== array[middleindex]) {
//         return middleindex
//     }else if (target < array[middleindex]) {

//         return search(array, target,leftIndex,middleindex-1)
//     }else{

//         return search(array,target,righIndex,middleindex+1)
//     }
    

// }


// console.log(binary([1,2,3,4,5,6,7],1))

// function factorial(n){
//     if(n===0){
//         return 1
//     }
//     return n*factorial(n-1)
// }

// console.log(factorial(5));

// function fibnocci(n){
//     if(n<2){
//         return n
//     }
//     return fibnocci(n-1)+fibnocci(n-2)
// }

// console.log(fibnocci(6))


// function fibnocci(n) {

//     let array=[0,1]

//     for (let i = 0; i < n-2; i++) {
        
//         array[i+2]=array[i]+array[i+1]
        
//     }
//     return array
    
// }


// console.log(fibnocci(5));


// function fibnocci(n){

//     if (n < 2) {
//         return n 
//     }
//     return fibnocci(n-2)+fibnocci(n-1)
// }

// console.log(fibnocci(0));
// console.log(fibnocci(1));
// console.log(fibnocci(2));
// console.log(fibnocci(3));

// function factorial(n) {

//     if (n===0) {
//         return 1
//     }
//     return n*factorial(n-1)
    
// }
// console.log(factorial(5));


function string(string) {
    for (let i = 0, j= string.length-1; i<j ;i++ , j--) {
        if(string[i]!==string[j]){
            return false
        }
        
    }
    return true
}
console.log(string('malayala'));




