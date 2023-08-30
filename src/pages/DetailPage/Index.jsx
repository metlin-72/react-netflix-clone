import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "../../api/axios";

const DetailPage = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`/movie/${movieId}`);
      console.log("response", response);
      setMovie(response.data);
    }

    fetchMovie();

  }, [movieId])

  if (!movie) {
    return (
      <section>찾으시는 영화가 없습니다.</section>
    )
  }

  return (
    <section>
      <img
        alt="poster"
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      />
    </section>
  )
}

export default DetailPage