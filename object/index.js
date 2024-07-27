a = [3, 5, 7, [5, 6, , [6, 4, 3]], [5, 2, 8]]  

res = []

const flatArr = arr => {
    arr.map(e => {
        if (typeof e == "object") {
            flatArr(e)
        } else {
            res.push(e)
        }
    });
    return res
}

console.log(flatArr(a));