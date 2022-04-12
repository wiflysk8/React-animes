import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCard from "../../components/DetailCard";

const AnimeDetailPage = () => {
  const [anime, setAnime] = useState([]);
  let { idAnime } = useParams();

  useEffect(() => {
    const getAnime = async () => {
      const res = await axios.get(
        `https://kitsu.io/api/edge/anime/${idAnime}`
      );
      setAnime(res.data.data);
    };

    getAnime();
  }, [idAnime]);

  return (
    <>
    <DetailCard anime= {anime} />     
    </>
  );
};

export default AnimeDetailPage;
