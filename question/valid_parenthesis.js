// const v = s => { 
//     let stack = []
//     let op = new Set(['(','{','['])
//     let o = {
//         '(':')',
//         '{':'}',
//         '[':']'
//     }
//     for(i of s){
//          if(op.has(i)) stack.push(i)
//          else {
//              if(i !== o[stack.pop()]) return false
//          }
         
//     }  
//     return !stack.length
// }



const v = s => { 
    while(s.includes("()") || s.includes("{}") || s.includes("[]")){
         s = s.replace("[]","")
             .replace("{}","")
             .replace("()","")  
    }
    return !s.length
}
  
console.log(v("[]({}}"))