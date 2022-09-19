import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchmovies } from "../features/movieSlice";
import { fetchgenre } from "../features/genreSclice";
import Movie from "../components/Movie";
import styles from "../components/styles/main.module.css";
import { Link } from "react-router-dom";
import { fetchUser } from "../features/usersSlice";

const MainPages = () => {
  const movies = useSelector((state) => state.movies.movies);
  const [value, setvalue] = useState("");
  const load = useSelector((state) => state.users.load);
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.application.token);

  useEffect(() => {
    dispatch(fetchmovies());
    dispatch(fetchgenre());

    dispatch(fetchUser());
  }, [dispatch]);
  const categories = ["Все", "Платные", "Бесплатные"];
  const years = [
    2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
    2010, 2009,
  ];
  const country = ["Россия", "США", "Великобритания", "Франция", "Испания"];

  const [titleGenre, settitleGenre] = useState("Все жанры");
  const [titleYears, settitleYears] = useState("Все года");
  const [titleCountry, settitleCountry] = useState("Все страны");
  const [titleGenreid, settitleGenreid] = useState();
  const [titleYearsid, settitleYearsid] = useState();
  const [titleCountryid, settitleCountryid] = useState();

  const genres = useSelector((state) => state.genres.genres);

  const handleClickGenre = (name, id) => {
    settitleGenre(name);
    settitleGenreid(id);
  };
  const handleClickYears = (name) => {
    settitleYears(name);
    settitleYearsid(name);
  };
  const handleClickCountry = (name) => {
    settitleCountry(name);
    settitleCountryid(name);
  };

  const onclickCategory = (index) => {
    setActive(index);
  };
  const filterinput = movies.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase().toString());
  });

  const filteredgenre = filterinput.filter((item) => {
    if (!titleGenreid || titleGenreid === "Все жанры") {
      return true;
    }
    return item.genre.find((i) => i._id === titleGenreid);
  });

  const filterYears = filteredgenre.filter((item) => {
    if (!titleYearsid || titleYearsid === "Все года") {
      return true;
    }
    return item.year === titleYearsid;
  });

  const filterCountry = filterYears.filter((item) => {
    if (!titleCountryid || titleCountryid === "Все страны") {
      return true;
    }
    return item.country === titleCountryid;
  });

  const filterPaid = filterCountry.filter((item) => {
    if (active === 0) {
      return true;
    }
    if (active === 2) {
      return item.price === 0;
    }
    if (active === 1) {
      return item.price > 1;
    }
  });

  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        <h2>Список фильмов</h2>
      </div>
      <div className={styles.categoryfilters}>
        <div className={styles.categoryfilters_item}>
          {categories.map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => onclickCategory(i)}
                className={
                  active === i ? styles.categoryActive : styles.categorynoActive
                }
              >
                <span>{item}</span>
              </div>
            );
          })}
        </div>

        <div>
          {" "}
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>{titleGenre}</button>
            <ul className={styles.dropdown_content} name="Жанры">
              <li>
                <Link
                  to="/"
                  onClick={() => handleClickGenre("Все жанры", "Все жанры")}
                >
                  Все жанры
                </Link>
              </li>
              {genres.map((genre, index) => {
                return (
                  <li key={index}>
                    <Link
                      onClick={() =>
                        handleClickGenre(genre.nameGenre, genre._id)
                      }
                      to={`/`}
                    >
                      {" "}
                      {genre.nameGenre}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>{titleYears}</button>
            <ul className={styles.dropdown_content}>
              <li>
                <Link onClick={() => handleClickYears("Все года")} to={`/`}>
                  Все года
                </Link>
              </li>
              {years.map((i, index) => {
                return (
                  <li key={index}>
                    <Link onClick={() => handleClickYears(i)} to={`/`}>
                      {i}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>{titleCountry}</button>
            <ul className={styles.dropdown_content}>
              <li>
                <Link onClick={() => handleClickCountry("Все страны")} to="/">
                  Все страны
                </Link>
              </li>
              {country.map((i, index) => {
                return (
                  <li key={index}>
                    <Link onClick={() => handleClickCountry(i)} to={`/`}>
                      {i}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="textInputWrapper">
          <input
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            placeholder="Поиск"
            type="text"
            className="textInput"
          />
        </div>
      </div>

      <div className={styles.main_content}>
        {load ? (
          <div class="newtons-cradle">
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
            <div class="newtons-cradle__dot"></div>
          </div>
        ) : (
          filterPaid.map((movie, i) => {
            return (
              <div key={i}>
                <Movie movie={movie} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MainPages;
