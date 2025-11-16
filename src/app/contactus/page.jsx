import ContactUsForm from '../components/form';
import Image from 'next/image';
import phoneIcon from '/public/icons/phone2.png';
import locationIcon from '/public/icons/location.png';
import timeIcon from '/public/icons/time.png';
import contactusBanner from '/public/banners/contact-us.png';
import styles from './contactus.module.css';
import Link from 'next/link';
import ContactNav from '@/app/components/contactnav';

export const metadata = {
    title: 'Urban Living at Fanno Creek | Contact Us',
    description:
        'Contact us today to schedule a tour or to learn more about our apartments.',
    canonicalUrl: 'https://www.urbanlivingatfanno.com/contactus',
};

export default function Contactus() {
    return (
        <main>
            <section className={styles.bannerSection}>
                <ContactNav />
                <Image
                    src={contactusBanner}
                    priority={true}
                    alt='Contact us banner picture'
                    className={styles.contactusPic}
                />
            </section>
            <section className={styles.pageContent}>
                {/* <iframe
                    src='https://integrityfirstpropertymanagementllc.managebuilding.com/Resident/Public/Contact?hidenav=true'
                    width='801'
                    height='740'
                    frameborder='0'
                ></iframe> */}
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
                            <Link href='tel:+15033725100'>(503) 372-5100</Link>
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
                            <a
                                href='https://maps.app.goo.gl/Fh6Krcm67VyPefay6'
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
                            <p>Monday - Sunday:</p>
                            <p>9:00 AM - 5:00 PM</p>
                            <br />
                            {/* <p>Saturday / Sunday:</p> */}
                            {/* <p>CLOSED</p> */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
