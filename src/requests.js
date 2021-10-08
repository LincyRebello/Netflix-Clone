const API_KEY = "a7796224672d76abd4a9a3a2075856d8";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOrignials: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchDrama: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchAnimation: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    fetchCrime: `/discover/tv?api_key=${API_KEY}&with_genres=80`
}


export default requests;