function removeChar(str){
  //You got this!
  let newStr = '';
  for (let index = 1; index < str.length - 1; index += 1) {
    newStr += str[index]
  }
return newStr;
}

console.log(removeChar('eloquent'))