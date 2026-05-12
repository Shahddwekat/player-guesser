export const PLAYERS = [
  { name: "Mohamed Salah", club: "Liverpool", nationality: "Egyptian", position: "Forward", age: 32, goals: 18 },
  { name: "Erling Haaland", club: "Man City", nationality: "Norwegian", position: "Forward", age: 24, goals: 27 },
  { name: "Harry Kane", club: "Bayern Munich", nationality: "English", position: "Forward", age: 31, goals: 36 },
  { name: "Bukayo Saka", club: "Arsenal", nationality: "English", position: "Midfielder", age: 22, goals: 16 },
  { name: "Vinicius Jr", club: "Real Madrid", nationality: "Brazilian", position: "Forward", age: 24, goals: 24 },
  { name: "Kylian Mbappe", club: "Real Madrid", nationality: "French", position: "Forward", age: 25, goals: 44 },
  { name: "Jude Bellingham", club: "Real Madrid", nationality: "English", position: "Midfielder", age: 21, goals: 23 },
  { name: "Cole Palmer", club: "Chelsea", nationality: "English", position: "Midfielder", age: 22, goals: 22 },
  { name: "Phil Foden", club: "Man City", nationality: "English", position: "Midfielder", age: 24, goals: 19 },
  { name: "Son Heung-min", club: "Tottenham", nationality: "South Korean", position: "Forward", age: 32, goals: 17 },
];

export const CLUE_ORDER = [
  { key: "position", label: "Position" },
  { key: "nationality", label: "Nationality" },
  { key: "age", label: "Age", format: v => `${v} years old` },
  { key: "club", label: "Club" },
  { key: "goals", label: "Goals last season", format: v => `${v} goals` },
];

export const MAX_GUESSES = 6;