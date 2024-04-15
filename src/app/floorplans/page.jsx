import Image from 'next/image';
import floorplans from '../assets/floorplans.png';
import styles from './floorplans.module.css';
import unit1 from '../assets/floorplans/unit1.jpg';
import unit2 from '../assets/floorplans/unit2.jpg';
import unit3 from '../assets/floorplans/unit3.jpg';
import unit4 from '../assets/floorplans/unit4.jpg';
import unit5 from '../assets/floorplans/unit5.jpg';
import unit6 from '../assets/floorplans/unit6.jpg';
import unit7 from '../assets/floorplans/unit7.jpg';
import unit8 from '../assets/floorplans/unit8.jpg';
import unit9 from '../assets/floorplans/unit9.jpg';
import bath from '../assets/icons/bath.png';
import bed from '../assets/icons/bed.png';
import sqft from '../assets/icons/dim.png';
import Link from 'next/link';

const units = [
    {
        name: 'Unit 1',
        image: unit1,
        price: '$',
        bed: '1',
        bath: '1',
        sqft: '505',
    },
    {
        name: 'Unit 2',
        image: unit2,
        price: '$',
        bed: '1',
        bath: '1',
        sqft: '608',
    },
    {
        name: 'Unit 3',
        image: unit3,
        price: '$',
        bed: '1',
        bath: '1',
        sqft: '639',
    },
    {
        name: 'Unit 4',
        image: unit4,
        price: '$',
        bed: '1',
        bath: '1',
        sqft: '513',
    },
    {
        name: 'Unit 5',
        image: unit5,
        price: '$',
        bed: '1',
        bath: '1',
        sqft: '742',
    },
    {
        name: 'Unit 6',
        image: unit6,
        price: '$',
        bed: '1',
        bath: '1',
        sqft: '685',
    },
    {
        name: 'Unit 7',
        image: unit7,
        price: '$',
        bed: '1',
        bath: '1',
        sqft: '470',
    },
    {
        name: 'Unit 8',
        image: unit8,
        price: '$',
        bed: '1',
        bath: '1',
        sqft: '384',
    },
    {
        name: 'Unit 9',
        image: unit9,
        price: '$',
        bed: '1',
        bath: '1',
        sqft: '742',
    },
];

export default function Floorplans() {
    function handleContactUsClick() {
        // navigate to contactus page
    }
    return (
        <main className={styles.main}>
            <section>
                <Image
                    src={floorplans}
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
                        <div key={unit.name} className={styles.unitCard}>
                            <h2>{unit.name}</h2>
                            <Image
                                src={unit.image}
                                alt={unit.name}
                                className={styles.unitPic}
                            />
                            <div className={styles.unitInfo}>
                                {/* <h2>{unit.name}</h2> */}
                                <div className={styles.priceRow}>
                                    {/* <p>Starting at <span className={styles.prive}>{unit.price}</span></p> */}
                                    <p>
                                        Starting at{' '}
                                        <span className={styles.price}>
                                            $1,800
                                        </span>
                                    </p>
                                </div>
                                <div className={styles.cardRow}>
                                    <p>
                                        <Image
                                            src={bed}
                                            alt='bed icon'
                                            className={styles.icons}
                                        />
                                        {unit.bed} Bed
                                    </p>
                                    <p>
                                        <Image
                                            src={bath}
                                            alt='bath icon'
                                            className={styles.icons}
                                        />
                                        {unit.bath} Bath
                                    </p>
                                </div>
                                <p>
                                    <Image
                                        src={sqft}
                                        alt='sqft icon'
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
                    ))}
                </div>
            </section>
        </main>
    );
}
