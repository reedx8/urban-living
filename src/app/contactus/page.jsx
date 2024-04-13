import ContactUsForm from '../components/form';
import Image from 'next/image';
import phone from '../assets/icons/phone.png';
import phone2 from '../assets/icons/phone2.png';
import location from '../assets/icons/location.png';
import location2 from '../assets/icons/location2.png';
import time from '../assets/icons/time.png';
import time2 from '../assets/icons/time2.png';
import contactus from '../assets/contactus.png';
import styles from './contactus.module.css';

export default function Contactus() {
    return (
        <main>
            <section>
                <Image
                    src={contactus}
                    alt='Contact Us header picture'
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
                                src={phone2}
                                alt='Phone icon'
                                className={styles.icons}
                            />
                            (123) 456-7890
                        </p>
                    </div>
                    <div className={styles.horizontalLine}></div>
                    <div className={styles.locationInfo}>
                        <Image
                            src={location2}
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
                            src={time2}
                            alt='Time icon'
                            className={styles.icons}
                        />
                        <div>
                            <p>Monday - Friday:</p>
                            <p>10:00 AM - 6:00 PM</p>
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
