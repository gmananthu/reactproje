import React from 'react';
import axios from "../axios"
import { API_KEY,imageUrl } from '../../Constants/constants';
import "./Banner.css";
import {useEffect,useState} from 'react';



function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results.sort(function(a,b){return 0.5 - Math.random()})[0]);
    }).catch((err)=>{console.log('Network error')})
   
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl +movie.backdrop_path : ""})`}}>
        <div className="content">
            <h1 className='title'>{movie ? movie.original_name :""}</h1>
            <div className="banner-buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview :""}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner;