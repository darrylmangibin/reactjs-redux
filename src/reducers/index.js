import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Song 1', duration: '3:51' },
    { title: 'Song 2', duration: '4:16' },
    { title: 'Song 3', duration: '5:32' },
    { title: 'Song 4', duration: '2:56' },
    { title: 'Song 5', duration: '4:05' },
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload
    default:
      return selectedSong
  }
}


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})