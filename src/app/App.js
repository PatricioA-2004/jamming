import React from 'react';
import logo from '../logo.svg';
import { Counter } from '../features/counter/Counter';
import './App.css';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <SearchBar className="SearchBar" />
      </div>
    </div>
  );
}

export default App;
