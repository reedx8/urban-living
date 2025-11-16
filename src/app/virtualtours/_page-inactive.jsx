// Archived page for virtual tours no longer in use. This was used when they still had an apartments.com subscription.
import Image from 'next/image';
import styles from './virtualtours.module.css';
import vtourBanner from '/public/banners/virtualtours.png';
import ContactNav from '@/app/components/contactnav';
import VirtualToursSection from '@/app/components/virtualToursSection';

export const metadata = {
    title: 'Urban Living at Fanno Creek | Virtual Tours',
    description:
        'Enjoy a virtual tour of our apartments with our virtual tour guide. Our virtual tour is a 360-degree tour of our apartments.',
    canonicalUrl: 'https://www.urbanlivingatfanno.com/virtualtours',
};

export default function VirtualTours() {
    return (
        <main className={styles.main}>
            <section className={styles.bannerSection}>
                <ContactNav />
                <Image
                    src={vtourBanner}
                    priority={true}
                    alt='Virtual tour webpage banner'
                    className={styles.banner}
                />
            </section>
            <section className={styles.pageContent}>
                <VirtualToursSection />
            </section>
        </main>
    );
}
