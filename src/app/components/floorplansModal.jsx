'use client';
import styles from '../styles/floorplansModal.module.css';
import Image from 'next/image';
import closeIcon from '/public/icons/close.png';
import bathIcon from '/public/icons/bath.png';
import bedIcon from '/public/icons/bed.png';
import sqftIcon from '/public/icons/dim.png';
import starIcon from '/public/icons/star.png';
import pointIcon from '/public/icons/point.png';
import verticalLine from '/public/icons/verticalLine.png';
import doubleArrowIcon from '/public/icons/doubleArrow.png';
import Link from 'next/link';
import logoOnly from '/public/logoOnly.png';
import { motion } from 'framer-motion';

export default function FloorplansModal({ isOpen, onClose, unit }) {
    if (!isOpen) return null;
    const unitsWithoutBalconiesAndClosets = ['Space H'];
    const unitsWithDens = ['Space E', 'Space I'];

    return (
        <div className={styles.modalBg}>
            <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
            >
                <div
                    className={styles.modalContainer}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.modal}>
                        <Image
                            src={unit.images}
                            alt={unit.name}
                            className={styles.unitPic}
                            width={500}
                            height={500}
                        />
                        <div className={styles.unitInfo}>
                            <div className={styles.unitHeader}>
                                <h1>{unit.name}</h1>
                                <Image
                                    src={logoOnly}
                                    alt='urban living logo'
                                    width={30}
                                    height={'auto'}
                                    className={styles.urbanLogo}
                                />
                            </div>
                            <div className={styles.modalRow}>
                                <Image
                                    src={bedIcon}
                                    alt='bed icon'
                                    width={20}
                                    height={20}
                                    className={styles.icons}
                                />
                                <p>{unit.bed}</p>
                                <Image
                                    src={verticalLine}
                                    alt='vertical line'
                                    width={50}
                                    height={50}
                                />
                                <Image
                                    src={bathIcon}
                                    alt='bath icon'
                                    width={20}
                                    height={20}
                                    className={styles.icons}
                                />
                                <p>{unit.bath} Bath</p>
                            </div>
                            <div className={styles.modalRow2}>
                                <Image
                                    src={sqftIcon}
                                    alt='sqft icon'
                                    width={20}
                                    height={20}
                                    className={styles.icons}
                                />
                                <p>{unit.sqft} Sq. Ft.</p>
                            </div>
                            <div className={styles.modalRow3}>
                                {/* <Image
                                    src={sqftIcon}
                                    alt='sqft icon'
                                    width={20}
                                    height={20}
                                    className={styles.icons}
                                /> */}
                                <p
                                    className={{
                                        style: 'font-style: italic',
                                    }}
                                >
                                    Apt # {unit.units}
                                </p>
                            </div>
                            <h2>Amenities</h2>
                            {unitsWithoutBalconiesAndClosets.includes(
                                unit.name
                            ) ? null : (
                                <div className={styles.specialAmenetie}>
                                    <div className={styles.iconBg}>
                                        <Image
                                            src={starIcon}
                                            width={15}
                                            height={15}
                                            alt='star icon'
                                        />
                                    </div>
                                    <p>Balcony view</p>
                                </div>
                            )}
                            {unitsWithDens.includes(unit.name) ? (
                                <div className={styles.specialAmenetie}>
                                    <div className={styles.iconBg}>
                                        <Image
                                            src={starIcon}
                                            width={15}
                                            height={15}
                                            alt='star icon'
                                        />
                                    </div>
                                    <p>Large den area</p>
                                </div>
                            ) : null}
                            {unitsWithoutBalconiesAndClosets.includes(
                                unit.name
                            ) ? null : (
                                <p>
                                    <Image
                                        src={pointIcon}
                                        width={15}
                                        height={15}
                                        alt='list point'
                                        className={styles.pointIcon}
                                    />
                                    Closet
                                </p>
                            )}
                            <p>
                                <Image
                                    src={pointIcon}
                                    width={15}
                                    height={15}
                                    alt='list point'
                                    className={styles.pointIcon}
                                />
                                Washer / Dryer in unit
                            </p>
                            <div className={styles.buttonContainer}>
                                <Link
                                    href='https://integrityfirstpropertymanagementllc.managebuilding.com/Resident/rental-application/new'
                                    style={{ width: '100%' }}
                                    target='_blank'
                                >
                                    <input
                                        type='button'
                                        value='CHECK AVAILABILITY'
                                        className={styles.checkAvailButton}
                                        /* Just navigate to contactus page for now */
                                    />
                                </Link>
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
                        </div>
                    </div>
                    <button className={styles.closeModal} onClick={onClose}>
                        <Image
                            src={closeIcon}
                            alt='close button'
                            className={styles.closeIcon}
                        />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
