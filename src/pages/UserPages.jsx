import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../features/usersSlice";
import styles from "../components/styles/userPages.module.css";
import { Link } from "react-router-dom";
import avatar from "./dSxCxs3Vgzk.jpg"
import { Avatar } from "@mui/material";
import { Outlet } from "react-router-dom";
import FavoritePages from "./FavoritePages";

import BuyMoviePage from "./BuyMoviePage";
const UserPages = () => {
  const [active,setActive]= useState("Избранное")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const user = useSelector((state) => state.users.users);

  return (
    <div>
      {user.map((item) => {
        return (
          <>
           
            <div className={styles.user_name}>
            <Avatar
            className={styles.avatar}
              alt="Remy Sharp"
              src={avatar}
              sx={{ width: 56, height: 56 }}
            />
              <h2>{item.login}</h2>
            </div>

            <div className={styles.user_nav}>
              <div onClick={()=> setActive("Избранное")} className={styles.user_nav_item}>
               <Link to = "/user/"><button className={styles.lk_btn}><b>Избранное</b></button></Link>
              </div>
              <div onClick={()=> setActive("Купленные")} className={styles.user_nav_item}>
              <Link to = "/user/buy"><button className={styles.lk_btn}><b>Купленные</b></button></Link>
              </div>
              
            </div>
         
              <div>
              <Outlet />
                </div>
               
            {/* <FavoritePages title = {active} films = {active === "Избранное" ? item.movies : item.buymovies} /> */}
          </>
        );
      })}

      
    </div>
  );
};

export default UserPages;
