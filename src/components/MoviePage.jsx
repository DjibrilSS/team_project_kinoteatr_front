import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "../components/styles/moviePage.module.css";
import { fetchmovies } from "../features/movieSlice";
import Comment from "./Comment";
const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchmovies());
  }, [dispatch]);

  const movies = useSelector((state) => state.movies.movies);

  return (
    <>
      {movies.map((item) => {
        if (id === item._id) {
          return (
            <div className={styles.movie_page}>
              <h1>{item.title}</h1>
              <div className={styles.treiler}>
                <iframe
                  width="90%"
                  height="500px"
                  src="https://www.youtube.com/embed/0zTYJYn23sA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={styles.movie_info}>
                <div className={styles.image}>
                  <img
                    src={`http://localhost:4000/images/${item.image}`}
                    alt=""
                  />
                </div>
                <div>
                  <ul className={styles.info_list}>
                    <li>Год: {item.year}</li>
                    <li>Страна: {item.country}</li>
                    <li>
                      Жанр:
                      {item.genre.map((el, index, arr) => {
                        if (index === arr.length - 1) {
                          return ` ${el.nameGenre}.  `;
                        }
                        return ` ${el.nameGenre},  `;
                      })}
                    </li>
                    <li>
                      Актеры:
                      {item.actors.map((actor, index, arr) => {
                        if (index === arr.length - 1) {
                          return ` ${actor}. `;
                        }
                        return ` ${actor}, `;
                      })}
                    </li>
                  </ul>
                </div>
              </div>
              <p className={styles.description}>{item.description}</p>
              <Comment/>
            </div>
          );
        }
        return null;
      })}
 
    </>
  );
};

export default MoviePage;
