import React, { useEffect, useState } from 'react'
import axios from '../axios';
import request from '../Request'

function Banner() {

    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(request.fetchNetflixOriginals).catch((err) => console.log(err));

        setMovies(
            response?.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
        ]); 
        
    }

    useEffect(() => {
       fetchData() 
    }, [])
    
    console.log(movies)

    const truncate = (string, n) =>{
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    return (
        <header className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundSize: "cover",
        }}>
            <div className="banner__contants">
                <h1 className="banner__title">{movies?.title || movies?.name ||movies?.original_name}</h1>
                <div className="banner__button">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`${movies?.overview}`,150)}
                </h1>
            </div>

            <div className="banner-fadeBottom" />
        </header>
    )
}

export default Banner
