import React from 'react'
import './Gallery.css'
import { Link, generatePath } from "react-router-dom";

const Gallery = ({anime}) => {
  return (
    <Link className='c-link'  to={generatePath("/animes/:id", {id: anime.id})}> 
    <div className="c-gallery">
    <figure key={anime.id}>
    <figcaption>{anime.attributes.canonicalTitle}</figcaption>
    <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
    </figure>
    </div>
    </Link>
  )
}

export default Gallery