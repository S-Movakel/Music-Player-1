"use strict";

const musicData = [
  {
    backgroundImage: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    posterUrl: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    title: "Taghdir",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/01. Shadmehr Aghili - Taghdir.ogg",
  },
  {
    backgroundImage: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    posterUrl: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    title: "Ye Kari Kon",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/03. Shadmehr Aghili - Ye Kari Kon.ogg",
  },
  {
    backgroundImage: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    posterUrl: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    title: "Tars",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/07. Shadmehr Aghili - Tars.ogg",
  },
  {
    backgroundImage: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    posterUrl: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    title: "Royaye Ma",
    album: "",
    year: 1402,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmehr-Royaye-ma.ogg",
  },
  {
    backgroundImage: "./assets/ebi-shadmher-ye-dokhtar.jpg",
    posterUrl: "./assets/img/ebi-shadmher-ye-dokhtar.jpg",
    title: "Ye Dokhtar",
    album: "",
    year: 1392,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmher-Ye-dokhtar.ogg",
  },
  {
    backgroundImage: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    posterUrl: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    title: "Tasvir",
    album: "Tasvir",
    year: 1396,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/Shadmehr-tasvir-01-tasvir.ogg",
  },
  {
    backgroundImage: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    posterUrl: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    title: "Taghdir",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/01. Shadmehr Aghili - Taghdir.ogg",
  },
  {
    backgroundImage: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    posterUrl: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    title: "Ye Kari Kon",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/03. Shadmehr Aghili - Ye Kari Kon.ogg",
  },
  {
    backgroundImage: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    posterUrl: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    title: "Tars",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/07. Shadmehr Aghili - Tars.ogg",
  },
  {
    backgroundImage: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    posterUrl: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    title: "Royaye Ma",
    album: "",
    year: 1402,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmehr-Royaye-ma.ogg",
  },
  {
    backgroundImage: "./assets/ebi-shadmher-ye-dokhtar.jpg",
    posterUrl: "./assets/img/ebi-shadmher-ye-dokhtar.jpg",
    title: "Ye Dokhtar",
    album: "",
    year: 1392,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmher-Ye-dokhtar.ogg",
  },
  {
    backgroundImage: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    posterUrl: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    title: "Tasvir",
    album: "Tasvir",
    year: 1396,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/Shadmehr-tasvir-01-tasvir.ogg",
  },
  {
    backgroundImage: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    posterUrl: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    title: "Taghdir",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/01. Shadmehr Aghili - Taghdir.ogg",
  },
  {
    backgroundImage: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    posterUrl: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    title: "Ye Kari Kon",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/03. Shadmehr Aghili - Ye Kari Kon.ogg",
  },
  {
    backgroundImage: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    posterUrl: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    title: "Tars",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/07. Shadmehr Aghili - Tars.ogg",
  },
  {
    backgroundImage: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    posterUrl: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    title: "Royaye Ma",
    album: "",
    year: 1402,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmehr-Royaye-ma.ogg",
  },
  {
    backgroundImage: "./assets/ebi-shadmher-ye-dokhtar.jpg",
    posterUrl: "./assets/img/ebi-shadmher-ye-dokhtar.jpg",
    title: "Ye Dokhtar",
    album: "",
    year: 1392,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmher-Ye-dokhtar.ogg",
  },
  {
    backgroundImage: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    posterUrl: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    title: "Tasvir",
    album: "Tasvir",
    year: 1396,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/Shadmehr-tasvir-01-tasvir.ogg",
  },
  {
    backgroundImage: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    posterUrl: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    title: "Taghdir",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/01. Shadmehr Aghili - Taghdir.ogg",
  },
  {
    backgroundImage: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    posterUrl: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    title: "Ye Kari Kon",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/03. Shadmehr Aghili - Ye Kari Kon.ogg",
  },
  {
    backgroundImage: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    posterUrl: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    title: "Tars",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/07. Shadmehr Aghili - Tars.ogg",
  },
  {
    backgroundImage: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    posterUrl: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    title: "Royaye Ma",
    album: "",
    year: 1402,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmehr-Royaye-ma.ogg",
  },
  {
    backgroundImage: "./assets/ebi-shadmher-ye-dokhtar.jpg",
    posterUrl: "./assets/img/ebi-shadmher-ye-dokhtar.jpg",
    title: "Ye Dokhtar",
    album: "",
    year: 1392,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmher-Ye-dokhtar.ogg",
  },
  {
    backgroundImage: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    posterUrl: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    title: "Tasvir",
    album: "Tasvir",
    year: 1396,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/Shadmehr-tasvir-01-tasvir.ogg",
  },
  {
    backgroundImage: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    posterUrl: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    title: "Taghdir",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/01. Shadmehr Aghili - Taghdir.ogg",
  },
  {
    backgroundImage: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    posterUrl: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    title: "Ye Kari Kon",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/03. Shadmehr Aghili - Ye Kari Kon.ogg",
  },
  {
    backgroundImage: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    posterUrl: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    title: "Tars",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/07. Shadmehr Aghili - Tars.ogg",
  },
  {
    backgroundImage: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    posterUrl: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    title: "Royaye Ma",
    album: "",
    year: 1402,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmehr-Royaye-ma.ogg",
  },
  {
    backgroundImage: "./assets/ebi-shadmher-ye-dokhtar.jpg",
    posterUrl: "./assets/img/ebi-shadmher-ye-dokhtar.jpg",
    title: "Ye Dokhtar",
    album: "",
    year: 1392,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmher-Ye-dokhtar.ogg",
  },
  {
    backgroundImage: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    posterUrl: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    title: "Tasvir",
    album: "Tasvir",
    year: 1396,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/Shadmehr-tasvir-01-tasvir.ogg",
  },
  {
    backgroundImage: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    posterUrl: "./assets/img/01-Shadmehr-Taghdir-taghdir.jpg",
    title: "Taghdir",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/01. Shadmehr Aghili - Taghdir.ogg",
  },
  {
    backgroundImage: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    posterUrl: "./assets/img/03-Shadmehr-Taghdir-ye-kari-kon.jpg",
    title: "Ye Kari Kon",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/03. Shadmehr Aghili - Ye Kari Kon.ogg",
  },
  {
    backgroundImage: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    posterUrl: "./assets/img/07-Shadmehr-Taghdir-tars.jpg",
    title: "Tars",
    album: "Taghdir",
    year: 1388,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/07. Shadmehr Aghili - Tars.ogg",
  },
  {
    backgroundImage: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    posterUrl: "./assets/img/ebi-shadmher-royaye-ma.jpg",
    title: "Royaye Ma",
    album: "",
    year: 1402,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmehr-Royaye-ma.ogg",
  },
  {
    backgroundImage: "./assets/ebi-shadmher-ye-dokhtar.jpg",
    posterUrl: "./assets/img/ebi-shadmher-ye-dokhtar.jpg",
    title: "Ye Dokhtar",
    album: "",
    year: 1392,
    artist: "Ebi & Shadmehr Aghili",
    musicPath: "./assets/music/Ebi-shadmher-Ye-dokhtar.ogg",
  },
  {
    backgroundImage: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    posterUrl: "./assets/img/shadmehr-tasvir-01-tasvir.jpg",
    title: "Tasvir",
    album: "Tasvir",
    year: 1396,
    artist: "Shadmehr Aghili",
    musicPath: "./assets/music/Shadmehr-tasvir-01-tasvir.ogg",
  },
];

