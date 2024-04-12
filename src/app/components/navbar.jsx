// 'use client';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
    // const router = useRouter();

    return (
        <nav className={styles.navbar}>
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
        </nav>
    );
}
