'use client';
import { useState, useEffect } from 'react';
import styles from '@/app/floorplans/floorplans.module.css';
import bathIcon from '/public/icons/bath.png';
import bedIcon from '/public/icons/bed.png';
import sqftIcon from '/public/icons/dim.png';
import Link from 'next/link';
// import FloorplansModal from '../components/floorplansModal';
import Image from 'next/image';
import FloorplansModal from '@/app/components/floorplansModal';
import { motion } from 'framer-motion';

const units = [
    {
        id: 0,
        name: 'Space A',
        // image: unit1,
        images: '/floorplans/spacea.jpg', // dynamic imports
        price: '$1,665',
        bed: '1 Bed',
        bath: '1',
        sqft: '505',
        num: '203, 303',
        amenities: [
            'Fanno Creek views',
            'Washer / dryer in unit',
            'Dedicated heating & cooling system',
            'Noise controlled windows & walls',
            'High ceilings',
        ],
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
        num: '204, 304',
        amenities: [
            'Fanno Creek views',
            'Washer / dryer in unit',
            'Dedicated heating & cooling system',
            'Noise controlled windows & walls',
            'High ceilings',
        ],
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
        num: '205, 305',
        amenities: [
            'Fanno Creek views',
            'Washer / dryer in unit',
            'Dedicated heating & cooling system',
            'Noise controlled windows & walls',
            'High ceilings',
        ],
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
        num: '206, 306',
        amenities: [
            'Washer / dryer in unit',
            'Dedicated heating & cooling system',
            'Noise controlled windows & walls',
            'High ceilings',
        ],
    },
    {
        id: 4,
        name: 'Space E',
        // images: unit5,
        images: '/floorplans/spacee.jpg',
        price: '$1,950',
        bed: '1 Bed',
        bath: '1',
        sqft: '742',
        num: '207, 208, 213, 307, 308, 312',
        amenities: [
            'Washer / dryer in unit',
            'Dedicated heating & cooling system',
            'Noise controlled windows & walls',
            'High ceilings',
        ],
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
        num: '209, 309',
        amenities: [
            'Washer / dryer in unit',
            'Dedicated heating & cooling system',
            'Noise controlled windows & walls',
            'High ceilings',
        ],
    },
    {
        id: 6,
        name: 'Space G',
        // images: unit7,
        images: '/floorplans/spaceg.jpg',
        price: '$1,590',
        bed: '1 Bed',
        bath: '1',
        sqft: '470',
        num: '210, 310',
        amenities: [
            'Washer / dryer in unit',
            'Dedicated heating & cooling system',
            'Noise controlled windows & walls',
            'High ceilings',
        ],
    },
    {
        id: 7,
        name: 'Space H',
        // images: unit8,
        images: '/floorplans/spaceh.jpg',
        price: '$1,550',
        bed: 'Studio',
        bath: '1',
        sqft: '384',
        num: '211, 311',
        amenities: [
            'Washer / dryer in unit',
            'Dedicated heating & cooling system',
            'Noise controlled windows & walls',
            'High ceilings',
        ],
    },
    {
        id: 8,
        name: 'Space I',
        // images: unit9,
        images: '/floorplans/spacei.jpg',
        price: '$1,800',
        bed: '1 Bed',
        bath: '1',
        sqft: '742',
        num: '212',
        amenities: [
            'Washer / dryer in unit',
            'Dedicated heating & cooling system',
            'Noise controlled windows & walls',
            'High ceilings',
        ],
    },
];

