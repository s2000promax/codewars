function rentalCarCost(d) {
  // Your solution here

  return d >= 7 ? d * 40 - 50 : d >=3 && d <7 ? d * 40 - 20 : d * 40;
}

console.log(rentalCarCost(3))
console.log(rentalCarCost(10))