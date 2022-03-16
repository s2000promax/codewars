/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

Examples

 */



function generateHashtag (str) {

if (!!str) {
  let result = '';
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] !== ' ') {
      result += (index === 0 || str[index - 1] === ' ') ? str[index].toUpperCase() : str[index];
      if (result.length >= 140) {
        return false;
      }

    }
  };

  return result.length > 1 ? '#' + result : false;
}
  return false;
}

console.log(generateHashtag('   '));
console.log(generateHashtag(' Hello there thanks for trying my Kata'));
console.log(generateHashtag('    Hello     World   '));
console.log(generateHashtag(''));
console.log(generateHashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'));