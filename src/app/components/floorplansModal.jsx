import styles from '../styles/floorplansModal.module.css';
import Image from 'next/image';
import closeIcon from '../assets/icons/close.png';
import bathIcon from '../assets/icons/bath.png';
import bedIcon from '../assets/icons/bed.png';
import sqftIcon from '../assets/icons/dim.png';
import starIcon from '../assets/icons/star.png';
import pointIcon from '../assets/icons/point.png';
import verticalLine from '../assets/icons/verticalLine.png';
import Link from 'next/link';
import avaLogo from '../assets/ava.png';

export default function FloorplansModal({ isOpen, onClose, unit }) {
    if (!isOpen) return null;
    const unitsWithoutBalconiesAndClosets = ['Unit 8'];
    const unitsWithDens = ['Unit 5', 'Unit 9'];

    return (
        <div className={styles.modalBg}>
            <div
                className={styles.modalContainer}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modal}>
                    <Image
                        src={unit.image}
                        alt={unit.name}
                        className={styles.unitPic}
                        width={500}
                        height={500}
                    />
                    <div className={styles.unitInfo}>
                        <div className={styles.unitHeader}>
                            <h1>{unit.name}</h1>
                            <Image
                                src={avaLogo}
                                alt='ava logo'
                                width={33}
                                height={24}
                                className={styles.avaLogo}
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
                        <Link href='/contactus' style={{ width: '100%' }}>
                            <input
                                type='button'
                                value='CONTACT US'
                                className={styles.contactusButton}
                                /* Just navigate to contactus page for now */
                            />
                        </Link>
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
        </div>
    );
}
