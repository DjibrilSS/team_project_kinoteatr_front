import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../features/usersSlice";
import styles from '../components/styles/userPages.module.css'
const UserPages = () => {
  const id = useSelector((state)=> state.application.id)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const user = useSelector((state) => state.users.users);

console.log(user)
  return (
  
 <div>
  
     {user.map((item)=>{
      if(item._id === id){
        return <div>{item.movies.map((i)=>{
          return <div>{i.title}</div>
        })}</div>
      }
     })}
    
        
 </div>
 

  )
};

export default UserPages;
