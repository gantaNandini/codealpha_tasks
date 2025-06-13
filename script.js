const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const playlistItems = document.querySelectorAll("#playlist li");
const downloadBtn = document.getElementById("download");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const themeBtn = document.getElementById("themeBtn");


playlistItems.forEach(item => {
  item.addEventListener('click', () => {
    const songSrc = item.getAttribute('data-src');
    const coverSrc = item.getAttribute('data-cover') || 'covers/default.jpg';

    // Update audio source
    audio.src = musicSrc;

    // Update album art
    cover.src = imagesSrc;

    // Update title and artist
    const text = item.textContent.split(' - ');
    title.textContent = text[0].trim();
    artist.textContent = text[1] ? text[1].trim() : '';

    audio.play();
  });
});
let currentIndex = 0;

function loadSong(index) {
  const song = playlistItems[index];
  title.textContent = song.dataset.title;
  artist.textContent = song.dataset.artist;
  cover.src = song.dataset.cover;
  audio.src = song.dataset.src;
  downloadBtn.href = song.dataset.src;
  currentIndex = index;
}

function playSong() {
  audio.play();
  playBtn.innerHTML = "&#10073;&#10073;";
  cover.style.transform = "rotate(360deg)";
}

function pauseSong() {
  audio.pause();
  playBtn.innerHTML = "&#9658;";
  cover.style.transform = "rotate(0deg)";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) playSong();
  else pauseSong();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % playlistItems.length;
  loadSong(currentIndex);
  playSong();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + playlistItems.length) % playlistItems.length;
  loadSong(currentIndex);
  playSong();
});

playlistItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    loadSong(index);
    playSong();
  });
});

audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent || 0;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

function formatTime(time) {
  if (isNaN(time)) return "0:00";
  const mins = Math.floor(time / 60);
  let secs = Math.floor(time % 60);
  if (secs < 10) secs = "0" + secs;
  return mins + ":" + secs;
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
const coverSrc = item.getAttribute('data-cover') || 'covers/default.jpg';

loadSong(currentIndex);
const playlist = [
  {
    name: "Kathakaadhey - Anirudh Ravichander",
    src: "songs/kathakaadhey.mp3",
     cover: "images/kathakaadhey.jpg"// album image path
  },
  {
    name: "Kola Kalle Ilaa - Sid Sriram",
    src: "songs/kola_kalle_ila.mp3",
    cover: "images/kola_kalle_ila.jpg"
  },
    {
    name: "Kollagottey - Anirudh Ravichander",
    src: "music/Kollagottey - Anirudh Ravichander.m4a",
   cover: "images\Kollagottey - Anirudh Ravichander.jpeg"
  },
   {
    name: "Kumkumala - Pritam, Sid Sriram",
    src: "music/Kumkumala - Pritam, Sid Sriram.m4a",
    cover: "images\Kumkumala - Pritam, Sid Sriram.jpg"
  },
  {
    name: "Love Selfie - Anirudh Ravichander",
    src: "music/Love Selfie - Anirudh Ravichander, Nakash Aziz.m4a",
    cover: "images\Love Selfie - Anirudh Ravichander.jpeg"
  },
    {
    name: "Mastaaru Mastaaru - GV Prakash Kumar",
    src: "music/Mastaaru Mastaaru - GV Prakash Kumar, Shweta Mohan.m4a",
    cover: "images\Mastaaru Mastaaru - GV Prakash Kumar.jpeg"
  },
  
  
];


playlistItems.forEach(item => {
  item.addEventListener('click', () => {
    const songSrc = item.getAttribute('data-src');
    const coverSrc = item.getAttribute('data-cover') || 'covers/default.jpg';

    audio.src = songSrc;
    cover.src = coverSrc;

    const [songTitle, songArtist] = item.innerText.split(' - ');
    title.innerText = songTitle.trim();
    artist.innerText = songArtist ? songArtist.trim() : "";

    audio.play();
  });
});