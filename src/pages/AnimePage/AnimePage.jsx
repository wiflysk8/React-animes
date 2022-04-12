import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./AnimePage.css";
import Gallery from "../../components/Gallery";
import Pagination from "../../components/Pagination";

export default function AnimesPage() {
  const [animes, setAnimes] = useState([]);
  /*  const [animes1, setAnimes1] = useState([]);
  const [animes2, setAnimes2] = useState([]);
  const [animes3, setAnimes3] = useState([]);
  const [animes4, setAnimes4] = useState([]);
  const [animes5, setAnimes5] = useState([]); */
  /* useEffect(() => {
    const getAnimes1 = async () => {
      const res = await axios.get("https://kitsu.io/api/edge/trending/anime?limit=5");

      setAnimes1(res.data.data)
    };

    getAnimes1();
  }, []);

  useEffect(() => {
    const getAnimes2 = async () => {
      const res = await axios.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count");

      setAnimes2(res.data.data)
    };

    getAnimes2();
  }, []);

  useEffect(() => {
    const getAnimes3 = async () => {
      const res = await axios.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count");

      setAnimes3(res.data.data)
    };

    getAnimes3();
  }, []);


  useEffect(() => {
    const getAnimes4 = async () => {
      const res = await axios.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating");

      setAnimes4(res.data.data)
    };

    getAnimes4();
  }, []);

  useEffect(() => {
    const getAnimes5 = async () => {
      const res = await axios.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count");

      setAnimes5(res.data.data)
    };

    getAnimes5();
  }, []); */

  const getAnimes = async (offset = 12) => {
    const res = await axios.get(
      `https://kitsu.io/api/edge/anime?page%5Blimit%5D=12&page%5Boffset%5D=${offset}`
    );
    setAnimes(res.data.data);
  };

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <>
       <Pagination onChangePage={getAnimes} /> 
      <div className="c-gallery">
      
         {animes.map((anime) => (
           
          <Gallery key={anime.id} anime={anime} />
        ))}
     
        {/* {animes1.map((anime) => (
        <Gallery key={anime.id} anime={anime} />     
      ))}
      {animes2.map((anime) => (
        <Gallery key={anime.id} anime={anime} />
      ))}
      {animes3.map((anime) => (
        <Gallery key={anime.id} anime={anime} />
      ))}
      {animes4.map((anime) => (
        <Gallery key={anime.id} anime={anime} />
      ))}
      {animes5.map((anime) => (
        <Gallery key={anime.id} anime={anime} />
      ))} */}
      </div>
    </>
  );
}
