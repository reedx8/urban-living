'use client';
import { useState } from 'react';
import styles from '../styles/banner.module.css';
import closeButton from '/public/icons/close.png';
import Image from 'next/image';

export default function Banner() {
    const [bannerOpen, setBannerOpen] = useState(true);

    function closeBanner() {
        setBannerOpen(false);
    }

    return (
        <div
            className={
                bannerOpen
                    ? styles.bannerContainer
                    : styles.bannerContainerHidden
            }
        >
            <h1>For private tour call (503) 372-5100</h1>
            <div className={styles.bannerClose} onClick={() => closeBanner()}>
                <Image
                    className={styles.closeIcon}
                    src={closeButton}
                    alt='close button'
                    width={25}
                    height={25}
                />
            </div>
        </div>
    );
}
