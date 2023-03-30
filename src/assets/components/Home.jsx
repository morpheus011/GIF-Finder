import React from "react";
import { useState, useEffect } from "react";
import Gif from "./Gif";
import API_KEY from "../env/api-key";

const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("beautiful");

  const handleChange = async (e) => {
    console.log("Handle change");
    console.log(e.target.value);
    setQuery(e.target.value);
    console.log(query);
  };
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&offset=0&rating=g&lang=en`;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchGIF(URL);
  };

  useEffect(() => {
    fetchGIF(URL);
  }, []);

  const fetchGIF = async (url) => {
    try {
      const res = await fetch(url);
      const out = await res.json();
      if (out.data.length > 0) {
        setGifs(out.data);
      }
      console.log(out.data);
      console.log(gifs);
    } catch (e) {
      console.error(e);
    }
  };

  console.log(query);
  return (
    <div className="main">
      <form action="" className="search-box">
        <input type="text" name="query" onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
      </form>

      <h1>{query}</h1>
      <div className="gif-container">
        <Gif data={gifs} />
      </div>
    </div>
  );
};

export default Home;
