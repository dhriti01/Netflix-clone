const APIKEY = process.env.REACT_APP_TMDB_API_KEY; //API key to fetch movies from TmDb

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchTopActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchTopComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchTopHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchTopRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchTopDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
  };
  
  export default requests;