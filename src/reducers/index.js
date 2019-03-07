import { combineReducers } from 'redux';

const songsReducers = () => {
  return [
    { title: 'Song 1', duration: '4:09' },
    { title: 'Song 2', duration: '4:31' },
    { title: 'Song 3', duration: '3:42' },
    { title: 'Song 4', duration: '5:21' },
    { title: 'Song 5', duration: '2:45' }
  ];
}

const selectedSongReducer = (selectedSong = null, action) => {
  switch(action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default: 
      return selectedSong;
  }
}

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer
});