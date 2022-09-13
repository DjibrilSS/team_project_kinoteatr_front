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
const MainPages = () => {
  const dispatch = useDispatch();
  const years = [2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009]
  const country = ["Россия","США","Великобритания","Франция", "Испания"]
  const params = useParams();
  const id = params.id
  const yearid = params.cat



  useEffect(() => {
    dispatch(fetchmovies());
    dispatch(fetchgenre());
  }, [dispatch]);

  const genres = useSelector((state) => state.genres.genres);
  const movies = useSelector((state) => state.movies.movies);


  const filteredgenre = movies.filter((item)=>{
    console.log(item.year)
    if(!id){
      return true
    }
    return item.genre.includes(id) || item.year == id ||item.country == id
  }) 
  console.log(id)
  
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
        <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Все года</button>
          <ul className={styles.dropdown_content}>
            {years.map((i)=>{
              return <li><Link to={`/years/${i}`}>{i}</Link></li>
            })}
          </ul>
        </div>
        <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Все года</button>
          <ul className={styles.dropdown_content}>
            {country.map((i)=>{
              return <li><Link to={`/country/${i}`}>{i}</Link></li>
            })}
          </ul>
        </div>
      
        
      </div>
      <div className={styles.main_content}>
        {filteredgenre.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MainPages;
