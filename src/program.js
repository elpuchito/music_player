//program to write the data.js file
// raw = [
//   "01. Golden.mp3",
//   "02. Watermelon Sugar.mp3",
//   "03. Adore You.mp3",
//   "04. Lights Up.mp3",
//   "05. Cherry.mp3",
//   "06. Falling.mp3",
//   "07. To Be So Lonely.mp3",
//   "08. She.mp3",
//   "09. Sunflower, Vol. 6.mp3",
//   "10. Canyon Moon.mp3",
//   "11. Treat People With Kindness.mp3",
//   "12. Fine Line.mp3",
// ];
raw = [
  "11_Bachata_En_Fukuoka.mp3",
  "04_La_Llave_De_Mi_Corazon.mp3",
  "07_El_Niagra_En_Bicicleta.mp3",
  "05_Mi_Bendicion.mp3",
  "14_Ojala_Que_Llueva_Cafe.mp3",
  "15_A_Pedir_Su_Mano__Juan_Luis_Guerra.mp3",
];
["04 Ella Es Mi Fiesta.mp3", "02 Cuando Nos Volvamos A Encontrar.mp3"];

["Bomba Estéreo Somos Dos.mp3", "Legend Effect Tú Si El Gerard Gaby.mp3"];

["08 Get Lucky.mp3", "06 Lose Yourself To Dance.mp3", "05 Instant Crush.mp3"];

["Maluma - ADMV.mp3"];

const names = raw.map((s) => s.slice(3, -4));
// console.log(names);

//function

// const audiopath = raw.map((name) => `audio/${name}`);
// console.log(audiopath);
// audiopath.forEach(function (item) {
//   console.log(item);
// });
let uid = "uuidv4()";

const obj = raw.map((name) => [
  {
    name: name.slice(3, -4),
    cover:
      "https://ia804605.us.archive.org/0/items/09-frio-frio/cover.jpg?cnt=0",

    artist: "Juan Luis Guerra",
    audio: `public/audio/juan-luis/${name}`,
    
    color: ["#CD607D", "#c94043"],
    id: "uuidv4()",
    active: false,
  },
]);

finalArray = [].concat.apply([], obj);
// console.log(finalArray);

// finalfinalarray = finalArray.map((item) =>
//   item.id == "uuidv4()" ? { ...item, id: uuidv4() } : ""
// );

console.log(finalArray);
