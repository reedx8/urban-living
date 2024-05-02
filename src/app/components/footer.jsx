import Image from 'next/image';
import styles from '../styles/footer.module.css';
import bigLogo from '/public/fullLogoSmall.png';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.horizontalLine}></div>
            <div className={styles.footerContent}>
                <div className={styles.footerLeft}>
                    <Image
                        src={bigLogo}
                        alt='Urban Living at Fanno Creek Logo'
                        className={styles.bigLogo}
                        width={500}
                        height={184}
                    />
                    <div className={styles.address}>
                        <p>12547 SW Main St</p>
                        <p>Tigard, OR 97223</p>
                    </div>
                </div>
                <div className={styles.footerRight}>
                    <div className={styles.footerLinks}>
                        <div>
                            <Link href='/' className={styles.links}>
                                HOME
                            </Link>
                            <Link href='/floorplans' className={styles.links}>
                                FLOOR PLANS
                            </Link>
                            <Link href='/photos' className={styles.links}>
                                PHOTOS
                            </Link>
                        </div>
                        <div>
                            <Link href='/amenities' className={styles.links}>
                                AMENITIES
                            </Link>
                            <Link href='/contactus' className={styles.links}>
                                CONTACT US
                            </Link>
                        </div>
                    </div>
                    {/* <div className={styles.officeHours}>
                        <p>OFFICE HOURS</p>
                        <p>Monday - Friday: 10:00 am - 6:00 pm</p>
                        <p>Saturday / Sunday: CLOSED</p>
                    </div> */}
                </div>
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.copyRight}>
                <p>
                    © 2024 Urban Living at Fanno Creek
                    <span>
                        {' '}
                        | <Link href='/privacypolicy'>Privacy Policy</Link>
                    </span>{' '}
                    | Developed by{' '}
                    <a href='https://www.xvreed.com' target='_blank'>
                        Xavier Reed
                    </a>
                </p>
            </div>
        </footer>
    );
}
