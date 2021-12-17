import React, { useEffect, useState } from 'react'
import axios from '../axios';
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({title,fetchUrl,itsLarge}) {

    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = 'https://image.tmdb.org/t/p/original/';

    const fetchData = async () => {
        const data = await axios.get(fetchUrl).catch((err)=> console.log(err))
        setMovies(data.data.results);
    }

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };


    // const openTrailer = (doc) => {
    //     if (trailerUrl) {
    //         setTrailerUrl("");
    //     } else {
    //         movieTrailer(doc?.name || "")
    //         .then((url) => {
    //             const urlParams = new URLSearchParams(new URL(url).search);
    //             urlParams.get('v')
    //         })
    //         .catch((err) => console.log(err))
    //     }

    // }


    const openTrailer=(doc) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(doc?.title)
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((err) => console.log(err))
        }
    }

    useEffect(() => {
        fetchData();
    },[fetchUrl])

    
    return (
        <div className="row">
            {title}

            <div className="all__movies">
                {movies?.map((doc) => (
                    <img onClick={() => openTrailer(doc)} key={doc.id} className={`rowImg ${itsLarge && "its__large"}`} src={`${base_url}${itsLarge ? doc.poster_path : doc.backdrop_path}`} alt="" />
                ))}
                
                <div className="fadeIn__movie" />
            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}


        </div>
    )
}

export default Row
