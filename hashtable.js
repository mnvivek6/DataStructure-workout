

// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key,value){

//         const index = this.hash(key)
//         this.table[index] = value
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table [index]
//     }
//     remove(key){ 
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }
//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i,this.table[i]);
//             }  
//         }
//     }
// }
// const table = new HashTable(50)
// table.set("name","vivek")
// table.set("age",19)
// table.set("mane","hjkh")
// table.remove("name")
// table.display()
// console.log(table.get("name"));
// console.log(table.get("age"));

 
// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//              total+=key.charCodeAt(i)  
//         }
//         return total % this.size
//     }
    // set(key,value){
    //     const index = this.hash(key)
    //     // this.table[index] = value
    //     const bucket = this.table[index]
    //     if (!bucket) {
    //         bucket = [[key,value]]
    //     }else{
    //         const sameKeyItem = bucket.find(item => item[0]=== key)
    //         if (sameKeyItem) {
    //             sameKeyItem[1] = value
    //         }else{
    //             bucket.push([key,value])
    //         }
    //     }
    // }
//     get(key){
//         const index = this.hash(key)
//         // return this.table[index]
//         const bucket = this.table[index]
//         if (bucket) {
//             const samekeyItem = bucket.find(item=>item[0] ===key)
//             if (samekeyItem) {
//                 return samekeyItem[1]
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         const index = this.hash(key)
//         // this.table[index]=undefined
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKeyItem = bucket.find(item => item[0]===key)
//             if (sameKeyItem) {
//                 sameKeyItem[1]=value

//             }else{
//                 bucket.push[key,value]
//             }
//         }
//     }
//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//            if (this.table[i]) {
//             console.log(i,this.table[i]);
//            }
            
//         }
//     }
// }
// const table = new HashTable(50)
// table.set("name","mnvivek")
// table.set("mane","vveki")
// table.set("age",19)
// table.display()

// console.log(table.get("name"));




// class HashTable{

//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total +=key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         this.table[index]=value
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index]=undefined
//     }
//     display(){
//         for (let i = 0; i <=this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i,this.table[i]);
//             }
            
//         }
//     }
// }
// const table = new HashTable(50)
// table.set("name","mnvivek")
// table.set("hi","lol")
// table.remove("hi")
// table.display()
// console.log(table.get("name"));

// class HashTable{
//     constructor(size){
//         this.table= new Array(size)
//         this.size = size

//     }
//     hash(key){
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//              total +=key.charCodeAt(i)
            
//         }
//         return total % this.size
//     }
//     set(key,value){
//              const index = this.hash(key)
//             //  this.table[index]=value
//             const bucket = this.table[index]
//             if (!bucket) {
//                 this.table[index] = [[key,value]]
//             }else{
//                 const sameKeyItem = bucket.find(item =>item[0]===key)
//                 if (sameKeyItem) {
//                     sameKeyItem[1] = value
//                 }else{
//                     bucket.push([key,value])
//                 }
//             }
//     }
//     get(key){
//         const index = this.hash(key)
//         // return this.table[index]
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKeyItem=bucket.find(item=>item[0]===key)
//             if (sameKeyItem) {
//                 return sameKeyItem[1]
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         const index = this.hash(key)
//         // this.table[index]=undefined
//         const bucket = this.table[index]
//         if (bucket) {
//             const sameKeyItem = bucket.find(item=>item[0]===key)
//             if(sameKeyItem){
//                 bucket.splice(bucket.indexOf(sameKeyItem),1)
//             }
//         }
//     }
//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//              if (this.table[i]) {
//                 console.log(i,this.table[i]);
//              }
            
//         }
//     }
// }
// const table = new HashTable(50)
// table.set("name","vivekmn")/
// table.set("sulo","doifoidoi")
// table.remove("name")

// console.log(table.get("sulo"));
// console.log(table.get("name"));
// table.display()


// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size= size
//     }
//     hash(key){
//         let total =0

//         for (let i = 0; i < key.length; i++) {
//              total += key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){

//         const index=this.hash(key)
//         this.table[index]=value
//     }
//     get(key){
//         const index= this.hash(key)
//        return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         if (!index) {
//             return null
//         }
//         this.table[index]=undefined
//     }
//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//              if (this.table[i]) {
//                 console.log(i,this.table[i]);
//              }
            
//         }
//     }
// }

// const table = new HashTable(50)

// table.set("namee","vivekmn")
// table.set("name","vivekk")
// table.remove("name")

// console.log(table.get("namee"));
// table.display()


// class HashTable{
//     constructor(size){
//     this.table= new Array(size)
//     this.size=size
//     }
//     hash(key){
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//              total +=key.charCodeAt(i)
            
//         }
//         return total%this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         this.table[index]=value
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         if (!index) {
//             return null
//         }
//         this.table[index]=undefined

//     }
//     print(){
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i,this.table[i]);
//             }
            
//         }
//     }
// }
// const table = new HashTable(50)
// table.set("name","abi")
// table.set("namee","rohin")

// table.set("nameee","dhanush")

// console.log(table.get("name"));
// table.set("nameeee","jobin")

// table.print()

// class HashTable{
//     constructor(size){
//         this.size=size
//         this.table= new Array(size)
//     }
//     hash(key){

//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//              total += key.charCodeAt(i)
            
//         }
//         return total % this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         this.table[index]= value
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index]=undefined
//     }
//     print(){

//         for (let i = 0; i <= this.table.length; i++) {
//              if (this.table[i]) {
//                 console.log(i,this.table[i]);
//              }
            
//         }
//     }
// }

// const table = new HashTable(50)
// table.set("name","viefefek")
// table.set("name","vk")
// table.set("name","ek")
// table.set("name","vi")
// table.print()


class HashTable{
    constructor(size){
        this.size=size
        this.table= new Array(size)
    }
    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total +=key.charCodeAt(i)
            
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
        this.table[index]=value
    }
}