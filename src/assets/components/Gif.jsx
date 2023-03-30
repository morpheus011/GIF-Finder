import React from "react";
import { useState } from "react";

const Gif = ({ data }) => {
  const copyURL = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      {data.map((currGif) => {
        const { type, id, images } = currGif;
        return (
          <div className="gif-cards">
            <img src={images.original.url} alt="gif-not-found" />
            <button
              className="copy-btn"
              onClick={(e) => {
                copyURL(images.original.url);
              }}
            >
              {" "}
              Copy Link{" "}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Gif;
