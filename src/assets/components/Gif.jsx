import React from 'react'

const Gif = ({ data }) => {
    console.log("Component")
    console.log(data);
  return (
      <>
        {data.map((currGif) => {
            const { type, id, images } = currGif;
            return (<div className='gif-cards'>
                <img src={images.original.url} alt="gif-not-found" />
                <button className='copy-btn'>Copy Link</button>
                </div>
            )
        })}
    </>
  );
}

export default Gif