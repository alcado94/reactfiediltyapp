import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let fakeServerData = {
  user: {
    name: 'David',
    playlists: [
      {
        name: 'My favorites',
        songs: [
          {name: 'Beat it',duration: 1234},
          {name: 'Canneloni Makaroni',duration: 1234},
          {name: 'Rosa helikopter',duration: 1234}
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name: 'Beat it',duration: 1234},
          {name: 'Canneloni Makaroni',duration: 1234},
          {name: 'Rosa helikopter',duration: 1234}
        ]
      },
      {
        name: 'Another Playlist - the best!',
        songs: [
          {name: 'Beat it',duration: 1234},
          {name: 'Canneloni Makaroni',duration: 1234},
          {name: 'Rosa helikopter',duration: 1234}
        ]
      },
      {
        name: 'Another Playlist - yeah!',
        songs: [
          {name: 'Beat it',duration: 1234},
          {name: 'Canneloni Makaroni',duration: 1234},
          {name: 'Rosa helikopter',duration: 1234}
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component{
  render(){
    return (
      <div style={{width: "40%", display: 'inline-block'}}>
        <h2 style={{color: '#fff'}}>{this.props.playlist && 
          this.props.playlist.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component{
  render(){

    let allSongs = this.props.playlist.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, []);

    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0);

    return (
      <div style={{width: "40%", display: 'inline-block'}}>
        <h2 style={{color: '#fff'}}>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}
class Filter extends Component{
  render(){
    return(
      <div>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return (
      <div style={{color: '#fff', display: 'inline-block', width: '25%'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount(){
    setTimeout(() =>{
      this.setState({serverData: fakeServerData});
    },2000);
    
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?  
        <div>
          <h1>{this.state.serverData.user.name}'s Playlist</h1>
         
          <PlaylistCounter playlist={this.state.serverData.user.playlists}/>
          <HoursCounter playlist={this.state.serverData.user.playlists}/>
        
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : <h1>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
