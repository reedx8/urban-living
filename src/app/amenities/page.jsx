import Image from 'next/image';
import amenitiesBanner from '/public/banners/amenities.png';
import styles from './amenities.module.css';
import doubleArrow from '/public/icons/doubleArrow3.png';
import separator from '/public/images/separator.png';
import paw from '/public/icons/paw.png';
import group from '/public/icons/group.png';
import aptmt from '/public/icons/aptmt.png';

export default function Amenities() {
    const commAmen1 = [
        'On-site maintenance',
        'Controlled access/gated',
        'Ground floor retail',
        'Elevator',
        'Package receiving office',
    ];
    const commAmen2 = [
        'Availability 24 hours',
        'Wi-Fi access',
        'Bike racks',
        'Community plaza',
    ];

    const aptAmen1 = [
        'Cable ready',
        'Dishwasher',
        'Quartz countertops and islands with seating room (select units)',
        'Hardwood Flooring',
        'Lighting over kitchen islands (select units)',
        'High ceilings',
        'Pantry space',
    ];

    const aptAmen2 = [
        'Keyless entry',
        'Efficient appliances',
        'Air conditioning',
        'Balcony space (select units)',
        'Under cabinet kitchen lighting',
        'Full size, front load in-home washer & dryer',
        'Spacious walk-in closets (select units)',
    ];

    return (
        <main className={styles.main}>
            <section>
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
                        <p>Less than 35 lb dogs and cats only </p>
                    </div>
                    <div className={styles.listItem}>
                        <Image
                            src={doubleArrow}
                            alt='Double arrow icon'
                            className={styles.doubleArrow}
                            width={30}
                            height={30}
                        />
                        <p>Max 2 allowed per apartment unit</p>
                    </div>
                    <p>
                        We do not have breed restrictions. Please contact the
                        office for more information on our pet policy.
                    </p>
                </div>
                <div className={styles.contentContainer}>
                    <p>
                        For more information on the amenities we offer, please
                        contact us.
                    </p>
                </div>
            </section>
        </main>
    );
}
