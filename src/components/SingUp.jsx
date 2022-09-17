import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authThunk } from "../features/applicationSlice";
import styles from "./styles/authPage.module.css";

const SingUp = () => {
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
    dispatch(authThunk({ login, password }));
  };

  return (
    <div className={styles.auth}>
      <h2 className={styles.auth_title}>Регистрация</h2>
      <input
        className={styles.auth_input}
        placeholder="ЛОГИН"
        onChange={(e) => handleChange(e)}
        value={login}
        type="text"
      />
      <input
        className={styles.auth_input}
        placeholder="ПАРОЛЬ"
        onChange={(e) => handleChangePas(e)}
        value={password}
        type="text"
      />
      <p>Уже есть аккаунт? </p>

      <p className={styles.link}>
        <Link to="/login">Войти</Link>
      </p>
      <button className={styles.auth_btn} onClick={() => handleClick()}>
        Регистрация
      </button>
    </div>
  );
};

export default SingUp;
