interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
}

const song = 'New Song';

const { song: anotherSong, songDuration: duration, details } = audioPlayer;

const { author, year } = details;


// console.log ('Song: ', song);
// console.log ('Song: ', anotherSong);
// console.log ('Duration: ', duration);
// console.log ('Author: ', author);
// console.log ('year: ', year);
// console.table (audioPlayer);

const [, , trunk]: String[] = ['Goku', 'Vegeta', 'Trunk'];


console.error('Personaje 3: ', trunk || 'Personaje no encontrado');




export { };