//RECURSIVIDADE

function fatotrial(n) { 
    if (n == 1) {
        return 1;
    } else {
        return n * fatotrial(n - 1);
    }
}

console.log(fatotrial(5)); // 120