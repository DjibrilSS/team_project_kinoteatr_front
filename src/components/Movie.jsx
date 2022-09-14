import React from "react";
import styles from "./styles/movie.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../features/usersSlice";

const Movie = ({ movie }) => {
  const dispatch = useDispatch();

  const handleFavorite = (movieId) => {
    // dispatch(addToFavorite(movieId));
  };

  return (
    <div className={styles.movie_card}>
      <Link to={`/movie/${movie._id}`}>
        <div className={styles.movie_image}>
          <img src={`http://localhost:4000/images/${movie.image}`} alt="" />
        </div>
      </Link>
      <div className={styles.movie_title}>
        <div>
          <h4>{movie.title}</h4>
          <div
          onClick={handleFavorite(movie._id)}
          className={styles.favorite}
        >
          ❤
        </div>
        </div>
        <div className={styles.movie_inner}>{movie.price == 0 ? "Бесплатно" : `${movie.price}`}</div>
      </div>
      <div className={styles.movie_inner}>Бесплатно</div>
    </div>
  );
};

export default Movie;
