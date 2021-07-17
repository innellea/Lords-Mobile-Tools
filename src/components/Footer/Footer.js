import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    Created by
                    <a href='https://github.com/innellea/'>@innellea</a>
                </li>
                <li>
                    Lords Mobile is a trademark or registered trademark of{' '}
                    <a href='http://lordsmobile.igg.com/'>
                        IGG Inc. ( I Got Games )
                    </a>
                </li>
                <li>This site is not affiliated with IGG.</li>
            </ul>
        </footer>
    );
};
export default Footer;
