import axios from 'axios';
// npm install axios
const api = axios.create({ // api 값 받기
  baseURL : 'https://api.themoviedb.org/3/',
  params : {
    api_key : '10923b261ba94d897ac6b81148314a3f',
    language : 'en-US'
  }
});
export const moviesApi = {
  nowPlaying : (page) => {
    console.log(page);
      return(
        api.get('movie/now_playing',{
          params : {page : page}
          // 페이지 별로 데이터 받아온당
        })
      );
    },
  upcoming : (page) => api.get('movie/upcoming',{
      params : {page : page}
  }),
  popular : (page) => api.get('movie/popular',{
      params : {page : page}
  }),
  movieDetail : id =>
    api.get(`movie/${id}`, {
      params : {
        append_to_response: 'videos'
      }
    }),
  search : term =>
    api.get('search/movie', {
      params : {
        query : encodeURIComponent(term)
      }
    })
};
