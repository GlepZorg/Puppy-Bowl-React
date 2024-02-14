import React, { useState, useEffect } from 'react';
import '../../src/App.css'; 

function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players');
      const data = await response.json();
      if (data.success) {
        setPlayers(data.data.players); 
      } else {
        throw new Error('Failed to fetch players');
      }
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  const handleDelete = async (playerId) => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${playerId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        
        setPlayers(players.filter(player => player.id !== playerId));
      } else {
        throw new Error('Failed to delete the player');
      }
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  return (
    <div className="all-players-container">
      {players.map(player => (
        <div key={player.id} className="player-card">
          <img src={player.imageUrl} alt={player.name} className="player-image" />
          <div className="player-info">
            <h2>{player.name}</h2>
            <p>Breed: {player.breed}</p>
            <button onClick={() => handleDelete(player.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllPlayers;