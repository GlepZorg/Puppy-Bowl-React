import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <Link to="/">Home</Link>
        <Link to="/players">All Players</Link>
        <Link to="/new-player">Add New Player</Link>
      </NavBar>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/player-search" element={<SinglePlayer />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
