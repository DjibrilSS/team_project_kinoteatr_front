import React from "react";
import styles from "../components/styles/favorite.module.css";
import Movie from "../components/Movie";
const FavoritePages = ({ films,title }) => {
  return (
    <>
      <div className={styles.favorite_bg}>
        <div className={styles.favorite_title}>
          <h2>{title}</h2>
        </div>
        {films.length < 1 ? (
          <>
            <div>
              <h1>Здесь пока ничего нет</h1>
              <p>
                Добавляй фильмы и сериалы в избранное,чтобы посмотреть их позже
              </p>
            </div>
          </>
        ) : (
          <div className={styles.favorite_content}>
            {films.map((item) => {
              return <Movie i={item._id} movie={item} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FavoritePages;
