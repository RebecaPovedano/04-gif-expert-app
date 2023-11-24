import { useState, useEffect } from "react";

import { GifItem } from "./GifItem";

import { getGif } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);

  useEffect( () => {    
    getGif(category).then(
      newImages => setImages(newImages)
    );
  }, [] );

  return (
    <>
        <h3>{ category }</h3>
        <div className="card-grid">
          {images.map(({id, title}) => (
            <GifItem key={id} />
          ))}
        </div>
    </>
  )
}
