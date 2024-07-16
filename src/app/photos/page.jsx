// 'use client';
import Carousel from '../components/carousel';
import styles from './photos.module.css';
import Image from 'next/image';
import photoBanner from '/public/banners/photo-gallery.png';
import blackLine from '/public/icons/blackLine.png';
import ContactNav from '@/app/components/contactnav';

export default function Photos() {
    return (
        <main className={styles.main}>
            <section className={styles.headingSection}>
                <ContactNav />
                <Image
                    src={photoBanner}
                    priority={true}
                    alt='photo banner'
                    className={styles.headingPicture}
                />
                {/* <video
                    className={styles.headingPicture}
                    autoPlay
                    muted
                    controls={false}
                    playsInline
                    style={{ pointerEvents: 'none' }}
                    // onContextMenu={(e) => e.preventDefault()}
                >
                    <source src='/banners/gallery.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                </video> */}
            </section>
            <section className={styles.pageContent}>
                <div className={styles.intro}>
                    <div>
                        <Image
                            src={blackLine}
                            alt='black line'
                            width={80}
                            height={'auto'}
                        />
                        <h1 className={styles.h1Text}>
                            COMFORTABLE APARTMENTS IN TIGARD, OR
                        </h1>
                    </div>
                    <p>
                        Explore Urban Living at Fanno Creek through our curated
                        photo gallery, showcasing the distinctive appeal of our
                        Tigard, OR, residence and a glimpse of what awaits you.
                    </p>
                </div>
                <div className={styles.carousel}>
                    <Carousel />
                </div>
            </section>
        </main>
    );
}
