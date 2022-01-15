function century(year) {

    return year % 100 ? Math.floor(year / 100) + 1 : Math.floor(year / 100)
}

console.log(century(1705))
console.log(century(620011))



