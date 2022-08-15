import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "../styles/Featured.scss"
import requests from '../Requests'
import { useEffect, useState } from 'react';
import axios from "axios";

const Featured = ({type}) => {

    const [movies,setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect ( ()=>{
            axios.get(requests.requestPopular).then((response)=>{
                    setMovies(response.data.results);
            });
    },[]);

    const truncateString = (str, num) => {
        if (str?.length > num) {
          return str.slice(0, num) + '...';
        } else {
          return str;
        }
      };

  return (
    <div className='featured'>
                {type && (
                    <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                    </div>
                )}
                <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt=""
                />
                <div className="info">
                <h1 className='MTiltle'>{movie?.title}</h1>
                    <span className="desc">
                           {truncateString(movie?.overview,120)}
                    </span>
                    <div className="buttons">
                            <button className="play">
                                <PlayArrow />
                                <span>Play</span>
                            </button>
                            <button className="more">
                                 <InfoOutlined /> 
                                 <span>Info</span>
                            </button>
                    </div>
                </div>
        
    </div>
  )
}

export default Featured