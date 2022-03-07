// Нужна функция, которая в итоге в консоль выведет Строку Hello world
// Ключ - это букв, значение - это ее место во фразе
console.clear()
const input ={
  ' ': [5],
  'd': [10],
  'e': [1],
  'H': [0],
  'l': [2,3,9],
  'o': [4,7],
  'r': [8],
  'w': [6],
}
const test = (objectInput) => {
  const newArray = [];
  for (let key in objectInput) {
    if (objectInput[key].length === 1) {
      newArray[objectInput[key]] = key;
      console.log(newArray);
    } else {
      objectInput[key].forEach( index => newArray[index] = key);
      console.log(newArray);
    }
  }
  return newArray.join('');

}

console.log(test(input))