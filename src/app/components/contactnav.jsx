import Link from 'next/link';
import Image from 'next/image';
import phone from '/public/icons/phone5.png';
import location from '/public/icons/location4.png';
import styles from '@/app/styles/contactnav.module.css';

export default function ContactNav() {
    return (
        <div className={styles.contactBar}>
            <div className={styles.locationLink}>
                <Image
                    src={location}
                    alt='location icon'
                    width={17}
                    height={'auto'}
                />
                <Link
                    href='https://www.google.com/maps/place/12547+SW+Main+St,+Tigard,+OR+97223/@45.429654,-122.776465,17z/data=!3m1!4b1!4m6!3m5!1s0x54950d2114301669:0x2945ff561fbec8c0!8m2!3d45.4296503!4d-122.7738901!16s%2Fg%2F11tmvl8_gd?entry=ttu'
                    target='_blank'
                    style={{ textDecoration: 'underline' }}
                >
                    12547 SW Main St, Tigard, OR
                </Link>
            </div>
            <Link href='/contactus'>
                <button className={styles.schedTourBtn}>SCHEDULE A TOUR</button>
            </Link>
            <div className={styles.contactLinks}>
                <div className={styles.phoneDiv}>
                    <Image src={phone} width={18} height={'auto'} />
                    <Link href='tel:+15033725100'>(503) 372-5100</Link>
                </div>
                <p>|</p>
                <Link
                    href='https://integrityfirstpropertymanagementllc.managebuilding.com/Resident/rental-application/new'
                    target='_blank'
                >
                    <button className={styles.applyNowBtn}>APPLY NOW</button>
                </Link>
            </div>
        </div>
    );
}
