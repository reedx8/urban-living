import Image from 'next/image';
import styles from '../styles/footer.module.css';
import bigLogo from '../assets/bigLogo.png';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.horizontalLine}></div>
            <div className={styles.footerContent}>
                <div className={styles.footerLeft}>
                    <Image
                        src={bigLogo}
                        alt='Ava at Fanno Creek Logo'
                        className={styles.bigLogo}
                    />
                    <div className={styles.address}>
                        <p>12547 SW Main St</p>
                        <p>Tigard, OR 97223</p>
                    </div>
                </div>
                <div className={styles.footerRight}>
                    <div className={styles.footerLinks}>
                        <Link href='/' className={styles.links}>
                            HOME
                        </Link>
                        <Link href='/floorplans' className={styles.links}>
                            FLOOR PLANS
                        </Link>
                        <Link href='/photos' className={styles.links}>
                            PHOTOS
                        </Link>
                        <Link href='/amenities' className={styles.links}>
                            AMENITIES
                        </Link>
                        <Link href='/contactus' className={styles.links}>
                            CONTACT US
                        </Link>
                    </div>
                    <div className={styles.officeHours}>
                        <p>OFFICE HOURS</p>
                        <p>Monday - Friday: 10:00 am - 6:00 pm</p>
                        <p>Saturday / Sunday: CLOSED</p>
                    </div>
                </div>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.copyRight}>
                <p>
                    © 2024 Ava At Fanno Creek
                    <span>
                        {' '}
                        | <Link href='/privacypolicy'>Privacy Policy</Link>
                    </span>
                </p>
            </div>
        </footer>
    );
}
