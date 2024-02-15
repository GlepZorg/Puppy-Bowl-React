import React, { useState } from 'react';

function NewPlayerForm({ addNewPlayer }) {
  const [playerName, setPlayerName] = useState('');
  const [playerBreed, setPlayerBreed] = useState('');
  const [playerStatus, setPlayerStatus] = useState('bench');
  const [playerImage, setPlayerImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPlayer = {
      name: playerName,
      breed: playerBreed,
      status: playerStatus,
      imageUrl: playerImage,
    };
    addNewPlayer(newPlayer);
    setPlayerName('');
    setPlayerBreed('');
    setPlayerStatus('bench');
    setPlayerImage('');
  };

  return (
    <div className="new-player-form-container">
      <form onSubmit={handleSubmit} className="new-player-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          value={playerBreed}
          onChange={(e) => setPlayerBreed(e.target.value)}
        />
        
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={playerStatus}
          onChange={(e) => setPlayerStatus(e.target.value)}
        >
          <option value="field">Field</option>
          <option value="bench">Bench</option>
        </select>
        
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={playerImage}
          onChange={(e) => setPlayerImage(e.target.value)}
        />
        
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;
