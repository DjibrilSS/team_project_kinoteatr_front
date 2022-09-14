import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from "../components/styles/header.module.css"

const Header = () => {
    const token = useSelector((state) => state.application.token);
    const handleExit = () =>{
         localStorage.clear()
         window.location.reload()
    }
    return (
        <div className={styles.header}>
            <div className={styles.nav_menu}>
                <div className={styles.header_logo}>

                    <Link to="/"><h1 >BOMBIBBO</h1></Link>
                </div>
                {/* <div className={styles.nav_link}>
                    <ul className={styles.nav_link_list}>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/video">Каталог</Link></li>
                    </ul>
                </div> */}
                <div className="nav_exit">
                    
                        {!token ? 
                        <ul className={styles.nav_link_exit}>
                        <li><Link to="/login">Войти</Link></li>
                        <li><Link to="/auth">Зарегистрироваться</Link></li>
                       </ul>
                       :
                       <ul className={styles.nav_link_exit}>
                        <li><Link onClick={handleExit} to="/">Выйти</Link></li>
                        <li><Link to="/user">Личный кабинет</Link></li>
                       </ul>
                    }
                        
            </div>
            </div>
            
        </div>
    );
};

export default Header;