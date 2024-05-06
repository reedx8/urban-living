'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import hamburger from '/public/icons/hamburger.png';
import styles from '../styles/navbar.module.css';
import { motion } from 'framer-motion';
import logoOnly from '/public/logoOnly.png';

export default function Navbar() {
    const [currentRoute, setCurrentRoute] = useState('/');
    const [menuOpen, setMenuOpen] = useState(false);

    const pages = ['/', '/floorplans', '/photos', '/amenities', '/contactus'];

    const pathname = usePathname();
    // const searchParams = useSearchParams();
    useEffect(() => {
        setCurrentRoute(pathname);
        setMenuOpen(false);
    }, [pathname]);

    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image
                            src={logoOnly}
                            alt='Urban Living at Fanno Creek logo'
                            className={styles.avaLogo}
                            priority={true}
                            // width={40}
                            // height={'auto'}
                        />
                    </Link>
                </div>
                <div className={styles.links}>
                    <Link
                        href='/'
                        className={
                            currentRoute === '/'
                                ? styles.activeLink
                                : styles.link
                        }
                    >
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
                <div className={styles.hamburger} onClick={handleMenuClick}>
                    <Image
                        src={hamburger}
                        alt='hamburger menu'
                        width={30}
                        height={'auto'}
                        className={styles.hamburgerIcon}
                    />
                </div>
            </nav>
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileLinks}>
                        <Link
                            href='/'
                            className={
                                currentRoute === '/'
                                    ? styles.mobileActiveLink
                                    : styles.mobileLink
                            }
                        >
                            HOME
                        </Link>
                        <Link
                            href='/floorplans'
                            className={
                                currentRoute === '/floorplans'
                                    ? styles.mobileActiveLink
                                    : styles.mobileLink
                            }
                        >
                            FLOOR PLANS
                        </Link>
                        <Link
                            href='/photos'
                            className={
                                currentRoute === '/photos'
                                    ? styles.mobileActiveLink
                                    : styles.mobileLink
                            }
                        >
                            PHOTOS
                        </Link>
                        <Link
                            href='/amenities'
                            className={
                                currentRoute === '/amenities'
                                    ? styles.mobileActiveLink
                                    : styles.mobileLink
                            }
                        >
                            AMENITIES
                        </Link>
                        <Link
                            href='/contactus'
                            className={
                                currentRoute === '/contactus'
                                    ? styles.mobileActiveLink
                                    : styles.mobileLink
                            }
                        >
                            CONTACT US
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
