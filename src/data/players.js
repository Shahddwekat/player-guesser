export const PLAYERS = [
  { name: "Mohamed Salah", club: "Liverpool", nationality: "Egyptian", position: "Forward", age: 32, goals: 18, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mohamed_Salah_2018.jpg/440px-Mohamed_Salah_2018.jpg" },
  { name: "Erling Haaland", club: "Man City", nationality: "Norwegian", position: "Forward", age: 24, goals: 27, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Erling_Haaland_2023.jpg/440px-Erling_Haaland_2023.jpg" },
  { name: "Harry Kane", club: "Bayern Munich", nationality: "English", position: "Forward", age: 31, goals: 36, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Harry_Kane_2021.jpg/440px-Harry_Kane_2021.jpg" },
  { name: "Bukayo Saka", club: "Arsenal", nationality: "English", position: "Midfielder", age: 22, goals: 16, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bukayo_Saka_2022.jpg/440px-Bukayo_Saka_2022.jpg" },
  { name: "Vinicius Jr", club: "Real Madrid", nationality: "Brazilian", position: "Forward", age: 24, goals: 24, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Vinicius_Jr_2022.jpg/440px-Vinicius_Jr_2022.jpg" },
  { name: "Kylian Mbappe", club: "Real Madrid", nationality: "French", position: "Forward", age: 25, goals: 44, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019128193931_2019-05-08_Fussball_Champions_League_Finale_Vorbereitung_FC_Liverpool_-_Sven_Simon_-_1D7_0174.jpg/440px-2019128193931_2019-05-08_Fussball_Champions_League_Finale_Vorbereitung_FC_Liverpool_-_Sven_Simon_-_1D7_0174.jpg" },
  { name: "Jude Bellingham", club: "Real Madrid", nationality: "English", position: "Midfielder", age: 21, goals: 23, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Jude_Bellingham_2023.jpg/440px-Jude_Bellingham_2023.jpg" },
  { name: "Cole Palmer", club: "Chelsea", nationality: "English", position: "Midfielder", age: 22, goals: 22, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cole_Palmer_2024.jpg/440px-Cole_Palmer_2024.jpg" },
  { name: "Phil Foden", club: "Man City", nationality: "English", position: "Midfielder", age: 24, goals: 19, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Phil_Foden_2022.jpg/440px-Phil_Foden_2022.jpg" },
  { name: "Son Heung-min", club: "Tottenham", nationality: "South Korean", position: "Forward", age: 32, goals: 17, photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Son_Heung-min_2022.jpg/440px-Son_Heung-min_2022.jpg" },
];

export const CLUE_ORDER = [
  { key: "nationality", label: "Nationality" },
  { key: "position", label: "Position" },
  { key: "age", label: "Age", format: v => `${v} years old` },
  { key: "club", label: "Club" },
  { key: "goals", label: "Goals last season", format: v => `${v} goals` },
];

export const MAX_GUESSES = 6;