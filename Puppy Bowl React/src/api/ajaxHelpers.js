export async function fetchAllPlayers() {
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players');
      if (!response.ok) {
        throw new Error('Failed to fetch players');
      }
      const data = await response.json();
      return data.players;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return [];
    }
  }
  