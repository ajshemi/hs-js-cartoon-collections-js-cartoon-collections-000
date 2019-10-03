function dwarfRollCall(dwarves) {
  var newDwarves=[]
  for(var i=0;i<dwarves.length;i++){
    newDwarves=newDwarves.concat(`${i+1}. ${dwarves[i]} `)
  }
  return newDwarves.join('')
}

function summonCaptainPlanet(planeteerCalls){
  var newPlanet=[]
  planeteerCalls.forEach(function(planet){
    newPlanet.push(`${planet.toUpperCase()}!`)
  })
  // for(var i=0;i<planeteerCalls.length;i++){
  //   newPlanet=newPlanet.concat(`${planeteerCalls[i].toUpperCase()}!`)
  // }
  return newPlanet
}

function longPlaneteerCalls(words) {
  for(var i=0;i<words.length;i++){
    if(words[i].length>4){
      return true
    }
  }
  return false
}

function findTheCheese (foods) {
  var cheese=['cheddar','gouda','camembert']
  for(var i=0;i<foods.length;i++){
    if(cheese.includes(foods[i])){
      return foods[i]
    }
  }
  return 'no cheese!'
}
