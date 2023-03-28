import React from "react";
import {useState} from 'react'


const Home = () => {

  const [query, setQuery] = useState("laugh")
  console.log(query)
  return (
    <div className="main">
      <div className="search-box">
        <input type="text" name="query" value={query} onChange={(e) => {
          setQuery(e.target.value)
        }} />
        <button>search</button>
      </div>

    </div>
  );
};

export default Home;
