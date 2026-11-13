console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('1song.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
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
//handle play/pause click
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
  }
})
//listen to events
myProgressBar.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
  //update seekbar
})