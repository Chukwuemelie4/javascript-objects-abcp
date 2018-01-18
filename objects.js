 var playlist = { lone : 'chacka' }

function updatePlaylist(playlist, artistName, songTitle){
  var playlist['Slowdive']= 'Alison'
  var playlist['My Bloody Valentine']= 'Sometimes'
  //playlist = Object.assign({},{playlist},{ [artistName]: songTitle })
var playlist[artistName]= songTitle
return playlist
}
//updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

function removeFromPlaylist(playlist, artistName){
return delete playlist.artistName
}

removeFromPlaylist(playlist, 'Slowdive')