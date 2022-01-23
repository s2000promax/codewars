const reverse = number => {
  let string = Math.abs(number) +'';
  number = '';

  for (let index = 0; index < string.length; index += 1) {
    number += string[string.length - 1 - index]
  }

  return Number(number);
}

console.log(reverse(-351))