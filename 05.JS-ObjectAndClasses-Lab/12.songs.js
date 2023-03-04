function solve(input) {
  let songs = [];
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  for (let i = 1; i < Number(input[0]) + 1; i++) {
    let [typeList, name, time] = input[i].split("_");
    songs.push(new Song(typeList, name, time));
  }

  function printSongs(typeList, songs) {
    if (typeList === "all") {
      songs.forEach((song) => console.log(song.name))
    } else {
        songs.filter((song) => song.typeList === typeList).forEach(song => console.log(song.name))
    }
  }
  printSongs(input[input.length - 1], songs);
};
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    

    );