export default function FloorplansSection() {
    const [floorplansTab, setFloorplansTab] = useState(true);
    // const [mappingTab, setMappingTab] = useState(false);

    // function handleTabClick() {
    //     setFloorplansTab(!floorplansTab);
    //     setMappingTab(!mappingTab);
    // }

    return (
        <>
            <div className={styles.headerText}>
                <p>Pricing and availability subject to change</p>
            </div>
            {/* <div className={styles.tabButtons}>
                <div>
                    <button
                        onClick={handleTabClick}
                        className={
                            floorplansTab
                                ? styles.activeTab
                                : styles.inactiveTab
                        }
                    >
                        Floor Plans
                    </button>
                </div>
                <div>
                    <button
                        onClick={handleTabClick}
                        className={
                            mappingTab ? styles.activeTab : styles.inactiveTab
                        }
                    >
                        Mapping
                    </button>
                </div>
            </div> */}
            {floorplansTab && <FloorPlans />}
            {/* {mappingTab && <Mapping />} */}
        </>
    );
}

function FloorPlans() {
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
        <>
            <div className={styles.floorplansContainer}>
                {units.map((unit) => (
                    <motion.div
                        key={unit.id}
                        initial={{ y: 70, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 0.75 }}
                        viewport={{ once: true }}
                    >
                        <div key={unit.name} className={styles.unitCard}>
                            <h2>{unit.name}</h2>
                            <p className={styles.unitNum}>Apt # {unit.num}</p>
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
                                        alt='square feet icon'
                                        className={styles.icons}
                                    />
                                    {unit.sqft} Sq. Ft.
                                </p>
                            </div>
                            <Link href='/contactus' style={{ width: '100%' }}>
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
            {openModal && (
                <FloorplansModal
                    isOpen={openModal}
                    onClose={handleClose}
                    unit={currentUnit}
                />
            )}
        </>
    );
}

// function Mapping() {
//     const [floorLevel, setFloorLevel] = useState('Floor2');
//     function updateFloorLevel(e) {
//         setFloorLevel(e.target.value);
//     }
//     return (
//         <div>
//             <div className={styles.table}>
//                 <TableHeader />
//                 <div className={styles.tableContent}>
//                     <TableRows floorLevel={floorLevel} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// function TableHeader() {
//     const headers = ['Space', 'Sq Ft', 'Apt #', 'Floor Level'];

//     return (
//         <div className={styles.headerRow}>
//             {headers.map((header) => (
//                 <p>{header}</p>
//             ))}
//         </div>
//     );
// }

// function TableRows({ floorLevel }) {
//     const units = [
//         {
//             name: 'A',
//             sqft: '505',
//             id2: '203',
//             id3: '303',
//             floor: '2',
//         },
//         {
//             name: 'B',
//             sqft: '608',
//             id2: '204',
//             id3: '304',
//             floor: '2',
//         },
//         {
//             name: 'C',
//             sqft: '639',
//             id2: '205',
//             id3: '305',
//             floor: '2',
//         },
//         {
//             name: 'D',
//             sqft: '513',
//             id2: '206',
//             id3: '306',
//             floor: '2',
//         },
//         {
//             name: 'E',
//             sqft: '742',
//             id2: '207, 208, 213',
//             id3: '307, 308, 312, 313',
//             floor: '2',
//         },
//         {
//             name: 'F',
//             sqft: '685',
//             id2: '209',
//             id3: '309',
//             floor: '2',
//         },
//         {
//             name: 'G',
//             sqft: '470',
//             id2: '210',
//             id3: '310',
//             floor: '2',
//         },
//         {
//             name: 'H',
//             sqft: '384',
//             id2: '211',
//             id3: '311',
//             floor: '2',
//         },
//         {
//             name: 'I',
//             sqft: '742',
//             id2: '212',
//             id3: '-',
//             floor: '2',
//         },
//     ];
//     return (
//         <div className={styles.tableRows}>
//             {units.map((unit) => (
//                 <div className={styles.tableRow}>
//                     <p>{unit.name}</p>
//                     <p>{unit.sqft}</p>
//                     <p>{floorLevel === 'Floor2' ? unit.id2 : unit.id3}</p>
//                     {/* <p>{floorLevel}</p> */}
//                     <p>{unit.floor}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }
