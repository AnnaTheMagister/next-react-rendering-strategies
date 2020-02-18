export const showList = [
  { id: 36959, name: "A Wedding and a Murder" },
  { id: 39235, name: "A Confession" },
  { id: 37579, name: "The A List" },
  { id: 42809, name: "Exhibit A" },
  { id: 1197, name: "A Haunting" },
  { id: 11402, name: "The A Word" },
  { id: 38339, name: "A Teacher" },
  { id: 1058, name: "The A-Team" },
  { id: 18182, name: "Just a Man, Not a Magician" },
  { id: 3773, name: "Man in a Suitcase" },
  { id: 41559, name: "O Escolhido" },
  { id: 36833, name: "O-Negative" },
  { id: 7032, name: "O Negócio" },
  { id: 34437, name: "O Mecanismo" },
  { id: 19220, name: "O Hayat Benim" },
  { id: 15763, name: "O Rei do Gado" },
  { id: 28311, name: "O Caçador" },
  { id: 23671, name: "O Clone" },
  { id: 962, name: "Hawaii Five-O" },
  { id: 19678, name: "P-Valley" },
  { id: 5122, name: "Przypadki Cezarego P." },
  { id: 29699, name: "La Familia P. Luche" },
  { id: 22667, name: "P. King Duckling" },
  { id: 38435, name: "Chris P. Duck" },
  { id: 26781, name: "P. Diddy Presents the Bad Boys of Comedy" },
  { id: 33588, name: "Hightown" }
];

export default (req, res) => {
  res.status(200).json(showList);
};
