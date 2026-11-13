console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('1song.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
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
  }
  else{
    audioElement.pause();
  }
})

audioElement.addEventListener('play',()=>{
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.opacity=1;
});

audioElement.addEventListener('pause',()=>{
  masterPlay.classList.remove('fa-pause-circle');
  masterPlay.classList.add('fa-play-circle');
  gif.style.opacity=0;
});

audioElement.addEventListener('ended',()=>{
  masterPlay.classList.remove('fa-pause-circle');
  masterPlay.classList.add('fa-play-circle');
  gif.style.opacity=0;
});

//listen to events
audioElement.addEventListener('timeupdate',()=>{

  //update seekbar
  progress = parseInt(audioElement.currentTime/audioElement.duration*100);
 
  myProgressBar.value = progress;
})