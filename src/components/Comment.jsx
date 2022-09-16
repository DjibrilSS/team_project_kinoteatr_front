import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/moviePage.module.css";
import { fetchComments } from "../features/movieSlice";
const Comment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const comments = useSelector((state) => state.movies.comments);

  return (
    <div className={styles.comments_list}>
      {comments.map((item) => {
        return (
          <div className={styles.one_comment}>
            <div className={styles.comment_login}>
              <h3>{item.user.login}</h3>
            </div>
            <p>{item.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
