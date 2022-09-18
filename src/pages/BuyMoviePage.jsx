import React from "react";
import styles from "../components/styles/favorite.module.css";
import Movie from "../components/Movie";
import { useSelector } from "react-redux";

const BuyMoviePage = ({ films }) => {
  const user = useSelector((state) => state.users.users);
  return (
    <>
      <div className={styles.favorite_bg}>
        <div className={styles.favorite_title}>
          <h2>Купленные</h2>
        </div>
        {user[0].buymovies.length < 1 ? (
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
            {user[0].buymovies.map((item) => {
              return (
                <div>
                  <Movie i={item._id} movie={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default BuyMoviePage;
