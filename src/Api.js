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
  movieList : (page, pagename) => api.get(`movie/${pagename}`,{
    params : {page : page}
  }),
  nowPlaying : (page) => {
    console.log('page - '+page);
      return(
        api.get('movie/now_playing',{
          params : {page : page}
          // 페이지 별로 데이터 받아온당;
        })
      );
    },
  // 페이지 별로 데이터 받아온당
  upComing : (page) => api.get('movie/upcoming',{
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
  search : (term,page) =>
    api.get('search/movie', {
      params : {
        query : encodeURIComponent(term),
        page: page
      }
    }),
  genresList : () => api.get('genre/movie/list',{
  }),
  genresMovie : (genresId) => api.get(`discover/movie/`,{
    params : {
      with_genres : encodeURIComponent(genresId)
    }
  }),
};
// https://api.themoviedb.org/3/discover/movie?api_key=10923b261ba94d897ac6b81148314a3f&language=en-US&  with_genres=16
// https://api.themoviedb.org/3/search/movie?api_key=10923b261ba94d897ac6b81148314a3f&language=en-US&    query=asd