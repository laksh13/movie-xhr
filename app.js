//document.getElementById("button").addEventListener("click", loadPopularMovies);
document.addEventListener("DOMContentLoaded", loadPopularMovies);

function loadPopularMovies() {
  const xhr = new XMLHttpRequest();
  const api =
    "https://api.themoviedb.org/3/discover/movie?api_key=a294dcf5e61d2a4664bf53f312648ff6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  xhr.open("GET", api, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const posterImagePrefix = "https://image.tmdb.org/t/p/w220_and_h330_face";
      const movies = JSON.parse(xhr.responseText);

      let output = "";
      movies.results.forEach((movie) => {
        console.log(movie);
        /* output += `
      <ul>
        <li>Title: ${movie.original_title}</li>
        <li>ID: ${movie.id}</li>
        <li>Release Date: ${movie.release_date}</li>
        <li>Poster: https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}</li>
      </ul>
      `; */
        output += `
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img src="${posterImagePrefix}${movie.poster_path}" class="card-img-top" alt="Poster Image">
            <div class="card-body">
            <h5 class="card-title">${movie.original_title}</h5>
              <p class="card-text">${movie.overview}</p>
            </div>
          </div>
        </div>
      `;
      });

      document.getElementById("movies").innerHTML = output;
    }
  };

  xhr.send();
}
