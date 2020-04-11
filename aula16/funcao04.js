function fat(n) {
    for (let a = n - 1; a > 0; a--) {
        n = n * a;     
    }
    return n;
}

console.log(fat(5));