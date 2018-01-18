 var playlist = { lone : 'chacka' }

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Slowdive']= 'Alison'
  playlist['My Bloody Valentine']= 'Sometimes'
  var playlist = Object.assign({},{playlist},{artistName: songTitle})

return playlist
}

function removeFromPlaylist(playlist, artistName){
return delete playlist.artistName
}
