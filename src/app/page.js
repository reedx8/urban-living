import Image from 'next/image';
import styles from './page.module.css';
import bigLogo from '/public/bigLogo.png';

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.heroSection}>
                <Image
                    src={bigLogo}
                    alt='Big Logo'
                    className={styles.bigLogo}
                />
            </section>
            <section className={styles.introSection}></section>
            <section className={styles.thirdSection}></section>
            <section className={styles.fourthSection}></section>
            <section className={styles.footerSection}></section>
        </main>
    );
}
