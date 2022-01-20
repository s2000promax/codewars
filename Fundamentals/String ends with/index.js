function solution(str, ending){
  let isResult = null;
  // TODO: complete

  isResult = str.includes(ending, str.length - ending.length) ? true : false;

  return isResult;
}

console.log(solution('abcde', 'cde'));