// 'use client';
import Carousel from '../components/carousel';
import styles from './photos.module.css';
import Image from 'next/image';

export default function Photos() {
    return (
        <main>
            <section className={styles.headingSection}>
                <video className={styles.headingPicture} autoPlay muted>
                    <source src='/gallery.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            </section>
            <section className={styles.pageContent}>
                <div className={styles.intro}>
                    <h1>COMFORTABLE APARTMENTS IN TIGARD, OR</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <div className={styles.carousel}>
                    <Carousel />
                </div>
            </section>
        </main>
    );
}
