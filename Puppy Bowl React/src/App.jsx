import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PlayerSearch from './components/PlayerSearch';

function App() {
  const [players, setPlayers] = useState([]);
  const addNewPlayer = async (newPlayer) => {
    
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlayer),
      });

      const data = await response.json();

      if (data.success) {
        setPlayers([...players, data.newPlayer]);
      } else {
        throw new Error('Failed to create player');
      }
    } catch (error) {
      console.error("Error creating player:", error);
    }
  };

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/new-player" element={<NewPlayerForm addNewPlayer={addNewPlayer} />} />
        <Route path="/player-search" element={<PlayerSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
