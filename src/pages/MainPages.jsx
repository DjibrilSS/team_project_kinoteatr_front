import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchmovies} from "../features/movieSlice";
import { filterMovies } from "../features/movieSlice";
import { fetchgenre } from "../features/genreSclice";
import Movie from "../components/Movie";
import styles from "../components/styles/main.module.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const MainPages = () => {
  const dispatch = useDispatch();

  const { id } = useParams();



  useEffect(() => {
    dispatch(fetchmovies());
    dispatch(fetchgenre());
  }, [dispatch]);

  const genres = useSelector((state) => state.genres.genres);
  const moviesFilter = useSelector((state) => state.movies.moviesFilter);

  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        <h2>Все фильмы</h2>
      </div>
      <div className={styles.categoryfilters}>
        <div className={styles.categoryfilters_item}>
          <div>Все</div>
          <div>Бесплатные</div>
          <div>Платные</div>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Все Жанры</button>
          <ul className={styles.dropdown_content} name="Жанры">
            {genres.map((genre) => {
              return (
                <li>
                  <Link to={`/genre/${genre._id}`}> {genre.nameGenre}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.categoryfilters_select}>
          <select className={styles.select_css}>
            <option value="">Все года</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </select>
        </div>
        <div className={styles.categoryfilters_select}>
          <select className={styles.select_css}>
            <option value=""> Все страны</option>
            <option value="2022">Россия</option>
            <option value="2021">США</option>
            <option value="2020">ГЕРМАНИЯ</option>
            <option value="2019">КОРЕЯ</option>
            <option value="2018">ФРАНЦИЯ</option>
            <option value="2017">АНГЛИЯ</option>
            <option value="2016">ЯПОНИЯ</option>
          </select>
        </div>
        <div><button onClick={()=>  dispatch(filterMovies(id))}>ddddd</button></div>
      </div>
      <div className={styles.main_content}>
        {moviesFilter.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MainPages;
