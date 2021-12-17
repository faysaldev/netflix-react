
const API_KEY = "879c3466eec0521e8787ab69e8059b15"


const request = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
    fetchActionMovices: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovices: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovices: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovices: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,  
}

export default request;