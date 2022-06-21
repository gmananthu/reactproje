import React from 'react';
import {useEffect,useState} from 'react';
import "./Rowpost.css";
import axios from "../axios";
import Youtube from "react-youtube"
import {imageUrl,API_KEY} from '../../Constants/constants'



 
function Rowpost(props) {
  const [movies, setmovies] = useState([]);
  const [movieUrl, setMovieUrl] = useState('')
  const opts ={
    height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
  }

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
    setmovies(response.data.results)    
  }).catch((err)=>{
    alert('Network error');
  })
},[props.url])
function handleMovie(id){
  axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  if(response.data.results.length !== 0){

    setMovieUrl(response.data.results[0].key);
    console.log(response.data)
  }
  else{
    console.log("array empthy");
  }
  })
 
}
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
         { movies.map((obj)=>{
            return(
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? `smallPoster` : `poster`} src={`${movies ? imageUrl + obj.backdrop_path : ""}`} alt="poster" />
         ) })
           }
        </div>
        {
          movieUrl &&  <Youtube videoId= {movieUrl} opts={opts}/>
        }
    </div>
  )
}
export default Rowpost
