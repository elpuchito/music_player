import { v4 as uuidv4 } from "uuid";
function data() {
  return [
    //TOP 10
    {
      name: "Seven Nation Army",
      cover: "covers/seven_nation_army.jpg",
      artist: "The white sriaos",
      audio: "audio/01 - Seven Nation Army (Album Version).mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },

    {
      name: "Paradise",
      cover: "covers/full_of_stars.jpg",
      artist: "Coldplay",
      audio: "audio/Coldplay - Paradise .mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
      ];
}

export default data;
