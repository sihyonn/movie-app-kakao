import { Store } from "../core/sihyonn";

// 이게 갱신되면 sihyonn에 Store 개념을 통해서 set함수 동작해서 갱신도 되고...
const store = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
  loading: false,
  message: "Search for the movie title!",
});

export default store;
export const searchMovies = async (page) => {
  store.state.loading = true;
  // 들어온 페이지번호로 페이지 갱신
  store.state.page = page;
  if (page === 1) {
    // page가 1이라는건 또 새로운 검색을 해서 들어온거니까 페이지 상태는 1로, 보여졌던 무비들은 비워줌
    store.state.movies = [];
    store.state.message = "";
  }
  try {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
    );
    const { Search, totalResults, Response, Error } = await res.json();

    if (Response === "True") {
      // 바로 Search 하면 추가적인 페이지에 담긴 애들 못가져오니까 전개연산자
      store.state.movies = [...store.state.movies, ...Search];

      // 전체데이터 개수에서 10개씩 가져오니까 10으로 나누면 소수점이라 올려줘야함 => 서버가 가지고 올 수 있는 최대 페이지번호
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (error) {
    console.log("searchMovies error:", error);
  } finally {
    store.state.loading = false;
  }
};
