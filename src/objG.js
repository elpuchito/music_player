//program to write the data.js file
raw = [
  "01. Golden.mp3",
  "02. Watermelon Sugar.mp3",
  "03. Adore You.mp3",
  "04. Lights Up.mp3",
  "05. Cherry.mp3",
  "06. Falling.mp3",
  "07. To Be So Lonely.mp3",
  "08. She.mp3",
  "09. Sunflower, Vol. 6.mp3",
  "10. Canyon Moon.mp3",
  "11. Treat People With Kindness.mp3",
  "12. Fine Line.mp3",
];

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
    cover: "https://m.media-amazon.com/images/I/61uPLHJ4nPL._SS500_.jpg",

    artist: "Harry Styles",
    audio: `audio/${name}`,
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
