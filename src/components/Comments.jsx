import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/moviePage.module.css";
import { fetchComments } from "../features/movieSlice";
import { useParams } from "react-router-dom";
import { addComment } from "../features/movieSlice";
import Comment from "./Comment";

const Comments = () => {
  const [comment, setComment] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.application.id);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

 

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = ({ comment }) => {
    dispatch(addComment({ comment, id, user }));
    setComment("");
  };

  return (
    <>
      <div className={styles.comments_list}>
        <h2>Комментарии:</h2>
        <div className={styles.textarea_div}>
          <textarea
            value={comment}
            onChange={(e) => handleChange(e)}
            placeholder="Написать комментарий"
            rows={4}
          />
          <button onClick={() => handleAddComment({ comment })}>
            Добавить
          </button>
        </div>
    <Comment id={id} />
      </div>
    </>
  );
};

export default Comments;
