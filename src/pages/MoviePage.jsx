import React from "react";

const MoviePage = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0zTYJYn23sA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <div>
          <img src={props.image} alt="" />
        </div>
        <div>
          <ul>
            <li>Год: {props.year}</li>
            <li>Страна: {props.country}</li>
            <li>Жанр: {props.genre}</li>
            <li>
              Актеры:
              {props.actors.map((actor) => {
                return <p>{actor}</p>;
              })}
            </li>
          </ul>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default MoviePage;
