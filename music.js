let play = document.getElementById("play");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");

async function getSongs() {
  let a = await fetch("http://127.0.0.1:5501/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");

  let songs = [];

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }
  return songs;
}



async function main() {
  let songs = await getSongs();
  console.log(songs);

let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];

for(const song of songs){
  songUL.innerHTML = songUL.innerHTML + `<li>
   <div class="songbox">
            <div class="songInfo">
              <div class="songName">${song.replaceAll("20%"," ")}</div>
              <div class="singer">kjhgfyuii</div>
            </div>
            <div class="songPlayBtn">
              <div id="songLiPlay">
                <i class="fa-solid fa-circle-play" style="color: #566573"></i>
              </div>
            </div>
          </div>
  </li>`
}


Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{console.log(e)});








  //play first song
  play.addEventListener("click", () => {
    var audio = new Audio(songs[0]);
    audio.play();
  });
}

main();














// function pauseSong() {
//     audio.pause();
//     songCurrTime = audio.currentTime;
// }

// function playSong() {
//     audio.src = songlist[currentSongIndex][0];
//     songName.innerText = songlist[currentSongIndex][1];
//     singerName.innerText = songlist[currentSongIndex][2];
//     audio.currentTime = songCurrTime;
//     audio.play();
// }

// let url = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';

//     async function fetchMovies() {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const result = await response.json();
//             console.log(result.results[0]);
//             const movies = result.results;

//             function renderMovies() {
//                 const productList = document.getElementById('productList');
//                 productList.innerHTML = '';
//                 movies.forEach((movie) => {
//                     const listItem = document.createElement('div');
//                     listItem.classList.add('todo-item');
//                     listItem.innerHTML = `
//             <div>
//                 <img src="${'https://image.tmdb.org/t/p/original' + movie.poster_path}" alt="...">
//                 <div>
//                      <pre class="heading">${movie.title}</pre>
//                      <h5 class="para">${'⭐'+movie.vote_average}</h5>
//                 </div>
//             </div>  `;
//                     productList.appendChild(listItem);
//                 });
//             }

//             renderMovies();

//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }

//     fetchMovies();
