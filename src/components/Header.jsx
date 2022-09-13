import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../components/styles/header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.nav_menu}>
                <div className={styles.header_logo}>

                    <h1 >BOMBIBBO</h1>
                </div>
                {/* <div className={styles.nav_link}>
                    <ul className={styles.nav_link_list}>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/video">Каталог</Link></li>
                    </ul>
                </div> */}
                <div className="nav_exit">
                    <ul className={styles.nav_link_exit}>
                        <li><Link to="/login">Войти</Link></li>
                        <li><Link to="/auth">Зарегистрироваться</Link></li>
                    </ul>
            </div>
            </div>
            
        </div>
    );
};

export default Header;