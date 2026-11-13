console.log("Welcome to Spotify");

const songs = [
  { songName: "Amake amar moto thakte dao", filePath: "1song.mp3", coverPath: "cover1.jpeg", duration: "03:07" },
  { songName: "Benche Thakar Gaan", filePath: "2song.mp3", coverPath: "cover1.jpeg", duration: "04:15" },
  { songName: "Ekhon onek raat", filePath: "3song.mp3", coverPath: "cover1.jpeg", duration: "03:45" },
  { songName: "Amar mawte", filePath: "4song.mp3", coverPath: "cover1.jpeg", duration: "05:30" },
  { songName: "Phiriye Dewar Gaan", filePath: "5song.mp3", coverPath: "cover1.jpeg", duration: "05:52" },
  { songName: "Boba Tunnel", filePath: "6song.mp3", coverPath: "cover1.jpeg", duration: "04:07" },
  { songName: "Basanta Eshe Gache", filePath: "7song.mp3", coverPath: "cover1.jpeg", duration: "04:11" },
  { songName: "Ghawrbari", filePath: "8song.mp3", coverPath: "cover1.jpeg", duration: "04:46" },
  { songName: "Tumi jake bhalobasho", filePath: "9song.mp3", coverPath: "cover1.jpeg", duration: "04:54" }
];

let songIndex = 0;
const audioElement = new Audio(songs[songIndex].filePath);
const masterPlay = document.getElementById('masterPlay');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const myProgressBar = document.getElementById('myProgressBar');
const gif = document.getElementById('gif');
const songItems = document.querySelector('.songItemContainer');
const currentSongName = document.getElementById('currentSongName');
const songPlayButtons = [];

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '--:--';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}

function renderSongs() {
  songs.forEach((song, index) => {
    const item = document.createElement('div');
    item.className = 'songItem';

    const cover = document.createElement('img');
    cover.src = song.coverPath;
    cover.alt = '';

    const name = document.createElement('span');
    name.textContent = song.songName;

    const controls = document.createElement('span');
    controls.className = 'songlistplay';

    const duration = document.createElement('span');
    duration.className = 'timestamp';
    duration.textContent = song.duration;

    const playButton = document.createElement('button');
    playButton.className = 'songPlay';
    playButton.type = 'button';
    playButton.setAttribute('aria-label', `Play ${song.songName}`);
    playButton.innerHTML = '<i class="far fa-play-circle" aria-hidden="true"></i>';
    playButton.addEventListener('click', () => playSong(index));

    controls.append(duration, playButton);
    item.append(cover, name, controls);
    songItems.appendChild(item);
    songPlayButtons.push(playButton);
  });
}

function updatePlaybackUI() {
  const isPlaying = !audioElement.paused && !audioElement.ended;
  masterPlay.classList.toggle('fa-play-circle', !isPlaying);
  masterPlay.classList.toggle('fa-pause-circle', isPlaying);
  gif.style.opacity = isPlaying ? '1' : '0';

  songPlayButtons.forEach((button, index) => {
    const isCurrentSongPlaying = index === songIndex && isPlaying;
    const icon = button.querySelector('i');
    icon.classList.toggle('fa-play-circle', !isCurrentSongPlaying);
    icon.classList.toggle('fa-pause-circle', isCurrentSongPlaying);
    button.setAttribute(
      'aria-label',
      `${isCurrentSongPlaying ? 'Pause' : 'Play'} ${songs[index].songName}`
    );
  });
}

function playSong(index) {
  if (index !== songIndex) {
    songIndex = index;
    audioElement.src = songs[songIndex].filePath;
    audioElement.load();
    currentSongName.textContent = songs[songIndex].songName;
    myProgressBar.value = 0;
  } else if (!audioElement.paused) {
    audioElement.pause();
    return;
  }

  if (audioElement.ended) audioElement.currentTime = 0;
  audioElement.play().catch(error => {
    console.error(`Could not play ${songs[songIndex].filePath}:`, error);
  });
}

renderSongs();
currentSongName.textContent = songs[songIndex].songName;
audioElement.addEventListener('play', updatePlaybackUI);
audioElement.addEventListener('pause', updatePlaybackUI);
audioElement.addEventListener('ended', () => {
  playSong((songIndex + 1) % songs.length);
});
audioElement.addEventListener('loadedmetadata', () => {
  songPlayButtons[songIndex].parentElement.querySelector('.timestamp').textContent =
    formatTime(audioElement.duration);
});
audioElement.addEventListener('timeupdate', () => {
  if (Number.isFinite(audioElement.duration)) {
    myProgressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
  }
});

masterPlay.addEventListener('click', () => {
  if (audioElement.paused) {
    playSong(songIndex);
  } else {
    audioElement.pause();
  }
});

previous.addEventListener('click', () => {
  playSong((songIndex - 1 + songs.length) % songs.length);
});

next.addEventListener('click', () => {
  playSong((songIndex + 1) % songs.length);
});

myProgressBar.addEventListener('input', () => {
  if (Number.isFinite(audioElement.duration)) {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
  }
});
