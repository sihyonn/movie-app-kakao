import { Component } from "../core/sihyonn";
import movieStore, { getMovieDetial } from "../store/movie";

export default class Movie extends Component {
  async render() {
    this.el.classList.add("container", "the-movie");
    // 요기가 스켈레톤이 보여질자리
    this.el.innerHTML = /*html*/ `
      <div class="poster skeleton"></div>
      <div class="specs">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
      </div>
    `;

    await getMovieDetial(history.state.id);
    console.log(movieStore.state.movie);
    const { movie } = movieStore.state;
    const bigPoster = movie.Poster.replace("SX300", "SX700");

    this.el.innerHTML = /* html */ `
      <div 
        style="background-image: url(${bigPoster})" 
        class="poster">
      </div>
      <div class=""specs>
        <div class="title">${movie.Title}</div>
        <div class="labels">
          <span>${movie.Released}</span>
          &nbsp;/&nbsp;
          <span>${movie.Runtime}</span>
          &nbsp;/&nbsp;
          <span>${movie.Country}</span>
        </div>
        <div class="plot">
          ${movie.Plot}
        </div>

        <div>
          <!-- 배열데이터 출력이 아니라 문자열 출력임 -->
          <h3>Ratings</h3>
          ${movie.Ratings.map((rating) => {
            return `<p>${rating.Source} = ${rating.Value}</p>`;
          }).join("")} 
        </div>
        <div>
          <h3>Actors</h3>
          <p>${movie.Actors}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>${movie.Director}</p>
        </div>
        <div>
          <h3>Production</h3>
          <p>${movie.Production}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>${movie.Genre}</p>
        </div>

      </div>
    
    
    `;
  }
}
