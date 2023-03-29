import React from "react";
import { useState, useEffect } from 'react'
import Gif from "./Gif";
import API_KEY from '../env/api-key'
 
const Home = () => {

  const [gifs, setGifs] = useState([])
  const [query, setQuery] = useState("sad");


  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=5&offset=0&rating=g&lang=en`;

  useEffect(() => {
    fetchGIF(URL);
  }, [])
  
  const fetchGIF = async(url) => {
    try {
      const res = await fetch(url);
      const out = await res.json();
      if (out.data.length > 0) {
          setGifs(out.data);

      }
      console.log(out.data);
      console.log(gifs)
    } catch(e) {
      console.error(e);
    }
  }

  
  console.log(query)
  return (
    <div className="main">
      <div className="search-box">
        <input type="text" name="query" value={query} onChange={(e) => {
          setQuery(e.target.value)
        }} />
        <button>search</button>
      </div>
      <h1>{ query}</h1>
      <div className="gif-container">
        <Gif data={gifs} />
      </div>

    </div>
  );
};

export default Home;
