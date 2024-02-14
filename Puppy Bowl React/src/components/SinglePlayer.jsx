import React, { useState } from 'react';
import '../../src/App.css';

function SinglePlayer() {
  const [searchId, setSearchId] = useState('');
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError(''); 
    if (!searchId) {
      setError('Please enter a valid ID.');
      return;
    }

    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${searchId}`);
      if (!response.ok) throw new Error('Player not found.');

      const data = await response.json();
      if (data && data.data) {
        setPlayer(data.data);
      } else {
        throw new Error('Player not found.');
      }
    } catch (err) {
      setError(err.message);
      setPlayer(null);
    }
  };

  return (
    <div className="single-player-container">
      <input
        type="text"
        placeholder="Enter player ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {player && (
        <div>
          <img src={player.imageUrl} alt={player.name} style={{ width: "100px", height: "100px" }} />
          <h2>{player.name}</h2>
          <p>Breed: {player.breed}</p>
        </div>
      )}
    </div>
  );
}

export default SinglePlayer;
