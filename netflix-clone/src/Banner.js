import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import './banner.css'
function Banner() {
    // discover/tv?api_key=f605e6736b34abe0325d2350d9d6f973&with_network=213";
    const [movie,setMovie]= useState([]);

    useEffect(() => {
            
            async function fetchData(){
                const request = await axios.get(
                  "https://api.themoviedb.org/3/discover/tv?api_key=f605e6736b34abe0325d2350d9d6f973&with_network=213"
                );
                setMovie(
                  request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                  ]
                );
                
                return request;
            }
            fetchData();
        
    }, []);
    console.log(movie)
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"...":str;
    }
    
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "conter center",
      }}
    >
      <div className="banner__contents">
        {/* background image */}
        {/* title */}
        <h1 className='banner__title'>
            
          {"check" && (movie?.title || movie?.name || movie?.orignal_name)}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className='banner_description'>
           {truncate(movie?.overview,150)}
        </h1>

        {/* div 2 buttons */}
        {/* discriptions */}
      </div>

      <div className='banner--fadeBottom'></div>
    </header>
  );
}

export default Banner