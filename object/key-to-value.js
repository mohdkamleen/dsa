var obj = {
    1: "One",
    2: "Two",
    3: "Three"
}

a = Object.entries(obj)
n ={}

for([k,v] of a){
    n[v] = k
}

console.log(n)






