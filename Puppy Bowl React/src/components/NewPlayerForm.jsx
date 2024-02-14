import React, { useState } from 'react';
import '../../src/App.css';

function NewPlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('field'); 
  const [imageUrl, setImageUrl] = useState('');
  const [teamId, setTeamId] = useState(''); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const playerData = {
        name,
        breed,
        status,
        imageUrl,
        teamId, 
      };

      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });

      const result = await response.json();
      if (result.success) {
        
        console.log('Player created:', result.data.newPlayer);
      } else {
        
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Failed to create a new player:', error);
    }
  };

  return (
    <div className='new-player-form-container'>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="breed">Breed:</label>
        <input
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="field">Field</option>
          <option value="bench">Bench</option>
        </select>
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="teamId">Team ID (optional):</label>
        <input
          id="teamId"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
        />
      </div>
      <button type="submit">Add Player</button>
    </form>
    </div>
    
  );
}

export default NewPlayerForm;
