
// binary search in ds in array simplest way to find a number from the array 
// here we are passing a array and a target number the the target number referse
// we want to find a number from that array that is the target 



// function binarysearch(arr,target) {

//     let leftIndex = 0

//     let righIndex = arr.length -1

//     while (leftIndex<=righIndex) {

//         let middleIndex = Math.floor(( leftIndex+righIndex)/2)
       
//         if (target === arr[middleIndex]) {

//             return middleIndex
            
//         }
//         if (target < arr[middleIndex]) {
            
//             righIndex = middleIndex -1

//         }else{
//             leftIndex = middleIndex+1

//         }
//     }
//   return -1
// }

// console.log(binarysearch([-5,2,4,6,10,11,12],10));



// function binarysearxch(arr,value) {

//     let leftIndex = 0

//     let rightindex=arr.length-1


//     while (leftIndex <= rightindex) {

//         middleindex = Math.floor((leftIndex+rightindex)/2)

//         if (value==arr[middleindex]) {

//             return middleindex
    
//         }else if( value<arr[middleindex]){
    
//              rightindex=middleindex-1
//         }else{

//             leftIndex=middleindex+1
//         }
        
//     }

   
// return -1
    
// }

// console.log(binarysearxch([1,2,3,4,5,6,7,8,9],1));






// function binarysearch(array,target){

//     let leftindex= 0
//     let rightindex= array.length-1

//     while (leftindex<=rightindex) {

//         middleindex= Math.floor((leftindex+rightindex)/2)
        
//         if (target==array[middleindex]) {
            
//               return middleindex
//         }else if (target < array[middleindex]) {

//             rightindex=middleindex-1

//         }else{
            
//                leftindex=middleindex+1

//         }
//     }
//     return -1
// }
// console.log(binarysearch([1,2,3,4,5,6,7,8,9,10],6));




// function binary(array,target) {
    
//     let leftIndex=0
//     let righIndex=array.length-1

//    while (leftIndex<=righIndex) {
    
//     let middleindex = Math.floor((leftIndex+righIndex)/2)

//     if (target === array[middleindex]) {
//         return middleindex
//     }else if (target < array[middleindex]) {
        
//          righIndex= middleindex-1
//     }else{
//        leftIndex= middleindex+1
//     }
//    }
//    return -1

   
// }

// console.log(binary([1,2,3,4,5,6,7],3));




// function binary(array,target) {
    
//     let leftIndex = 0
//     let righIndex = array.length-1

//     while (leftIndex<=righIndex) {
//         let middleIndex = Math.floor((leftIndex+righIndex)/2)

//         if (target === array[middleIndex]) {
            
//             return middleIndex
//         }else if (target < array[middleIndex]) {
//             righIndex = middleIndex-1
//         }else{
//             leftIndex = middleIndex +1
//         }
//     }
//     return -1
// }

// console.log(binary([1,2,3,4,5,6,7],7))



function binarysearch(array,target) {

    let leftIndex = 0
    let righIndex = array.length-1

    while (leftIndex<=righIndex) {
        
        let middleindex = Math.floor((leftIndex+righIndex)/2)

        if (target === array[middleindex]) {
            
            return middleindex
        }else if (target< array[middleindex]) {
            
            righIndex = middleindex-1
        }else{
            leftIndex = middleindex+1
        }
    }
    return -1
}

console.log(binarysearch([1,2,3,4,5,6,7],7));