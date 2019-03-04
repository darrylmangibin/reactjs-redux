import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'song 1', duration: '4:05' },
    { title: 'song 2', duration: '3:25' },
    { title: 'song 3', duration: '5:35' },
    { title: 'song 4', duration: '2:56' },
    { title: 'song 5', duration: '4:33' } 
  ];
}

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});