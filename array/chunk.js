
var chunk = (arr, size) => {
    a = []
    while(arr.length){
        a.push(arr.splice(0,size))
    }
    return a
};

console.log(chunk([3,4,5,6,2,4,0,7,4],3))