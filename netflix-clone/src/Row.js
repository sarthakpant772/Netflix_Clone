import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "./axios";
import './row.css'
const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // if [] then row loads and dont run again

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //  console.log(request)
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* posters */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container -> posters */}

      {/*  */}
    </div>
  );
}

export default Row;
