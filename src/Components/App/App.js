import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
        name: 'Walk All Over You',
        artist: 'AC/DC',
        album: 'Highway to Hell',
        id: 1},
        {name: 'Thunderstruck',
        artist: 'AC/DC',
        album: 'Razors Edge',
        id: 2},
        {name: 'Stabbing the Drama',
        artist: 'Soilwork',
        album: 'Stabbing the Drama',
        id: 3
      }],
        playlistName: 'UnoDosTres',
        playlistTracks: [{
          name: 'PlaylistTrackName1',
          artist: 'PlaylistArtist1',
          album: 'PlaylistAlbum1',
          id: 11
        },
        {
          name: 'PlaylistTrackName2',
          artist: 'PlaylistArtist2',
          album: 'PlaylistAlbum2',
          id: 22
        },
        {
          name: 'PlaylistTrackName3',
          artist: 'PlaylistArtist3',
          album: 'PlaylistAlbum3',
          id: 33
        }]
      };
      // bindings
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
  }
  
  addTrack(track) {
    let playlistTracks = this.state.playlistTracks;
    
    if (this.state.playlistTracks.find(addedTrack => addedTrack.id === track.id)) {
      return;
    } 
    
    playlistTracks.push(track);
    
    this.setState({playlistTracks: playlistTracks});
    
  }
  removeTrack(track) {
    let playlistTracks = this.state.playlistTracks;
    
    playlistTracks = playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
        
    this.setState({playlistTracks: playlistTracks});

  }

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
         <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
        </div>
      </div>
    </div>
    )
  }
}