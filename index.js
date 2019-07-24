
function theBeatlesPlay(musicians, instruments) { 
  music = [];
  for (var i = 0; i < musicians.length; i++) {
    music = music.push(`${musicians[0]} plays ${instruments[0]}`)
  }
  return music
}