// function insertionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       let curr = arr[i];
//       let j = i - 1;
//       while (j >= 0 && arr[j] > curr) {
//         arr[j + 1] = arr[j];
//         j--;
//       }
//       arr[j + 1] = curr;
//     }
//     console.log("insertion sort:", arr);
//   }
  
//   let arr = [100, 2, 44, 5, 3, 21, 1, 16, 7, 2];
//   insertionSort(arr);



//   function insertionSort ( array){
//     for (let i = 1; i < array.length; i++) {
//        let curr = array[i]
//        let j= i-1
//        while(j>=0&&array[j]>curr){

//         array[j+1]=array[j]
//         j--;
//        }
//         array[j+1]=curr
//     }
//     console.log(array);
//   }


  
//   insertionSort([1,2,34,56,-100])




// function insertionsort(array) {
//     for (let i = 0; i < array.length; i++) {
        
//         let curr = array[i]
//         let j = i-1
//         while (j>=0&&array[j]>curr) {
//             array[j+1]=array[j]
//             j--;
//         }
//         array[j+1]=curr
//     }
//     console.log(array);
// }

// insertionsort([1,2,33,-4,5,6,-7])







// function insertionsort(array) {
//     for (let i = 0; i < array.length; i++) {     
//         let current = array[i]
//         let j = i-1
//         while (j>=0&& array[j]>current) {       
//             array[j+1]= array[j]
//             j--;
//         }
//         array[j+1]=current  
//     }
//     console.log(array);
// }
// insertionsort([1,2,3,4,5,6,-48,44])



// function insertionsort(array) {

//     for (let i = 0; i < array.length; i++) {
//         let current = array[i]

//         let j= i-1
//         while (j>=0&&array[j]>current) {
            
//             array[j+1]= array[j]
//             j--;
//         }
//         array[j+1]=current
//     }
//     return array
    
// }

// console.log(insertionsort([9,8,6,5,4,3,3]));

// function insertionsort(array) {
    
//     for (let i = 0; i < array.length; i++) {
         
//         let current = array[i]
//         let j=i-1

//         while (j>=0&&array[j]>current) {
            
//             array[j+1]= array[j]
//             j--
//         }
//         array[j+1]=current
//     }
//     return array
// }

// console.log( insertionsort([9,8,7,6,5,4,3,2,1]));






// function insertion(array) {
//     if (array.length<1) {
//         return array
//     }
//     for (let i = 0; i < array.length; i++) {
         
//      let current=array[i]
//     let j = i-1

//    while (j>=0&&array[j]>current) {
         
    
//     array[j+1]=array[j]
//     j--
//    }
//    array[j+1]=current
        
//     }
//     return array
// }

// console.log(insertion([9,8,7,6,5,4,3,3,2]));




// function insertionsort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let current = array[i]
//         let j = i-1
//        while (j>=0&&array[j]>current) {
//         array[j+1]=array[j]
//         j--
//        }
//        array[j+1]=current       
//     }
//     return array
// }
// console.log(insertionsort([9,8,7,6,5,4,3,2,1,-1999]));


// function insertionsort(array) {
    
//     for (let i = 0; i < array.length; i++) {
//          let current = array[i]
//          let j = i-1
//          while (j>=0&&array[j]>current) {
//             array[j+1]= array[j]
//              j--
//          }
//         array[j+1]=current
//     }
//     return array
// }

// console.log(insertionsort([9,8,76,5,4,3,2,2]));


// function insertionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let current = array[i]
//         let j = i-1
//         while (j>=0&&array[j]>current) {
//             array[j+1]=array[j]
//             j--
//         }
//         array[j+1]= current
//     }
//     return array
// }
//  console.log(insertionSort([9,8,7,6,5,4,3,2,1])) ;


// function insertionSort() {

//     for (let i = 0; i < array.length; i++) {
//          let current = array[i]
//          let j = i-1
//          while (j>=0&&array[j]>current) {
//                 array[j+1]=array[j]
//                 j--
//          }
//          array[j+1]=current
        
//     }
//     return array
// }
// console.log(insertionSort([9,8,7,6,5,4,3,2,1]));


// function insertionsort(array) {
    
//     for (let i = 0; i < array.length; i++) {
//         let current = array[i]
//         let j = i-1
//         while (j>=0&& array[j]>current) {
//              array[j+1]=array[j]
//              j--
//         }
//         array[j+1]=current
        
//     }
//     return array
// }

// console.log(insertionsort([9,8,7,6,5,4,3,2,1]));


// function insertionSort(array) {
    
//     for (let i = 1; i < array.length; i++) {
//           let current = array[i]
//           let j= i-1
//           while (j>=0&&array[j]>current) {
//             array[j+1]=array[j]
//             j--
//           }
//           array[j+1]=current
        
//     }
//     return array
// }
// console.log(insertionSort([9,8,7,6,5,4,3,2,1]));

// function insertionSort(array) {
//     for (let i = 1; i < array.length; i++) {
//          let current = array[i]
//          let j = i-1
//          while (j>=0&& array[j]>current) {
//             array[j+1]= array[j]
//             j--
//          }
//          array[j+1]= current
        
//     }
//     return array
// }
// console.log(insertionSort([9,8,7,6,5,4,3,2,1]));

// function insertionSort(array) {
    
//     for (let i = 1; i < array.length; i++) {
        
//         let current = array[i]
//         let  j=i-1
//         while (j>=0&&array[j]>current) {
//             array[j+1]=array[j]
//             j--
//         }
//         array[j+1]=current
        
//     }
//     return array
// }

// console.log(insertionSort([9,8,-11,4,]));



function insertion(array) {
    for (let i = 0; i < array.length; i++) {
         let current = array[i]
         let j= i-1
           while (j>=0&& array[j]>current) {

            array[j+1]= array[j]
            j--
            
           }        
           array[j+1] = current
    }
    return array
}
console.log(insertion([9,8,7,6,5,4,3,2]));