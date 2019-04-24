import React from 'react';
import SongList from './SongList';

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="ui container grid">
        <div className="row">
          <div className="column eight wide">
            <SongList />
          </div>
        </div>
      </div>
    );
  };
};

export default App;