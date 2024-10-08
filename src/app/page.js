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
import ContactNav from './components/contactnav';
import layingPic from '/public/images/laying.jpg';

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.heroSection}>
                <ContactNav />
                <Image
                    src={fullLogo}
                    alt='Big Logo'
                    className={styles.bigLogo}
                    priority={true}
                    quality={100}
                />
                <Link
                    href='https://www.apartments.com/urban-living-at-fanno-creek-portland-or/lbtycsg/'
                    target='_blank'
                >
                    <button
                        // type='button'
                        // value='CONTACT US'
                        className={styles.buttonStyle}
                    >
                        <p>CHECK AVAILABILITY</p>
                        <Image
                            src={doubleArrowIcon}
                            width={15}
                            height={15}
                            alt='check availablity button'
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
                            initial={{ y: 90, opacity: 0 }}
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
                            initial={{ y: 90, opacity: 0 }}
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
                                Discover Urban Living at Fanno Creek, Tigard's
                                premier address, where modern amenities, nature,
                                and community unite.
                            </p>
                            <br />
                            <p className={styles.introText}>
                                These newly constructed 2024 apartments offer
                                commuters a blend of convenience and
                                tranquility, just minutes from the TriMet
                                Transit Center and WES commuter rail. Each unit
                                boasts high-grade noise-blocking windows and
                                walls, dedicated heating and cooling systems,
                                and high-speed fiber-optic internet access.
                                Safety is a top priority, with key
                                fob-controlled entry, elevator access, and
                                secure package services for added convenience
                                and peace of mind.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        // appear from bottom and fade in
                        initial={{ y: 90, opacity: 0 }}
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
                                style={{ pointerEvents: 'none' }}
                            />
                            <Image
                                src={kitchenPic}
                                alt='Kitchen picture'
                                width={400}
                                height={'auto'}
                                style={{ pointerEvents: 'none' }}
                            />
                        </div>
                    </motion.div>
                </section>
                {/* <section className={styles.imageSection}>
                    <motion.div
                        // appear from bottom and fade in
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={layingPic}
                            alt='Picture of 2 people laying down'
                            width={'100%'}
                            height={'auto'}
                            style={{ pointerEvents: 'none' }}
                        />
                    </motion.div>
                </section> */}
                <section className={styles.secSection}>
                    <motion.div
                        // appear from bottom and fade in
                        initial={{ y: 90, opacity: 0 }}
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
                        initial={{ y: 90, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.secContainer}>
                            <div className={styles.secInfo}>
                                {/* <p style={{ marginBottom: '20px' }}> */}
                                <p>
                                    Residents will enjoy the vibrant community
                                    feel, with the AVA Roasteria Coffee Shop,
                                    Bakery and the Roastery/Coffee Cocktail Bar
                                    on the first floor. There is also easy
                                    access to the picturesque Fanno Creek Trail
                                    and Tigard’s charming blend of dining,
                                    retail, and entertainment options.
                                </p>
                                <p>
                                    {' '}
                                    Urban Living at Fanno Creek combines the
                                    best city convenience, natural beauty, and a
                                    strong sense of community, making it the
                                    ideal place to call home.
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
                                                alt='view amenities button'
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
                                            alt='explore downtown tigard link'
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
                <section className={styles.mapSection}>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5599.984850198117!2d-122.77646502434976!3d45.429654035743866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950d2114301669%3A0x2945ff561fbec8c0!2s12547%20SW%20Main%20St%2C%20Tigard%2C%20OR%2097223!5e0!3m2!1sen!2sus!4v1724960230462!5m2!1sen!2sus'
                        width='100%'
                        height='500'
                        style={{ border: 0, padding: 0, margin: 0 }}
                        allowFullScreen
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
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
