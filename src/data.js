import { v4 as uuidv4 } from "uuid";
function data() {
  return [
    //TOP 10
    {
      name: 'Bachata En Fukuoka',
      cover: 'https://ia804605.us.archive.org/0/items/09-frio-frio/cover.jpg?cnt=0',
      artist: 'Juan Luis Guerra',
      audio: 'audio/juan-luis/11_-_Bachata_En_Fukuoka.mp3',
      color: [ '#CD607D', '#c94043' ],
      id: uuidv4(),
      active: true
    },
    {
      name: 'Bachata En Fukuoka 2',
      cover: 'https://ia804605.us.archive.org/0/items/09-frio-frio/cover.jpg?cnt=0',
      artist: 'Juan Luis Guerra',
      audio: '11_-_Bachata_En_Fukuoka.mp3',
      color: [ '#CD607D', '#c94043' ],
      id: uuidv4(),
      active: true
    },
    {
      name: 'Bachata En Fukuoka 2',
      cover: 'https://ia804605.us.archive.org/0/items/09-frio-frio/cover.jpg?cnt=0',
      artist: 'Juan Luis Guerra link',
      audio: 'https://ia804605.us.archive.org/0/items/09-frio-frio/01%20-%20Apaga%20Y%20V%C3%A1monos%20%28En%20Vivo%20Estadio%20Ol%C3%ADmpico%20De%20Rep%C3%BAblica%20Dominicana_2012%29.mp3',
      color: [ '#CD607D', '#c94043' ],
      id: uuidv4(),
      active: true
    },
  ];
}

export default data;
