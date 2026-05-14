export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const API_KEY = process.env.VITE_API_FOOTBALL_KEY;

  const LEAGUES = [
    { id: 39, season: 2024 },
    { id: 140, season: 2024 },
    { id: 135, season: 2024 },
    { id: 78, season: 2024 },
    { id: 61, season: 2024 },
  ];

  const allPlayers = [];

  for (const league of LEAGUES) {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/players/topscorers?league=${league.id}&season=${league.season}`,
        { headers: { 'x-apisports-key': API_KEY } }
      );
      const data = await response.json();
      const players = data.response || [];

      players.forEach(({ player, statistics }) => {
        const stat = statistics[0];
        allPlayers.push({
          name: player.name,
          club: stat?.team?.name || 'Unknown',
          nationality: player.nationality,
          position: stat?.games?.position || 'Unknown',
          age: player.age,
          goals: stat?.goals?.total || 0,
          photo: player.photo,
        });
      });
    } catch (err) {
      console.error(`Failed to fetch league ${league.id}:`, err);
    }
  }

  const seen = new Set();
  const unique = allPlayers.filter(p => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  });

  res.status(200).json(unique);
}