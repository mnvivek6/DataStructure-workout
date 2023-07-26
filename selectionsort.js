
//Selection sort
// function selectionSort(arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//       let minValue = arr2[i];
//       let minIndex = i;
//       for (let j = i + 1; j < arr2.length; j++) {
//         if (arr2[j] < minValue) {
//           minValue = arr2[j];
//           minIndex = j;
//         }
//       }
//       if (minIndex !== i) {
//         arr2[minIndex] = arr2[i];
//         arr2[i] = minValue;
//       }
//     }
//    return arr2
//   }

//   console.log( selectionSort([1,3,4,6,-100,-34]));


// function selectionsort(array) {
//     for (let i = 0; i < array.length; i++) {
        
//         let minValue = array[i]
//         let minIndex = i;
//         for (let j = i+1; j < array.length; j++) {
//            if (array[j]<minValue) {
//             minValue= array[j]
//             minIndex=j
//            }
            
//         }
//         if (minIndex !== i) {
            
//             array[minIndex]=array[i]
//             array[i]= minValue
//         }
        
//     }
//     return array
// }

// console.log( selectionsort([9,-9,-33,4,5,6,5]));



// function selectionSort (array) {
//     for (let i = 0; i < array.length; i++) {
//         let minValue= array[i]
//         let minIndex= i
//         for (let j = i+1; j < array.length; j++) {
//             if (array[j]<minValue) {
//                 minValue = array[j]
//                 minIndex= j
//             }   
//         }
//         if (minIndex!==i) {
//             array[minIndex]=array[i]
//             array[i]=minValue
//         }
//     }
//     return array   
// }
// console.log(selectionSort([1,2,3,4,-55,-599,5,6]));

// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//        let minValue= array[i]
//        let minIndex = i
//        for (let j = i+1; j < array.length; j++) { 
//              if (array[j]<minValue) {  
//                 minValue = array[j]
//                 minIndex = j
//              }  
//        }
//        if (minIndex!==i) {
//         array[minIndex]= array[i]
//         array[i]= minValue
//        }      
//     }
//     return array 
// }
// console.log(selectionSort([9,0,-1,-3,-4,88,5,1]));



// function selectionSort(array) {
    
//     for (let i = 0; i < array.length; i++) {
//          let minValue = array[i]
//          let minIndex= i

//          for (let j = i+1; j < array.length; j++) {
//              if (array[j]<minValue) {
//                 minValue= array[j]
//                 minIndex= j
//              }
            
//          }
//          if (minIndex !== i) {
//              array[minIndex]=array[i]
//              array[i]=minValue
//          }
//     }
//     return array
// }

// console.log(selectionSort([8,7,6,5,4,3,2,1]));


/*
function selectionSort(array) { 
    for (let i = 0; i < array.length; i++) {
        let minValue = array[i]
        let minIndex = i
        for (let j = i+1; j < array.length; j++){
              if (array[j]<minValue) {
                minValue= array[j]
                minIndex = j
              }       
        } 
        if (minIndex!== i) {
            array[minIndex]= array[i]
            array[i]= minValue
        }
    }
    return array
}
console.log( selectionSort([8,7,6,5,4,3,2]));*/




// function selectionSort(array) {

//     for (let i = 0; i < array.length; i++) {      
//         let minValue = array[i]
//         let minIndex = i
//         for (let j = i+1; j < array.length; j++) {
//              if (array[j]<minValue) {
//                 minValue = array[j]
//                 minIndex= j
//              }  
//         }
//         if (minIndex!==i) {   
//             array[minIndex]= array[i]
//             array[i]= minValue
//         }
//     }
//     return array   
// }
// console.log(selectionSort([9,8,7,6,5,4,3,2,12]));

// function selectionSort(array) {
    
//     for (let i = 0; i < array.length; i++) {
        
//         let minValue = array[i]
//         let minIndex=i
//        for (let j = i+1; j < array.length; j++) {
             
//         if (array[j]<minValue) {
//             minValue = array[j]
//             minIndex = j
//         }
//        }
//        if (minIndex!==i) {
        
//         array[minIndex]=array[i]
//         array[i]=minValue
//        }
            
//         }        
//         return array
//     }

// console.log(selectionSort([8,7,6,5,4,3,2,1]));


// function selectionsort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let minValue = array[i]
//         let minIndex = i
//         for (let j = i+1; j < array.length; j++) {
//             if (array[j]<minValue) {
//                 minValue= array[j]
//                 minIndex = j
//             }
//         }
//         if (minIndex!==i) {
//             array[minIndex]=array[i]
//             array[i]=minValue
//         }
//     }
//     return array
// }
// console.log(selectionsort([9,8,7,6,5,4,3,3,2,1,]));



// function selectionsort(array) {
//     for (let i = 0; i < array.length; i++) {
         
//         minvalue = array[i]
//         minindex = i
//         for (let j = i+1; j < array.length; j++) {
//              if (array[j]<minvalue) {
//                 minvalue = array[j]
//                 minindex = j
//              }
//         }
//         if (minindex!==i) {
//             array[minindex]=array[i]
//             array[i]=minvalue
//         } 
//     }
//     return array
// }
// console.log(selectionsort([9,8,7,6,5,4,3,2,1]));

// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//          let minValue= array[i]
//          let minIndex = i
//          for (let j = i+1; j < array.length; j++) {
//              if (array[j]<minValue) {
//                 minValue = array[j]
//                 minIndex= j
//              }
            
//          }
//          if(minIndex!==i){
//             array[minIndex]= array[i]
//             array[i]=minValue
//          }
        
//     }
//     return array
// }

// console.log(selectionSort([9,8,7,6,5,4,3,2,1]));




// function selsectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
        
//         let minvalue = array[i]
//         let minindex = i
//         for (let j = i+1; j < array.length; j++) {
//             if(array[j]<minvalue){
//                 minvalue = array[j]
//                 minindex = j
//             }
            
//         }
//         if (minindex!==i) {
//             array[minindex]=array[i]
//             array[i]=minvalue
//         }
        
//     }
//     return array
// }
// console.log(selsectionSort([9,8,7,6,5,4,3,2,1]));

// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//          let minValue = array[i]
//          let minIndex = i
//          for (let j = i+1; j < array.length; j++) {
//             if (array[j]<minValue) {
//                 minValue = array[j]
//                 minIndex = j
//             }
//          }
//          if (minIndex!==i) {
//             array[minIndex]=array[i]
//             array[i]= minValue
//          }
//     }
//     return array
// }
// console.log(selectionSort([9,8,7,6,5,4,3,2,1]));

// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//          let minvalue = array[i]
//          let minIndex = i
//          for (let j = i+1; j < array.length; j++){
//             if (array[j]<minvalue) {
//                 minvalue=array[j]
//                 minIndex=j
//             }
//          }
//          if(minIndex!==i){
//             array[minIndex]=array[i]
//             array[i]=minvalue
//          }
        
//     }
//     return array
// }

// console.log(selectionSort([9,8,7,6,5,4,3,2,1]));



function selectionSort(array) {
    
    for (let i = 0; i < array.length; i++) {
         
        let minValue = array[i]
        let minIndex = i
        for (let j = i+1; j < array.length; j++) {
             if (array[j]<minValue) {
                minValue = array[j]
                minIndex=j
             }
            
        }
        if (minIndex!==i) {
            array[minIndex ]= array[i]
            array[i]=minValue
        }
        
    }
    return array
}
console.log(selectionSort([8,33,55,3,2,1]));