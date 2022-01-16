function toBinary(n){
    let result = ''
    let forward = ''

    let tempDev = 0;
    if (n === 1) tempDev = 1
    while (n >= 2){
        tempDev = Math.trunc(n / 2)
        result += (n - tempDev * 2) ;
        n = tempDev
    }
    for (let i = result.length - 1; i >= 0; i -= 1) {
        forward += result[i]
    }
    return Number(tempDev + forward);
}

console.log('Result:', toBinary(1))
