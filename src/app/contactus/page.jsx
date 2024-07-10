import ContactUsForm from '../components/form';
import Image from 'next/image';
import phoneIcon from '/public/icons/phone2.png';
import locationIcon from '/public/icons/location.png';
import timeIcon from '/public/icons/time.png';
import contactusBanner from '/public/banners/contact-us.png';
import styles from './contactus.module.css';

export default function Contactus() {
    return (
        <main>
            <section>
                <Image
                    src={contactusBanner}
                    priority={true}
                    alt='Contact us banner picture'
                    className={styles.contactusPic}
                />
            </section>
            <section className={styles.pageContent}>
                <div className={styles.contactFormContainer}>
                    <p className={styles.reqFieldText}>
                        * indicates required fields.
                    </p>
                    <ContactUsForm />
                </div>
                <div className={styles.contactInfoContainer}>
                    <div className={styles.phoneInfo}>
                        <p>
                            <Image
                                src={phoneIcon}
                                alt='Phone icon'
                                className={styles.icons}
                            />
                            (971) 707-3095
                        </p>
                    </div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.locationInfo}>
                        <Image
                            src={locationIcon}
                            alt='Location icon'
                            className={styles.icons}
                        />
                        <div>
                            {/* / make this address a link to google maps: */}
                            <a
                                href='https://maps.app.goo.gl/8uZK1uzbMaG8oCy67'
                                target='_blank'
                                // rel='noreferrer'
                            >
                                <p className={styles.addressText}>
                                    12547 SW Main St
                                </p>
                                <p className={styles.addressText}>
                                    Tigard, OR 97223
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.timeInfo}>
                        <Image
                            src={timeIcon}
                            alt='Time icon'
                            className={styles.icons}
                        />
                        <div>
                            <p>Monday - Friday:</p>
                            <p>9:00 AM - 5:00 PM</p>
                            <br />
                            <p>Saturday / Sunday:</p>
                            <p>CLOSED</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
