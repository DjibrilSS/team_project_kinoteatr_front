import React from 'react';
import styles from "../components/styles/favorite.module.css"
import Movie from '../components/Movie';
const FavoritePages = ({films}) => {
    return (
        <div className={styles.favorite_bg}>
           {films.length <1 ? 
         <>
          <h1>Здесь пока ничего нет</h1>
            <p>Добавляй фильмы и сериалы в избранное,
                                                        чтобы посмотреть их позже</p></> 
        : films.map((item)=>{
            return <Movie movie  = {item}/>
        }) 
        }
            
        
        </div>
    );
};

export default FavoritePages;