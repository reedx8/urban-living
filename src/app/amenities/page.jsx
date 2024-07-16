import Image from 'next/image';
import amenitiesBanner from '/public/banners/amenities.png';
import styles from './amenities.module.css';
import doubleArrow from '/public/icons/doubleArrow3.png';
import separator from '/public/images/separator.png';
import paw from '/public/icons/paw.png';
import group from '/public/icons/group.png';
import aptmt from '/public/icons/aptmt.png';
import blackLine from '/public/icons/blackLine.png';
import ContactNav from '@/app/components/contactnav';

export default function Amenities() {
    const commAmen1 = [
        'On-site maintenance',
        'Controlled access/gated',
        'Ground floor retail',
        'Elevator',
        'Package receiving office',
        'Close to Ash Avenue Dog Park',
        'Jogging trail nearby',
        'Walking distance to public transportation',
    ];
    const commAmen2 = [
        'Availability 24 hours',
        'Wi-Fi access',
        'Bike racks',
        'Community plaza',
        'Pet friendly',
        'Off street parking for rent',
        'Smoke free',
        'Detached garage available',
    ];

    const aptAmen1 = [
        'High speed internet access',
        'Refrigerator & dishwasher',
        'Quartz countertops & islands with seating room (select units)',
        'Wood-style plank flooring',
        'Lighting over kitchen islands (select units)',
        'High ceilings (10 ft.)',
        'Pantry space',
        'Self-cleaning oven',
        'Cable ready',
    ];

    const aptAmen2 = [
        'Microwave',
        'Keyless entry',
        'Energy-efficent stainless appliances',
        'Air conditioning',
        'Private balcony (select units)',
        'Under cabinet kitchen lighting',
        'Full size, front load washer & dryer',
        'Spacious walk-in closets (select units)',
    ];

    return (
        <main className={styles.main}>
            <section className={styles.bannerSection}>
                <ContactNav />
                <Image
                    src={amenitiesBanner}
                    priority={true}
                    alt='Amenities banner picture'
                    className={styles.amenitiesPic}
                />
            </section>
            <section className={styles.pageContent}>
                <div className={styles.contentContainer}>
                    <p>
                        Our community offers a variety of amenities to make your
                        stay with us as comfortable as possible.
                    </p>
                    <Image
                        src={blackLine}
                        alt='black line'
                        width={80}
                        height={'auto'}
                    />
                    <br />
                    <p>The amenities include:</p>
                    {/* <br /> */}
                </div>
                <div className={styles.contentContainer}>
                    <h2 className={styles.contentHeading}>
                        COMMUNITY AMENITIES
                        <Image
                            src={group}
                            width={25}
                            height={25}
                            alt='group icon'
                            style={{ marginLeft: '0.5rem' }}
                        />
                    </h2>
                    <div className={styles.amenitiesContainer}>
                        <div className={styles.amenities1}>
                            {commAmen1.map((amenity, index) => (
                                <div key={index} className={styles.listItem}>
                                    <Image
                                        src={doubleArrow}
                                        alt='Double arrow icon'
                                        className={styles.doubleArrow}
                                        width={30}
                                        height={30}
                                    />
                                    <p key={index}>{amenity}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.amenities2}>
                            {commAmen2.map((amenity, index) => (
                                <div key={index} className={styles.listItem}>
                                    <Image
                                        src={doubleArrow}
                                        alt='Double arrow icon'
                                        className={styles.doubleArrow}
                                        width={30}
                                        height={30}
                                    />
                                    <p key={index}>{amenity}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.separatorContainer}>
                    <Image
                        src={separator}
                        alt='Separator'
                        className={styles.separator}
                        priority={true}
                        width={'auto'}
                        height={50}
                    />
                </div>
                <div className={styles.contentContainer}>
                    <h2 className={styles.contentHeading}>
                        APARTMENT AMENITIES{' '}
                        <Image
                            src={aptmt}
                            width={25}
                            height={25}
                            alt='apartment icon'
                            style={{ marginLeft: '0.5rem' }}
                        />
                    </h2>
                    <div className={styles.amenitiesContainer}>
                        <div className={styles.amenities1}>
                            {aptAmen1.map((amenity, index) => (
                                <div key={index} className={styles.listItem}>
                                    <Image
                                        src={doubleArrow}
                                        alt='Double arrow icon'
                                        className={styles.doubleArrow}
                                        width={30}
                                        height={30}
                                    />
                                    <p>{amenity}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.amenities2}>
                            {aptAmen2.map((amenity, index) => (
                                <div key={index} className={styles.listItem}>
                                    <Image
                                        src={doubleArrow}
                                        alt='Double arrow icon'
                                        className={styles.doubleArrow}
                                        width={30}
                                        height={30}
                                    />
                                    <p>{amenity}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.separatorContainer}>
                    <Image
                        src={separator}
                        alt='Separator'
                        className={styles.separator}
                        priority={true}
                        width={'auto'}
                        height={50}
                    />
                </div>
                <div className={styles.contentContainer}>
                    <h2 className={styles.contentHeading}>
                        PET POLICY
                        <Image
                            src={paw}
                            width={25}
                            height={25}
                            alt='paw icon'
                            style={{ marginLeft: '0.5rem' }}
                        />
                    </h2>
                    <div className={styles.listItem}>
                        <Image
                            src={doubleArrow}
                            alt='Double arrow icon'
                            className={styles.doubleArrow}
                            width={30}
                            height={30}
                        />
                        <p>Less than 35 lb dogs and cats only</p>
                    </div>
                    <div className={styles.listItem}>
                        <Image
                            src={doubleArrow}
                            alt='Double arrow icon'
                            className={styles.doubleArrow}
                            width={30}
                            height={30}
                        />
                        <p>$35/month pet rent</p>
                    </div>
                    <div className={styles.listItem}>
                        <Image
                            src={doubleArrow}
                            alt='Double arrow icon'
                            className={styles.doubleArrow}
                            width={30}
                            height={30}
                        />
                        <p>$300 pet deposit/pet</p>
                    </div>
                    <br />
                    <p>
                        Max 2 pets allowed per unit. Must be older than 1 year
                        old. We do not have breed restrictions. Please contact
                        the office for more information on our pet policy.
                    </p>
                </div>
                <div className={styles.contentContainer}>
                    <Image
                        src={blackLine}
                        alt='black line'
                        width={80}
                        height={'auto'}
                    />
                    <p>
                        For more information on the amenities we offer, please
                        contact us.
                    </p>
                </div>
            </section>
        </main>
    );
}
