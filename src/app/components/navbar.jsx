'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import hamburger from '/public/icons/hamburger.png';
import styles from '@/app/styles/navbar.module.css';
import { motion } from 'framer-motion';
import logoOnly from '/public/logoOnly.png';
import apply from '/public/icons/apply.png';
import arrow from '/public/icons/arrowDown.png';

export default function Navbar() {
    const [currentRoute, setCurrentRoute] = useState('/');
    const [menuOpen, setMenuOpen] = useState(false);
    const [floorplansDropdown, setFloorplansDropdown] = useState(false);
    const pages = ['/', '/floorplans', '/gallery', '/amenities', '/contactus'];
    const pathname = usePathname();
    // const searchParams = useSearchParams();

    const showFloorplansDropdown = () => {
        setFloorplansDropdown(!floorplansDropdown);
    };

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
                    <div className={styles.floorplansContainer}>
                        <button
                            className={styles.floorplansBtn}
                            onClick={() => showFloorplansDropdown()}
                        >
                            <div>FLOOR PLANS</div>
                            <div>
                                <Image
                                    src={arrow}
                                    alt='arrow'
                                    width={12}
                                    height={'auto'}
                                    className={styles.arrow}
                                />
                            </div>
                        </button>
                        {floorplansDropdown && (
                            <div className={styles.floorplansDropdown}>
                                <Link
                                    href='/floorplans'
                                    className={
                                        currentRoute === '/floorplans'
                                            ? styles.activeLink
                                            : styles.link
                                    }
                                    onClick={() => setFloorplansDropdown(false)}
                                >
                                    <div>FLOOR PLANS</div>
                                </Link>
                                <Link
                                    href='/virtualtours'
                                    className={
                                        currentRoute === '/virtualtours'
                                            ? styles.activeLink
                                            : styles.link
                                    }
                                    onClick={() => setFloorplansDropdown(false)}
                                >
                                    VIRTUAL TOURS
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        href='/gallery'
                        className={
                            currentRoute === '/gallery'
                                ? styles.activeLink
                                : styles.link
                        }
                    >
                        GALLERY
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
                // / use framer motion to animate this menu by adding pixels to expand it /
                <motion.div
                    // className={styles.mobileMenu}
                    initial={{ y: '-100%' }}
                    animate={{ y: 0 }}
                    exit={{ x: '-100%' }}
                >
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
                                href='/virtualtours'
                                className={
                                    currentRoute === '/virtualtours'
                                        ? styles.mobileActiveLink
                                        : styles.mobileLink
                                }
                            >
                                VIRTUAL TOURS
                            </Link>
                            <Link
                                href='/gallery'
                                className={
                                    currentRoute === '/gallery'
                                        ? styles.mobileActiveLink
                                        : styles.mobileLink
                                }
                            >
                                GALLERY
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
                            <Link
                                href='https://integrityfirstpropertymanagementllc.managebuilding.com/Resident/rental-application/new'
                                className={styles.applyNowLink}
                                // className={styles.mobileLink}
                                target='_blank'
                            >
                                <Image
                                    src={apply}
                                    alt='apply now button'
                                    width={20}
                                    height={'auto'}
                                    className={styles.applyNowIcon}
                                />
                                APPLY NOW
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
}
