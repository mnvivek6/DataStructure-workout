
// function mergeSort(array) {
//     if (array.length<2) {
//         return array
//     }
//     const mid = Math.floor(array.length/2)
//     const leftarray = array.slice(0,mid)
//     const rightarray = array.slice(mid)
//     return merge(mergeSort(leftarray),mergeSort(rightarray))
// }
// function merge(leftarray,rightarray) {
//     const sortedarray = []
//     while (leftarray.length && rightarray.length) {
//         if (leftarray[0] <= rightarray[0]) {
//             sortedarray.push(leftarray.shift())
//         }else{
//             sortedarray.push(rightarray.shift())
//         }
//     }
//   return  [...sortedarray,...leftarray,...rightarray]
// }
// console.log(mergeSort([9,8,7,6,5,4,3,2,1]));


// function mergeSort(array) {
//     if (array.length<2) {
//         return array
//     }
//   const mid = Math.floor(array.length/2)
//   const leftarray = array.slice(0,mid)
//   const rightarray = array.slice(mid)
//   return merge(mergeSort(leftarray),mergeSort(rightarray))
// }
// function merge(leftarray,rightarray) {
//     const sortedarray =[]
//     while(leftarray.length&&rightarray.length){
//         if (leftarray[0]<rightarray[0]) {
//             sortedarray.push(leftarray.shift())
//         }else{
//             sortedarray.push(rightarray.shift())
//         }
//     }
//     return [...sortedarray,...leftarray,...rightarray]
// }
// console.log(mergeSort([9,8,7,6,5,4,2,1]));



// function mergeSort(array) {
//     if (array.length<2) {
//         return array
//     }
//     const mid = Math.floor(array.length/2) 
//     const leftarray = array.slice(0,mid)
//     const rightarray = array.slice(mid)
//     return merge(mergeSort(leftarray),mergeSort(rightarray))
// }

// function merge(leftarray,rightarray) {
//     const sortedarray = []
//     while(leftarray.length&&rightarray.length){
//         if (leftarray[0]>rightarray[0]) {
//             sortedarray.push(rightarray.shift())
//         }else{
//             sortedarray.push(leftarray.shift())
//         }
//     }
//     return [...sortedarray,...leftarray,...rightarray]
// }

// console.log(mergeSort([9,8,7,6,5,4,3,2,1]));



// function mergeSort(array) {
//     if (array.length<2) {
//         return array
//     }
//     const mid = Math.floor(array.length/2)
    
//     const leftarray = array.slice(0,mid)
//     const rightarray = array.slice(mid)
//     return merge(mergeSort(leftarray),mergeSort(rightarray))
// }
// function merge(leftarray,rightarray) {
//     const sortedarray = []
//     while (leftarray.length&&rightarray.length) {
//         if (leftarray[0]<=rightarray[0]) {
//             sortedarray.push(leftarray.shift())
//         }else{   
//             sortedarray.push(rightarray.shift())
//         }
//     }
//     return [...sortedarray,...leftarray,...rightarray]
// }
// console.log(mergeSort([9,8,7,6,5,4,3,2,1]));

// function mergeSort(array) {
//     if (array.length<2) {
//         return array
//     }
//     const mid = Math.floor(array.length/2)
// console.log(mid);
//     const leftarray = array.slice(0,mid)
//     const rightarray = array.slice(mid)
//     return merge(mergeSort(leftarray),mergeSort(rightarray))
// }
// function merge(leftarray,rightarray) {
//     const sortedarray = []
//     while (leftarray.length&&rightarray.length) {
//         if (leftarray[0]<=rightarray[0]) {
//             sortedarray.push(leftarray.shift())
//         }else{
//             sortedarray.push(rightarray.shift())
//         }
//     }
//     return [...sortedarray,...leftarray,...rightarray]
// }
// console.log(mergeSort([9,8,7,6,5,4,3,2,1]));



// function mergeSort(array) {
    
