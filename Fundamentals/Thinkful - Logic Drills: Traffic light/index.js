function updateLight(current) {
  const trafficLights = ['green', 'yellow', 'red'];
  let index = trafficLights.findIndex( el => el === current);

  if (index == 2) {
    index = 0;
  } else
  {
    index += 1;
  }

 return  trafficLights[index];
}

console.log( updateLight('green'));
console.log( updateLight('yellow'));
console.log( updateLight('red'));
