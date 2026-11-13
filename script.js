console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('1song.mp3');
let masterPlay = document.getElementById('masterPlay');
let songs =[
    {songName:"Amake amar moto thakte dao", filePath:"1song.mp3", coverPath:"cover1.jpg"},
    {songName:"Amake amar moto thakte dao", filePath:"1song.mp3", coverPath:"cover1.jpg"},
    {songName:"Amake amar moto thakte dao", filePath:"1song.mp3", coverPath:"cover1.jpg"},
  {songName:"Amake amar moto thakte dao", filePath:"1song.mp3", coverPath:"cover1.jpg"},
    {songName:"Amake amar moto thakte dao", filePath:"1song.mp3", coverPath:"cover1.jpg"},
    {songName:"Amake amar moto thakte dao", filePath:"1song.mp3", coverPath:"cover1.jpg"},
    {songName:"Amake amar moto thakte dao", filePath:"1song.mp3", coverPath:"cover1.jpg"},
    {songName:"Amake amar moto thakte dao", filePath:"1song.mp3", coverPath:"cover1.jpg"},
]

// audioElement.play();
//listen to events
document.addEventListener('time');