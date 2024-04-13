// 'use client';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ava from '../assets/ava.png';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
    // const router = useRouter();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href='/'>
                    <Image
                        src={ava}
                        alt='AVA logo'
                        className={styles.avaLogo}
                    />
                </Link>
            </div>
            <div className={styles.links}>
                <Link href='/' className={styles.link}>
                    HOME
                </Link>
                <Link href='/floorplans' className={styles.link}>
                    FLOOR PLANS
                </Link>
                <Link href='/photos' className={styles.link}>
                    PHOTOS
                </Link>
                <Link href='/amenities' className={styles.link}>
                    AMENITIES
                </Link>
                <Link href='/contactus' className={styles.link}>
                    CONTACT US
                </Link>
            </div>
        </nav>
    );
}
