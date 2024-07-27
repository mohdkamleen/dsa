arr = [1,2,[3,4,[5,6,7,8],9,[10,11,[12,13]]]]

let result = []
const arrFlat = arr => {
    for(i of arr){
        if(Array.isArray(i)){
            arrFlat(i) 
        } else {
            result.push(i)
        }
    }
    return result
}
console.log(arrFlat(arr))
 