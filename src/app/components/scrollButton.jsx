import React, { useState } from 'react';
import styles from '../styles/scrollButton.module.css';
import Image from 'next/image';
import upArrow from '/public/icons/upArrow.png';

export default function ScrollButon() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 700) {
            setVisible(true);
        } else if (scrolled <= 700) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour 
		in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button
            onClick={scrollToTop}
            className={styles.scrollButton}
            style={{ display: visible ? 'inline' : 'none' }}
        >
            <Image src={upArrow} alt='up arrow' width={30} height={30} />
        </button>
    );
}
