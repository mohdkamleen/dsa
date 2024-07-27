var g = new Map()
var addE = (v1, v2) => {
    g.has(v1)
        ? g.get(v1).push(v2)
        : g.set(v1, []) && g.get(v1).push(v2)
    g.has(v2)
        ? g.get(v2).push(v1)
        : g.set(v2, []) && g.get(v2).push(v1)
}
// adding edges
addE('A', 'B');
addE('A', 'D');
addE('A', 'E');
addE('B', 'C');
addE('D', 'E');
addE('E', 'F');
addE('E', 'C');
addE('C', 'F');


var bfs = s => {
    let q = [s]
    let r = new Set()
    while (q.length) {
        let v = q.shift()
        let gv = g.get(v)
        for (i of gv) {
            if (!r.has(i)) {
                r.add(v)
                q.push(i)
            }
        }
    }
    return r
}

console.log(g)
console.log(bfs('C'))











