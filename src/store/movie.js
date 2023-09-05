import { Store } from "../core/sihyonn";

// 이게 갱신되면 sihyonn에 Store 개념을 통해서 set함수 동작해서 갱신도 되고...
const store = new Store({
  searchText: "",
  page: 1,
  movies: [],
});

export default store;
export const searchMovies = async (page) => {
  // 영화제목 검색
  const res = await fetch(
    `https://omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
  );
  const json = await res.json();
  console.log(json);
};
