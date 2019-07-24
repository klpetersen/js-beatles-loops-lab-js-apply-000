
function theBeatlesPlay(musicians, instruments) { 
  var music = [];
  for (var i = 0; i < musicians.length; i++) {
      music.push(`${musicians[i]} plays ${instruments[i]}`) 
    }
  return music
}

function johnLennonFacts(facts){ 
  var newFactsArray = []
  let i = 0; 
  while(facts.length > i){ 
    newFactsArray.push(`${facts[i]}!!!`)
    i++ 
  }
  return newFactsArray
}