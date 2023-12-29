// code evolution
// function quicksort(array){
//   if (array.length <= 1) {
//     return array;
//   }

//   let pivotValue = array[array.length -1]
//   let left =[]
//   let right =[]

//   for(let i=0;i<array.length-1;i++){
//     if(array[i]<pivotValue){
//       left.push(array[i])
//     }else{
//       right.push(array[i])  
//     }
//   }
  
//   return [...quicksort(left),pivotValue, ...quicksort(right)]
// }

//pivot value from back
// function quicksort(array){
//   if (array.length <= 1) {
//     return array;
//   }

//   let pivotValue = array[0]; // Change pivot to first element
  // let left =[];
  // let right =[];

  // for(let i=1; i<array.length; i++){ // Start loop from second element
  //   if(array[i]<pivotValue){
  //     left.push(array[i])
  //   }else{
  //     right.push(array[i])  
  //   }
  // }

  // return [...quicksort(left), pivotValue, ...quicksort(right)]
// }

// function quicksort(array) {
  
//   if (array.length<3) {
//     return array
//   }
//   let pivot = array[0]
//   let leftarray=[]
//   let rightarray=[]
//   for (let i = 1; i < array.length; i++) {
//        if (array[i]<pivot) {
//         leftarray.push(array[i])
//        }else{
//         rightarray.push(array[i])
//        }
    
//   }
//   return[...quicksort(leftarray),pivot,...quicksort(rightarray)]
// }

// console.log(quicksort([9,8,7,7,6,5]));







// function quicksort(array) {
  
// if (array.length<2) {
//   return array
// }
//   let pivot = array[0]
//   let left = []
//   let right = []
//     for (let i = 1; i < array.length; i++) {
//        if (array[i]<pivot) {
        
//         left.push(array[i])
//        }else{
//         right.push(array[i])
//        }
      
//     }
//   return [...quicksort(left),pivot,...quicksort(right)]
// }


// console.log(quicksort([9,8,7,6,5,4,3,2,-0,888,-99]));





// function quicksort(array) {

//   if (array.length<2) {
//     return array
//   }

//   let pivot = array[0]

//   let left = []
//   let right =[]
//   for (let i = 1; i < array.length; i++) {
//        if (array[i]<pivot) {
        
//         left.push(array[i])
//        }else{
//         right.push(array[i])
//        }
    
//   }
//   return [...quicksort(left),pivot,...quicksort(right)]
  
// }


// console.log(quicksort([8,9,7,6,5,4,3,2,1,-0]));

// function quicksort(array) {
//   if (array.length<2) {
//     return null
//   }
//   let leftarray = []
//   let rightarray = []
//   let pivot = array[array.length-1]
//   for (let i = 0; i < array.length; i++) {
//        if (array[i]<pivot) {
//         leftarray.push(array[i])
//        }else{
//         rightarray.push(array[i])
//        }
    
//   }
//   return [...quicksort(leftarray),pivot,...quicksort(rightarray)]
// }

// let array=[9,8,76,5,4,3,2]
// console.log(quicksort(array));

  
// function quicksort(array) {
//   if (array.length<=1) {
//     return array
//   }
//   let leftarray=[]
//   let rightarray=[]
//   let pivot = array[0]
//   for (let i = 1; i < array.length; i++) {
//        if (array[i]<pivot) {
//         leftarray.push(array[i])
//        }else{
//         rightarray.push(array[i])
//        }
    
//   }
//   return [ ...quicksort(leftarray),pivot,...quicksort(rightarray)]
// }
// console.log(quicksort([9,8,7,6,5,4,3,2,1]));


// function quicksort(array) {
  
//   if(array.length<=1){
//     return array
//   }
//   let left = []
//   let right= []
//   let pivot= array[0]
//   for (let i= 1; i < array.length;i ++) {
//        if (array[i]<pivot) {
//            left.push(array[i])
//        }else{
//            right.push(array[i])
//        }
//   }
//   return [ ...quicksort(left),pivot,...quicksort(right)]
// }
// console.log(quicksort([9,8,7,6,5,4,3,2,1]));

// function quicksort(array) {
//   if (array.length<=1) {
//     return array
//   }
//   let left = []
//   let right=[]
//   let pivot = array[0]
//   for (let i = 1; i < array.length; i++) {
//          if (array[i]<pivot) {
//           left.push(array[i])
//          }else{
//           right.push(array[i])
//          }
//   }
//   return [ ...quicksort(left),pivot,...quicksort(right)]
// }
// console.log(quicksort([9,8,7,6,5,4,3,2,1]));

// function quicksort(array) {

// if (array.length<=1) {
//   return array
// }
//   let left = []
//   let right= []
//   let pivot=array[0]
//   for (let i = 1; i < array.length; i++) {
//        if (array[i],pivot) {
//         left.push(array[i])
//        }else{
//         right.push(array[i])
//        }
//   }
//   return [...quicksort(left),pivot,...quicksort(right)]
// }
// console.log(quicksort([9,8,7,6,5,4,4,3,2,1]));

// function quicksort(array) {
//    if (array.length<=1) {
//     return array
//    }
//    let left = []
//    let right = []
//    let pivot = array[0]
//    for (let i = 1; i < array.length; i++) {
//         if (array[i]<pivot) {
//           left.push(array[i])
//         }else{
//           right.push(array[i])
//         }
    
//    }
//    return [...quicksort(left),pivot,...quicksort(right)]
// }
// console.log(quicksort([9,8,6,5,4,3]));



function quicksort(array){
 
  if (array.length<=1) {
    return array
  }
  let left =[]
  let right =[]
  let pivot = array[0]
  for (let i = 1; i < array.length; i++) {
       if (array[i]<pivot) {
          left.push(array[i])
       }else{
        right.push(array[i])
       }

    
  }
  return [...quicksort(left),pivot,...quicksort(right)]
}

console.log(quicksort([9,8,7,6,5,4,3,2,1]));