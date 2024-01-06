// class TrieNode {
//     constructor() {
//       this.children = new Map();
//       this.isEndOfWord = false;
//     }
//   }
  
//   class Trie {
//     constructor() {
//       this.root = new TrieNode();
      
//     }
//     insert(word) {
//       let current = this.root;
//       for (let i = 0; i <= word.length; i++) {
//         const char = word[i];
//         if (!current.children.has(char)) {
//           current.children.set(char, new TrieNode());
//         }
//         current = current.children.get(char);
//       }
//       current.isEndOfWord = true;
//     }
  
//     search(word) {
//       let current = this.root;
//       for (let i = 0; i <= word.length; i++) {
//         const char = word[i];
//         if (!current.children.has(char)) {
//           return false;
//         }
//         current = current.children.get(char);
//       }
//       return current.isEndOfWord;
//     }
  
//     printAllElements() {
//       let stack = [];
//       let node = this.root;
//       this._dfs(node, '', stack);
//       return stack;
//     }
  
//     _dfs(node, currentWord, stack) {
//       if (node.isEndOfTheWord) {
//         stack.push(currentWord);
//       }
//       for (let [char, child] of node.children) {
//         this._dfs(child, currentWord + char, stack);
//       }
//     }
//   }
  
//   const trie = new Trie();
//   trie.insert('apple');

//   trie.insert('april');
//   trie.insert('banana');
//   trie.insert('orange');
  
//   console.log(trie.search('apple')); // true
//   console.log(trie.search('orange')); // true
//   console.log(trie.search('banana')); // true
//   console.log(trie.search('app')); // false
  
//   console.log(trie.root.children.get('a').children);
  
// console.log(trie.printAllElements());
  

class TrieNode{
  constructor(){
    this.children = new Map()
    this.isEndofWord = false
  }
}

class Trie {
  constructor(){
    this.root = new TrieNode()
  }
  insert(word){
    let current = this.root
    for (let i = 0; i < word.length; i++) {
         const char = word[i]
         if (!current.children.has(char)) {
              current.children.set(char,new TrieNode())

         }
      current = current.children.get(char)
    }
    current.isEndofWord= true
  }
  search(word){
    let current = this.root
    for (let i = 0; i < word.length; i++) {
         const char = word[i]
      if (!current.children.has(char)) {
        return false
      }
      current = current.children.get(char)
    }
    return current.isEndofWord
  }
  pringAllElements(){
    let stack=[]
    let node = this.root
    this._dfs(node,'',stack)
    return stack
  }
  _dfs(node,currentWord,stack){
    if (node.isEndofWord) {
      stack.push(currentWord)
    }
    for (let  [char,child] of node.children) {
       this._dfs(child,currentWord+char,stack)
      
    }
  }
}

const trie = new Trie()
trie.insert('april')
trie.insert('apple')
trie.insert('banana')
console.log(trie.search('apple'));
console.log(trie.pringAllElements());