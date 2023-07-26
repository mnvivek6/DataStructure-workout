

let array= [3,2,3]


for (let i = 0; i < array.length-1; i++) {
   let count =1
   let s = array.length/2
   
   for (let j = i+1; j < array.length; j++) {
         if(array[i]===array[j]){
           count ++   
         }
   }
   if (count>s) {
      console.log(array[i]);
  }
   
}

// let array = [3, 2, 3];

// for (let i = 0; i < array.length; i++) {
//   let count = 1; 
//   let s = array.length / 2;
  
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] === array[j]) {
//       count++;
//     }
//   }

//   if (count > s) {
//     console.log("The majority element is:", array[i]);
//     break; // Exit the loop since the majority element is found
//   }
// }