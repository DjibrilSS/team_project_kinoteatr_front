import React from "react";
import styles from "./styles/movie.module.css";
import { Link } from "react-router-dom";
const Movie = ({ movie }) => {
  return (
    <Link to={`/movie/${movie._id}`}>
      <div className={styles.movie_card}>
        <div className={styles.movie_image}>
          <img src={`http://localhost:4000/images/${movie.image}`} alt="" />
        </div>
        <div className={styles.movie_title}>
          <h4>{movie.title}</h4>
        </div>
        <div className={styles.movie_inner}>Бесплатно</div>
      </div>
    </Link>
  );
};

export default Movie;
