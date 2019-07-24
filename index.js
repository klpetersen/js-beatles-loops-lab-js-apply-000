
function theBeatlesPlay(musicians, instruments) { 
  var music = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) { 
      music = `${musicians[i]} plays ${instruments[j]}`
    }
  }
  return music
}