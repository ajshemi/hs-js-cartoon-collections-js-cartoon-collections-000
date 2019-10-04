function dwarfRollCall(dwarves) {
  // create new array
  var newDwarves=[]
  
  // use for loop and concat method
  for(var i=0;i<dwarves.length;i++){
    newDwarves=newDwarves.concat(`${i+1}. ${dwarves[i]} `)
  }
  // return newDwarves array
  return newDwarves.join('')
}


function summonCaptainPlanet(planeteerCalls){
  // create new array
  var newPlaneteerCalls=[]
  
  // this approach uses both forEach and push methods
  // planeteerCalls.forEach(function(planet){
  //   newPlaneteerCalls.push(`${planet.toUpperCase()}!`)
  // })
  
  // this approach uses for loop and concat method
  for(var i=0;i<planeteerCalls.length;i++){
    newPlaneteerCalls=newPlaneteerCalls.concat(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return newPlaneteerCalls
}


function longPlaneteerCalls(words) {
  // loop through each word in words array
  for(var i=0;i<words.length;i++){
    
    // check for length of each word
    if(words[i].length>4){
      return true
    }
  }
  return false
}


function findTheCheese (foods) {
  // cheese array
  var cheese=['cheddar','gouda','camembert']
  
  // for loop and includes methods
  for(var i=0;i<foods.length;i++){
    
    // check if each element in foods array is in cheese array
    if(cheese.includes(foods[i])){
      return foods[i]
    }
  }
  return 'no cheese!'
}