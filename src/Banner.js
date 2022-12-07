import React from "react";
import requests from "./requests";
import axios from "./axios";
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = React.useState([]);

    React.useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            const idx = Math.floor(Math.random() * request.data.results.length);
            console.log(request.data.results.length);
            console.log(idx);
            setMovie(request.data.results[idx]);
            return request;
        }

        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, //movie? helps pass the case when movie is null
        backgroundPosition: "center center"
    }}>
        
        <div className="banner_contents">
            <h1 className="banner_title">{movie?.name || movie?.original_name || movie?.title}</h1> 
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
        </div>
        
        <div className="banner_fadeBottom"></div>
    </header>
}

export default Banner;