const product = (a, b) => {
    return a * b
}


const sum = (n) => {
    let total = 0
    for (let k = 1; k < n + 1; k = k + 1) {
        total = total + k
    }
    return total
}

console.log(product(107, 109))
console.log(sum(500))