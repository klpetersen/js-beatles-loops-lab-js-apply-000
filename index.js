
function theBeatlesPlay(musicians, instruments) { 
  var music = [];
  for (var i = 0; i < musicians.length; i++) {
    music.push(`${musicians[0]} plays ${instruments[0]}`)
  }
  return music
}