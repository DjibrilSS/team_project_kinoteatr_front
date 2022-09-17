import React from 'react';
import styles from './styles/footer.module.css'
const Footer = () => {
    return (
        <div className={styles.footer}>
            <hr />
            <img src="foot.png" alt="" />
            <h3>© 2022 intocode</h3>
            <h4>Bombibbo Team</h4>
        </div>
    );
};

export default Footer;