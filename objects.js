 var playlist = { lone : 'chacka' }

function updatePlaylist(playlist, artistName, songTitle){
//  var playlist['Slowdive'] = 'Alison'
//  var playlist['My Bloody Valentine'] = 'Sometimes'
var playlist = object.assign({},{playlist},{Slowdive: Alison},{['My Bloody Valentine']: Sometimes})
  var playlist = object.assign({},{playlist},{artistName: songTitle})

return playlist
}

function removeFromPlaylist(playlist, artistName){
return delete playlist.artistName
}
