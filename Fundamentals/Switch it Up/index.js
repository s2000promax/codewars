function switchItUp(number) {
  const dictionary0 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', ''];
  const dictionary10 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dictionary20 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const dictionary100 = ['hundred'];

  if (number < 10) return `${dictionary0[number]}`;
  if (number >= 10 && number <= 19) return `${dictionary10[number - 10]}`
  if (number >= 20 && number <= 99) return `${dictionary20[Number((number + '')[0])]} ${Number((number + '')[1]) !== 0 ? dictionary0[Number((number + '')[1])] : ''}`

  if (number >= 100) {
    const str12numb = Number((number + '')[1] + (number + '')[2]);
    return `${
    dictionary0[(number + '')[0]]
  } ${
      ((number + '')[1] == 0 && (number + '')[2] == 0) ? dictionary100[0]
        : str12numb > 0 && str12numb < 10 ? dictionary100[0] + " " +dictionary0[(number + '')[2]] 
        : str12numb >= 10 && str12numb <= 19 ? dictionary100[0] + " " +dictionary10[str12numb - 10] 
          : (str12numb >= 20 && str12numb <= 99) && (number + '')[2] == 0 ? dictionary100[0] + " " +dictionary20[(number + '')[1]]
            : dictionary100[0] + " " +dictionary20[(number + '')[1]] + " " + dictionary0[(number + '')[2]]
  }`
}

}


console.log(switchItUp(100));
console.log(switchItUp(101));
console.log(switchItUp(102));
console.log(switchItUp(103));
console.log(switchItUp(104));
console.log(switchItUp(105));
console.log(switchItUp(106));
console.log(switchItUp(107));
console.log(switchItUp(108));
console.log(switchItUp(109));
console.log(switchItUp(110));
console.log(switchItUp(111));
