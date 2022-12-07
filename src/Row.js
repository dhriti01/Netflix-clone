import React from "react";
import YouTube from 'react-youtube';
import axios from "./axios";
import axiosYT from "./youTubeAPI";
import movieTrailer from 'movie-trailer';
import ReactPlayer from 'react-player';
import "./Row.css";

function Row(props){

    const [movies, setMovies] = React.useState([]);
    const [trailerURL, setTrailerURL] = React.useState("");
    const [movieId, setMovieId] = React.useState('');
    const ref = React.useRef(null);

    React.useEffect(()=>{
        async function fetchData(){
            //console.log(props.fetchURL);
            const request=await axios.get(props.fetchURL);
            //console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [props.fetchURL]); //whenever change in fetchURL (or any outside variable used inside useEffect fn), the function gets invoked

    //console.log(movies);

    //Read documentations of react-youtube
    //when trailerURL defined, then only show the YT video
    // const opts = {
    //     height: "390",
    //     width: "100%",
    //     host: 'http://www.youtube.com',
    //     playerVars: {
    //         autoplay: 1,
    //         origin: 'https://localhost:3000',
    //     },
    // };

    // const handleClick = (movie) => {
    //     console.log("clicked");
    //     if (trailerURL) setTrailerURL('');
    //     else {
    //         movieTrailer("First Love", { id: true })
    //             .then(response => setTrailerURL(response))
    //             .catch((error) => console.log(error));
    //     }
    // }

    // const handleClick = (movie) => {
    //     console.log("clicked");
    //     if (trailerURL) setTrailerURL('');
    //     else {
    //         movieTrailer(movie?.name || movie?.original_name || movie?.title || '')
    //             .then(response => setTrailerURL(response))
    //             .catch((error) => console.log(error));
    //         ref.current?.scrollIntoView({behavior: 'smooth',  block: "start"});
    //     }
    // }

    //using YouTube Data API instead of movie-trailer since movie-trailer didn't provide links for most of the trailer videos

    const handleClick = async (movie) => {
        if (movie.id === movieId) {
            setTrailerURL('');
            setMovieId('');
         }

         else
        {
            console.log((movie?.name || movie?.original_name || movie?.title || ''));
            const response = await axiosYT.get('/search', {
                params: {
                    q: (movie?.name || movie?.original_name || movie?.title || '') + "trailer"
                }
            });
        
            console.log(response);
            setTrailerURL("https://www.youtube.com/watch?v=" + response.data.items[0].id.videoId);
            setMovieId(movie.id)
            ref.current?.scrollIntoView({behavior: 'smooth',  block: "start"});
        }
    };
    
    console.log(trailerURL);

    return <div className="row" ref={ref}>
        <h2>{props.title}</h2>

        <div className="row_posters">
            {movies.map(movie => (
                //console.log("http://image.tmdb.org/t/p/w185"+movie.poster_path)

                <img key={movie.id}  //whenevr some movie changes, react should just re-render that particular movie not the entire row. key helps do that
                    className={"row_poster" + (props.isLargeRow?" row_posterLarge":"")}
                    src={"http://image.tmdb.org/t/p/original" + (props.isLargeRow?movie?.poster_path:movie?.backdrop_path)}
                    alt={movie.name}
                    onClick={() => handleClick(movie)}
                />
            ))}
        </div>
    
        {trailerURL && <ReactPlayer id='officialTrailer' className="trailer" url={trailerURL} width="100%"
            height="390px" playing={true} config={{
            youtube: {
                playerVars: {
                    autoplay: 1,
                    controls: 1
                }
            }
            }} />}

        </div>
}

export default Row;