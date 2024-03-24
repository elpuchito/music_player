import { v4 as uuidv4 } from "uuid";
function data() {
  return [
    //TOP 10

    {
      name: 'Bachata En Fukuoka',
      cover: 'https://ia804605.us.archive.org/0/items/09-frio-frio/cover.jpg?cnt=0',
      artist: 'Juan Luis Guerra',
      audio: '../public/audio/juan-luis/11_-_Bachata_En_Fukuoka.mp3',
      color: [ '#CD607D', '#c94043' ],
      id: uuidv4(),
      active: true
    },
    
  ];
}

export default data;
