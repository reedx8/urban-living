'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import floorplansBanner from '/public/banners/floor-plans.png';
import styles from './floorplans.module.css';
// import unit1 from '../assets/floorplans/unit1.jpg';
// import unit2 from '../assets/floorplans/unit2.jpg';
// import unit3 from '../assets/floorplans/unit3.jpg';
// import unit4 from '../assets/floorplans/unit4.jpg';
// import unit5 from '../assets/floorplans/unit5.jpg';
// import unit6 from '../assets/floorplans/unit6.jpg';
// import unit7 from '../assets/floorplans/unit7.jpg';
// import unit8 from '../assets/floorplans/unit8.jpg';
// import unit9 from '../assets/floorplans/unit9.jpg';
import bathIcon from '/public/icons/bath.png';
import bedIcon from '/public/icons/bed.png';
import sqftIcon from '/public/icons/dim.png';
import Link from 'next/link';
import FloorplansModal from '../components/floorplansModal';
import { motion } from 'framer-motion';

const units = [
    {
        id: 0,
        name: 'Space A',
        // image: unit1,
        images: '/floorplans/spacea.jpg', // dynamic imports
        price: '$1,750',
        bed: '1 Bed',
        bath: '1',
        sqft: '505',
    },
    {
        id: 1,
        name: 'Space B',
        // images: unit2,
        images: '/floorplans/spaceb.jpg',
        price: '$1,875',
        bed: '1 Bed',
        bath: '1',
        sqft: '608',
    },
    {
        id: 2,
        name: 'Space C',
        // images: unit3,
        images: '/floorplans/spacec.jpg',
        price: '$1,850',
        bed: '1 Bed',
        bath: '1',
        sqft: '639',
    },
    {
        id: 3,
        name: 'Space D',
        // images: unit4,
        images: '/floorplans/spaced.jpg',
        price: '$1,750',
        bed: '1 Bed',
        bath: '1',
        sqft: '513',
    },
    {
        id: 4,
        name: 'Space E',
        // images: unit5,
        images: '/floorplans/spacee.jpg',
        price: '$2,150',
        bed: '1 Bed',
        bath: '1',
        sqft: '742',
    },
    {
        id: 5,
        name: 'Space F',
        // images: unit6,
        images: '/floorplans/spacef.jpg',
        price: '$1,950',
        bed: '1 Bed',
        bath: '1',
        sqft: '685',
    },
    {
        id: 6,
        name: 'Space G',
        // images: unit7,
        images: '/floorplans/spaceg.jpg',
        price: '$1,650',
        bed: '1 Bed',
        bath: '1',
        sqft: '470',
    },
    {
        id: 7,
        name: 'Space H',
        // images: unit8,
        images: '/floorplans/spaceh.jpg',
        price: '$1,510',
        bed: 'Studio',
        bath: '1',
        sqft: '384',
    },
    {
        id: 8,
        name: 'Space I',
        // images: unit9,
        images: '/floorplans/spacei.jpg',
        price: '$2,150',
        bed: '1 Bed',
        bath: '1',
        sqft: '742',
    },
];

export default function Floorplans() {
    const [openModal, setOpenModal] = useState(false);
    const [currentUnit, setCurrentUnit] = useState(null);

    // const imageName = '';
    // const imagePath =  `../assets/floorplans/${imageName}.jpg`;

    // Modal for more info on a floorplan
    function handleImageClick(e) {
        setOpenModal(true);
    }

    function handleClose() {
        setOpenModal(false);
    }

    return (
        <main className={styles.main}>
            {/* {imageClick && <FloorplansModal />} */}
            <section>
                <Image
                    src={floorplansBanner}
                    priority={true}
                    alt='Floor Plans header picture'
                    className={styles.floorplansPic}
                />
            </section>
            <section className={styles.pageContent}>
                <div className={styles.headerText}>
                    <p>Pricing and availability subject to change</p>
                </div>
                <div className={styles.floorplansContainer}>
                    {units.map((unit) => (
                        <motion.div
                            key={unit.id}
                            initial={{ y: 70 }}
                            whileInView={{ y: 0 }}
                            transition={{ ease: 'easeInOut', duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div key={unit.name} className={styles.unitCard}>
                                <h2>{unit.name}</h2>
                                <Image
                                    src={unit.images}
                                    alt={unit.name}
                                    className={styles.unitPic}
                                    onClick={() => {
                                        setCurrentUnit(unit);
                                        handleImageClick();
                                    }}
                                    width={250}
                                    height={250}
                                    priority={true}
                                />
                                <div className={styles.unitInfo}>
                                    {/* <h2>{unit.name}</h2> */}
                                    <div className={styles.priceRow}>
                                        {/* <p>Starting at <span className={styles.prive}>{unit.price}</span></p> */}
                                        <p>
                                            Starting at{' '}
                                            <span className={styles.price}>
                                                {unit.price}
                                            </span>
                                        </p>
                                    </div>
                                    <div className={styles.cardRow}>
                                        <p>
                                            <Image
                                                src={bedIcon}
                                                alt='bed icon'
                                                className={styles.icons}
                                            />
                                            {unit.bed}
                                        </p>
                                        <p>
                                            <Image
                                                src={bathIcon}
                                                alt='bath icon'
                                                className={styles.icons}
                                            />
                                            {unit.bath} Bath
                                        </p>
                                    </div>
                                    <p>
                                        <Image
                                            src={sqftIcon}
                                            alt='sqft icon'
                                            className={styles.icons}
                                        />
                                        {unit.sqft} Sq. Ft.
                                    </p>
                                </div>
                                <Link
                                    href='/contactus'
                                    style={{ width: '100%' }}
                                >
                                    <input
                                        type='button'
                                        value='CONTACT US'
                                        className={styles.contactusButton}
                                        /* Just navigate to contactus page for now */
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            {openModal && (
                <FloorplansModal
                    isOpen={openModal}
                    onClose={handleClose}
                    unit={currentUnit}
                />
            )}
        </main>
    );
}
