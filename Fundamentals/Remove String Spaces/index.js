function noSpace(x){
  //You got this!
  let newStr = '';
  for (let index = 0; index < x.length; index += 1) {
    if (x[index] !== ' ') {
      newStr += x[index];
    }
  }
return newStr;
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))