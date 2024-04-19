'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import avaLogo from '/public/avaLogo.png';
import styles from '../styles/navbar.module.css';
import AvaLogoSVG from '../components/avaLogo';

export default function Navbar() {
    const [currentRoute, setCurrentRoute] = useState('/');

    const pathname = usePathname();
    const searchParams = useSearchParams();
    useEffect(() => {
        setCurrentRoute(pathname);
    }, [pathname, searchParams]);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href='/'>
                    <Image
                        src={avaLogo}
                        alt='AVA logo'
                        className={styles.avaLogo}
                    />
                    {/* <AvaLogoSVG /> */}
                </Link>
            </div>
            <div className={styles.links}>
                {/* /* add active class to current route */}
                <Link
                    href='/'
                    className={
                        currentRoute === '/' ? styles.activeLink : styles.link
                    }
                >
                    {/* <Link href='/' className={styles.link}> */}
                    HOME
                </Link>
                <Link
                    href='/floorplans'
                    className={
                        currentRoute === '/floorplans'
                            ? styles.activeLink
                            : styles.link
                    }
                >
                    FLOOR PLANS
                </Link>
                <Link
                    href='/photos'
                    className={
                        currentRoute === '/photos'
                            ? styles.activeLink
                            : styles.link
                    }
                >
                    PHOTOS
                </Link>
                <Link
                    href='/amenities'
                    className={
                        currentRoute === '/amenities'
                            ? styles.activeLink
                            : styles.link
                    }
                >
                    AMENITIES
                </Link>
                <Link
                    href='/contactus'
                    className={
                        currentRoute === '/contactus'
                            ? styles.activeLink
                            : styles.link
                    }
                >
                    CONTACT US
                </Link>
            </div>
        </nav>
    );
}
