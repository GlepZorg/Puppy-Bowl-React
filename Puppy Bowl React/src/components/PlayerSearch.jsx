import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PlayerSearch() {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmittedQuery(searchQuery.toLowerCase());

    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players?name=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      if (data.success) {
        setPlayers(data.data.players);
      } else {
        console.error('Failed to fetch players');
      }
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  
  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(submittedQuery)
  );

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a player..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {filteredPlayers.map(player => ( 
        <div key={player.id} className="player-card">
          <img src={player.imageUrl} alt={player.name} className="player-image" />
          <div className="player-info">
            <h2>{player.name}</h2>
            <p>Breed: {player.breed}</p>
            <p>Team: {player.teamId}</p> 
            <p>Status: {player.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayerSearch;
