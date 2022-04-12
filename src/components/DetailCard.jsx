import React from 'react'
import { Link } from "react-router-dom";
import './DetailCard.scss'


const DetailCard = ({anime}) => {
  
  return (
      <>
      {anime.attributes &&
    <figure className="c-detail" key={anime.id}>
    <figcaption>{anime.attributes.canonicalTitle}</figcaption>
    <img
      className="c-detail__img"
      src={anime.attributes.posterImage.small}
      alt={anime.attributes.canonicalTitle}
    />
    <Link to= '/animes'><button>Go Back</button></Link>
  </figure>
  }
  </>
  )
}

export default DetailCard