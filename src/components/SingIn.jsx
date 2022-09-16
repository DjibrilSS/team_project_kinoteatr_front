import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../features/applicationSlice";

const SingIn = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePas = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = (e) => {
    setLogin("");
    setPassword("");
    dispatch(loginThunk({ login, password }));
   
  };

  return (
    <div>
      <input
        placeholder="ЛОГИН"
        onChange={(e) => handleChange(e)}
        value={login}
        type="text"
      />
      <input
        placeholder="ПАРОЛЬ"
        onChange={(e) => handleChangePas(e)}
        value={password}
        type="text"
      />
      <button onClick={() => handleClick()}>"Войти"</button>
    </div>
  );
};

export default SingIn;
