
function theBeatlesPlay(musicians, instruments) { 
  var music = [];
  for (var i = 0; i < musicians.length; i++) {
    for (var j = 0; j < instruments.length; j++) { 
      music = `${musicians[i]} plays ${instruments[j]}`
    }
  }
  return music
}