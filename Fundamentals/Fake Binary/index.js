function fakeBin(x) {
    let resultFakeBin = ''
    for (let index = 0; index < x.length; index += 1) {
        resultFakeBin += x[index] < 5 ? '0' : '1'
    }
    return resultFakeBin
}

console.log(fakeBin('1234567890'))