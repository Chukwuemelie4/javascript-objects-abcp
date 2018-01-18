 var playlist = { lone : 'chacka' }

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Slowdive']= 'Alison'
  playlist['My Bloody Valentine']= 'Sometimes'
  //playlist = Object.assign({},{playlist},{ [artistName]: songTitle })
playlist[artistName]= songTitle
return playlist
}
//updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

function removeFromPlaylist(playlist, artistName){
playlist = delete playlist.artistName
playlist = { lone: 'cahka'}
return playlist
}
removeFromPlaylist(playlist, 'Slowdive')
