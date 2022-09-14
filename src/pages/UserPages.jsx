import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../features/usersSlice";
import styles from '../components/styles/userPages.module.css'
const UserPages = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const user = useSelector((state) => state.users.users);


  return (
  
 <div>  
     <div>{user.login}</div>
    <div>{user.wallet}</div>
    <div>{user.movies.length ? user.movies.map(item => <div>{item}</div>) : <p>Нет купленных фильмов</p>}</div>
 </div>
 

  )
};

export default UserPages;
