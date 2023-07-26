
function sum(arr,target) {

    for (let i = 0; i < arr.length-1; i++) {
    
         for (let j = i+1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) == target) {
            
                return [arr[i],arr[j]]
               
         }
        
    }
    
}
return false
}



console.log(sum([4,2,3,6,9,0],6)); 