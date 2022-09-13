import React from 'react';
import styles from "./styles/movie.module.css"
const Movie = ({movie}) => {
    return (
        <div className={styles.movie_card}>
            <div className={styles.movie_image}>
                <img src={`http://localhost:4000/images/${movie.image}`} alt="" />
            </div>
            <div className={styles.movie_title}><h4>{movie.title}</h4></div>
            <div className={styles.movie_inner}>Бесплатно</div>
        </div>
    );
};

export default Movie;