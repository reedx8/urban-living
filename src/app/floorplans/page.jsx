import Image from 'next/image';
import floorplansBanner from '/public/banners/floor-plans.png';
import styles from './floorplans.module.css';
import ContactNav from '@/app/components/contactnav';
import FloorplansSection from '@/app/components/floorplansSection';

export const metadata = {
    title: 'Urban Living at Fanno Creek | Floor Plans',
    description:
        'Explore our floor plans of our apartments. Our floor plans are designed to fit your lifestyle and budget.',
    canonicalUrl: 'https://www.urbanlivingatfanno.com/floorplans',
};

export default function Floorplans() {
    return (
        <main className={styles.main}>
            <section className={styles.bannerSection}>
                <ContactNav />
                <Image
                    src={floorplansBanner}
                    priority={true}
                    alt='Floor Plans header picture'
                    className={styles.floorplansPic}
                />
            </section>
            <section className={styles.pageContent}>
                <FloorplansSection />
                {/* <div className={styles.headerText}>
                    <p>Pricing and availability subject to change</p>
                </div>
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
                                    <div className={styles.priceRow}>
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
                                <Link
                                    href='/contactus'
                                    style={{ width: '100%' }}
                                >
                                    <input
                                        type='button'
                                        value='CONTACT US'
                                        className={styles.contactusButton}
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div> */}
            </section>
            {/* {openModal && (
                <FloorplansModal
                    isOpen={openModal}
                    onClose={handleClose}
                    unit={currentUnit}
                />
            )} */}
        </main>
    );
}
