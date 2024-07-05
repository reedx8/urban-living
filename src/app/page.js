'use client';
import Image from 'next/image';
import styles from './page.module.css';
import fullLogo from '/public/fullLogo.png';
import kitchenPic from '/public/images/kitchen2.png';
import buildingPic from '/public/images/build2.png';
import Link from 'next/link';
import unitsIcon from '/public/icons/units3.png';
import busIcon from '/public/icons/bus.png';
import eatIcon from '/public/icons/eat2.png';
import shopIcon from '/public/icons/shop.png';
import doubleArrowIcon from '/public/icons/doubleArrow.png';
import blackLine from '/public/icons/blackLine.png';
import whiteLine from '/public/icons/whiteLine.png';
import lockIcon from '/public/icons/lock.png';
import { motion } from 'framer-motion';
import explore from '/public/images/explore.png';

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.heroSection}>
                <Image
                    src={fullLogo}
                    alt='Big Logo'
                    className={styles.bigLogo}
                    priority={true}
                    quality={100}
                />
                <Link href='/contactus'>
                    <button
                        // type='button'
                        // value='CONTACT US'
                        className={styles.buttonStyle}
                    >
                        <p>CONTACT US</p>
                        <Image
                            src={doubleArrowIcon}
                            width={15}
                            height={15}
                            alt='contact us button'
                            style={{ marginLeft: '4px' }}
                        />
                    </button>
                </Link>
            </section>
            <div className={styles.pageContent}>
                <section className={styles.introSection}>
                    <div className={styles.introContainer}>
                        <motion.div
                            // appear from bottom and fade in
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: 'easeInOut', duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.superTextContainer}>
                                <p className={styles.superText}>
                                    <Image
                                        src={lockIcon}
                                        width={13}
                                        height={13}
                                        className={styles.superIcon}
                                        alt='lock icon'
                                    />
                                    OUR PROMISE
                                </p>
                                <div className={styles.superLine}></div>

                                {/* <Image
                                src={whiteLine}
                                alt='White Line'
                                width={80}
                                height={20}
                            /> */}
                            </div>
                        </motion.div>
                        <motion.div
                            // appear from bottom and fade in
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ ease: 'easeInOut', duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2
                                className={styles.h2Text}
                                style={{
                                    filter: 'drop-shadow(0 0 0.5rem black)',
                                }}
                            >
                                Living Made Better
                            </h2>
                            {/* <h2 className={styles.h2Text}>Better</h2> */}
                            <br />
                            <p className={styles.introText}>
                                Urban Living at Fanno Creek is a residence
                                offering convenience and affordability to the
                                Tigard area. 
                            </p>
                            <br />
                            <p className={styles.introText}>
                                This residence is a 3 story building with 22
                                apartments total. It is situated right in the
                                center of Tigard’s main street, just a short
                                walk from pubs, coffee shops, and public
                                transportation. Every apartment has been
                                upgraded with modern appliances and simple,
                                clean interior. Welcome home, and experience
                                better living, here at Urban Living at Fanno
                                Creek!
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        // appear from bottom and fade in
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.introImages}>
                            <Image
                                src={buildingPic}
                                alt='Building picture'
                                width={400}
                                height={'auto'}
                            />
                            <Image
                                src={kitchenPic}
                                alt='Kitchen picture'
                                width={400}
                                height={'auto'}
                            />
                        </div>
                    </motion.div>
                </section>
                <section className={styles.secSection}>
                    <motion.div
                        // appear from bottom and fade in
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <div>
                                {/* <Image src={amenitiesIcon} width={25} height={25} /> */}
                                <Image
                                    src={blackLine}
                                    alt='Black Line'
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <h2
                                className={styles.h2Text}
                                style={{
                                    filter: 'drop-shadow(0 0 0.2rem var(--khaki))',
                                }}
                            >
                                {/* Amenities, Upgraded */}
                                Amenity-Rich Living
                            </h2>
                            <br />
                        </div>
                    </motion.div>
                    <motion.div
                        // appear from bottom and fade in
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.secContainer}>
                            <div className={styles.secInfo}>
                                {/* <p style={{ marginBottom: '20px' }}> */}
                                <p>
                                    We offer a peaceful retreat with an array of
                                    convenient amenities that cater to a vibrant
                                    and connected lifestyle. The community
                                    features controlled access, 24-hour on-site
                                    maintenance, and vibrant communal spaces
                                    like a lively plaza and plentiful
                                    ground-floor retail options.
                                </p>
                                <p>
                                    {' '}
                                    Only minutes away from grocery stores and 15
                                    minutes from downtown Portland, Urban Living
                                    at Fanno Creek blends the best of peaceful
                                    urban living with the convenience of modern
                                    amenities.
                                </p>

                                <div className={styles.buttonContainer}>
                                    <Link href='/amenities'>
                                        <button
                                            // type='button'
                                            // value='VIEW AMENITIES'
                                            className={styles.buttonStyle}
                                            /* Just navigate to contactus page for now */
                                        >
                                            <p>VIEW AMENITIES</p>{' '}
                                            <Image
                                                src={doubleArrowIcon}
                                                width={15}
                                                height={15}
                                                alt='contact us button'
                                                style={{
                                                    marginLeft: '4px',
                                                }}
                                            />
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href='https://www.exploredowntowntigard.com/about/'
                                        target='_blank'
                                    >
                                        <Image
                                            src={explore}
                                            width={125}
                                            height={125}
                                            alt='explore downtown tigard'
                                            style={{ marginLeft: '4px' }}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.amenitiesCards}>
                                <div className={styles.amenitiesCard}>
                                    <Image
                                        src={unitsIcon}
                                        alt='Units Icon'
                                        width={45}
                                        height={45}
                                    />
                                    <h3 className={styles.amenitiesCardH3}>
                                        Modern Units
                                    </h3>
                                    <p
                                        className={styles.cardText}
                                        style={{ color: 'white' }}
                                    >
                                        Upgraded with modern appliances and
                                        clean, simple interiors.
                                    </p>
                                </div>
                                <div className={styles.amenitiesCard2}>
                                    <Image
                                        src={busIcon}
                                        alt='Bus Icon'
                                        width={45}
                                        height={45}
                                    />
                                    <h3 className={styles.amenitiesCardH3}>
                                        Public Transit
                                    </h3>
                                    <p
                                        className={styles.cardText}
                                        style={{ color: 'var(--darkgreen)' }}
                                    >
                                        Only 2 short blocks from Tigard Transit
                                        Center.
                                    </p>
                                </div>
                                <div className={styles.amenitiesCard}>
                                    <Image
                                        src={eatIcon}
                                        alt='Eat Icon'
                                        width={45}
                                        height={45}
                                    />
                                    <h3 className={styles.amenitiesCardH3}>
                                        Local Eateries
                                    </h3>
                                    <p
                                        className={styles.cardText}
                                        style={{ color: 'white' }}
                                    >
                                        Just a short walk from pubs, coffee
                                        shops, and restaurants.
                                    </p>
                                </div>
                                <div className={styles.amenitiesCard2}>
                                    <Image
                                        src={shopIcon}
                                        alt='Shop Icon'
                                        width={45}
                                        height={45}
                                    />
                                    <h3 className={styles.amenitiesCardH3}>
                                        Shopping
                                    </h3>
                                    <p
                                        className={styles.cardText}
                                        style={{ color: 'var(--darkgreen' }}
                                    >
                                        Less than 5 minutes away from grocery
                                        stores nearby.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <section className={styles.thirdSection}>
                    <div className={styles.thirdContainer}>
                        <h2 style={{ textTransform: 'uppercase' }}>
                            Explore our floor plans Now!
                        </h2>
                        <p>
                            View our available units today and contact our
                            leasing office for your personal tour.
                        </p>
                        <div className={styles.buttonContainer2}>
                            <Link href='/floorplans'>
                                <button className={styles.buttonStyle2}>
                                    {/* <p className={styles.buttonText}> */}
                                    <p>VIEW FLOOR PLANS</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className={styles.fourthSection}>
                    {/* <div className={styles.fourthContainer}>
                        <h2>See Ava's floor plans Now!</h2>
                        <Link href='/floorplans'>
                            <button className={styles.buttonStyle2}>
                                <p>VIEW FLOOR PLANS</p>
                            </button>
                        </Link>
                    </div> */}
                </section>
            </div>
            {/* <ScrollButton /> */}
            {/* <MoreInfoButton /> */}
        </main>
    );
}