//     if (array.length<2) {
//         return array
//     }
//     const mid= Math.floor(array.length/2)
//     const leftarray = array.slice(0,mid)
//     const rightarray = array.slice(mid)
//     return merge(mergeSort(leftarray),mergeSort(rightarray))
// }
// function merge(leftarray,rightarray) {
//     const sortedarray = []
//     while (leftarray.length&&rightarray.length) {
//         if (leftarray[0]<=rightarray[0]) {
//             sortedarray.push(leftarray.shift())
//         }else{
//             sortedarray.push(rightarray.shift())
//         }
//     }
//     return [...sortedarray,...leftarray,...rightarray]
// }
// console.log(mergeSort([9,8,7,6,5,4,3,2,1]));


// function mergesort(array) {
//     if (array.length<2) {
//         return array
//     }
//     const mid = Math.floor(array.length/2)
//     const leftarray =array.slice(0,mid)
//     const rightarray = array.slice(mid)
//     return merge(mergesort(leftarray),mergesort(rightarray))
// }
// function merge(leftarray,rightarray) {
//     let sortedarray = []
//     while (leftarray.length && rightarray.length) {
//         if (leftarray[0]<=rightarray[0]) {
//             sortedarray.push(leftarray.shift())
//         }else{
//             sortedarray.push(rightarray.shift())
//         }
//     }
//     return [...sortedarray,...leftarray,...rightarray]
    
// }

// console.log(mergesort([0,9,8,7,6,5,4,34,3,2]));

// function mergesort(array) {
//     if (array.length<2) {
//         return array
//     }
//     let mid = Math.floor(array.length/2)
//     let leftarray = array.slice(0,mid)
//     let rightarray = array.slice(mid)
//    return merge(mergesort(leftarray),mergesort(rightarray))
// }

// function merge(leftarray,rightarray) {
//     let sortedarray = []
//     while (leftarray.length && rightarray.length) {
//         if (leftarray[0]<=rightarray[0]) {
//             sortedarray.push(leftarray.shift())
//         }else{
//             sortedarray.push(rightarray.shift())
//         }
//     }
//     return [...sortedarray,...leftarray,...rightarray]
// }
// console.log(mergesort([9,8,7,6,5,4,3,2,1]));

// function mergesort(array) {
//     if(array.length<2){
//         return array
//     }
//     let mid = Math.floor(array.length/2)
//     let left= array.slice(0,mid)
//     let right= array.slice(mid)
//     return merge(mergesort(left),mergesort(right))
// }
// function merge(left,right) {
//     let sortedarray=[]
//     while (left.length && right.length) {
//         if (left[0]<=right[0]) {
//             sortedarray.push(left.shift())
//         }else{
//             sortedarray.push(right.shift())
//         }
//     }
//     return [...sortedarray,...left,...right]
// }
// console.log(mergesort([9,8,7,6,5,4,3,2,1]));



// function mergeSort(array) {
   
//   if (array.length<=1) {
//     return array
//   }
//     let mid = Math.floor(array.length/2)
//     let left = array.slice(0,mid)
//     let right = array.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right) {
//     let sortedarray = []
//     while (left.length&&right.length) {
//         if (left[0]<=right[0]) {
//             sortedarray.push(left.shift())
//         }else{
//             sortedarray.push(right.shift())
//         }
//     }
//     return [ ...sortedarray,...left,...right]
// }

// console.log(mergeSort([9,8,7,6,5,4,3,2,1]));






function mergeSort(array) {

    if (array.length<=1) {
        return array
    }
    
    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right) {
    
    let sortedarray = []
    while (left.length&&right.length) {
        if (left[0]<=right[0]) {
            sortedarray.push(left.shift())
        }else{
            sortedarray.push(right.shift())
        }
    }
    return [ ...sortedarray,...left,...right]
}

console.log(mergeSort([9,8,7,6,5,4,6,7,64,3,2,]));