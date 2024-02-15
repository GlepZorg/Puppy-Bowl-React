import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SinglePlayer() {
  const [player, setPlayer] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${id}`);
        const data = await response.json();
        if (data.success) {
          setPlayer(data.data.player);
        } else {
          throw new Error(data.error.message);
        }
      } catch (error) {
        console.error("Error fetching player details:", error);
      }
    };

    fetchPlayer();
  }, [id]); 

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className='single-player-container'>
      <h1>{player.name}</h1>
      <p>Breed: {player.breed}</p>
      <p>Team: {player.teamId}</p> 
      <p>Status: {player.status}</p>
    </div>
  );
}

export default SinglePlayer;