// Add eventListener on all elements that are passed
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Add all music in playlist from musicdata
const playlist = document.querySelector("[data-music-list]");
const songs = document.querySelector("[data-songs]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
    <div class="card-music ${
      i === 0 ? "playing" : ""
    }" data-playlist-item="${i}">
        <span class="item-icon">
            <span class="material-symbols-rounded">equalizer</span>
        </span>
        <figure>
            <div class="overlay">
                <div>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="  18"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 11l5 5l5 -5" />
                            <path d="M12 4l0 12" />
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                    </a>
                </div>
            </div>
            <img src="${musicData[i].posterUrl}" alt="">
        </figure>
        <div>
            <div>
                <span class="music-name" data-title>${musicData[i].title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M7 12a5 5 0 0 1 5 -5" />
                    <path d="M12 17a5 5 0 0 0 5 -5" />
                </svg>
            </div>
            <span class="singer" data-artist>${musicData[i].artist}</span>
        </div>
    </div>
  `;
}

function loadDurations() {
  for (let i = 0; i < musicData.length; i++) {
    const audio = new Audio(musicData[i].musicPath);

    audio.addEventListener("loadedmetadata", () => {
      const duration = audio.duration;
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

      const timeSpans = document.querySelectorAll("[data-time]");
      if (timeSpans[i]) {
        timeSpans[i].textContent = formattedTime;
      }
    });

    audio.addEventListener("error", () => {
      console.error(`Error loading: ${musicData[i].title}`);
    });
  }
}

loadDurations();

const songsList = musicData
  .map(
    (song, index) => `
  <li data-index="${index}">
    <a href="#">
      <div>
        <span data-title>${index + 1} - ${song.title}</span>
        <span data-artist>${song.artist}</span>
      </div>
      <span data-time>Loading...</span>
    </a>
  </li>
`
  )
  .join("");

songs.innerHTML = songsList;

const MusicsNumber = document.querySelectorAll(".all-music");
MusicsNumber.forEach((val) => {
  val.textContent = musicData.length;
});

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlayListItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
};

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlayListItem();
});

// Player
// change All visual information on player, based on current music
const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-player-title]");
const playerAlbum = document.querySelector("[data-player-album]");
const playerYear = document.querySelector("[data-player-year]");
const playerArtist = document.querySelector("[data-player-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute(
    "alt",
    `${musicData[currentMusic].title} Album Poster`
  );
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
};

addEventOnElements(playlistItems, "click", changePlayerInfo);

// update Player duration
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

// pass seconds and get timecode formate
const getTimeCode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - minutes * 60);
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
};

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimeCode(Number(playerSeekRange.max));
};

audioSource.addEventListener("loadeddata", updateDuration);

// play Music
// play and pause music when click on play button
const playBtn = document.querySelector("[data-play-btn]");
let playInterval;
const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
};

playBtn.addEventListener("click", playMusic);

// update running time while playimg music
const playerRunningTime = document.querySelector("[data-running-time]");
const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimeCode(audioSource.currentTime);
  updateRangeFill();
  isMusicEnd();
};

// Range Fill Width
// change rangefill width, while changing range value
const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];
  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
};

addEventOnElements(ranges, "input", updateRangeFill);

// Seek Music
// seek music While changing player seek range
const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimeCode(playerSeekRange.value);
};

playerSeekRange.addEventListener("input", seek);

// End Music
const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimeCode(audioSource.currentTime);
    updateRangeFill();
  }
};

// Skip to next music
const playerSkipNextBtn = document.querySelector("[data-skip-next]");
const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? (currentMusic = 0) : currentMusic++;
  }

  changePlayerInfo();
  changePlayListItem();
};

playerSkipNextBtn.addEventListener("click", skipNext);

// Skip to previous muisc
const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");
const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? (currentMusic = musicData.length - 1) : currentMusic--;
  }

  changePlayerInfo();
  changePlayListItem();
};

playerSkipPrevBtn.addEventListener("click", skipPrev);
audioSource.addEventListener("ended", skipNext);

// Shuffle music
// get random number for shuffle
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);
const shuffleMusic = () => (currentMusic = getRandomMusic());
const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
};

playerShuffleBtn.addEventListener("click", shuffle);

// Repeat Music
const playerRepeatBtn = document.querySelector("[data-repeat]");
const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
};

playerRepeatBtn.addEventListener("click", repeat);

// Music Volume
// increase or decrease music volume when change the volume range
const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;
  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
};

playerVolumeRange.addEventListener("input", changeVolume);

// Muted music
const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
};

playerVolumeBtn.addEventListener("click", muteVolume);
