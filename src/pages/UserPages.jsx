import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../features/usersSlice";

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
 <div>{user.movies.map(item => <div>{item}</div>)}</div>
 </div>
 
  )
};

export default UserPages;
