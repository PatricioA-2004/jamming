import React from 'react';
import './App.css';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import PlayList from '../components/Playlist';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <SearchBar className="search-bar" />
        <div className="app-playlist">
          <SearchResults className="search-results" />
          <PlayList className="playlist" />
        </div>
      </main>
    </div>
  );
}

export default App;
