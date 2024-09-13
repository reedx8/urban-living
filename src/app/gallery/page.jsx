import styles from './gallery.module.css';
import Image from 'next/image';
import photoBanner from '/public/banners/gallery.png';
import blackLine from '/public/icons/blackLine.png';
import ContactNav from '@/app/components/contactnav';
import GalleryTabs from '@/app/components/galleryTabs';

export const metadata = {
    title: 'Urban Living at Fanno Creek | Gallery',
    description:
        'Explore our photo gallery of Urban Living at Fanno Creek. From beautiful apartments to unique spaces, we have it all.',
    canonicalUrl: 'https://www.urbanlivingatfanno.com/gallery',
};

export default function Gallery() {
    // const [photosTab, setPhotosTab] = useState(true);
    // const [videosTab, setVideosTab] = useState(false);

    return (
        <main className={styles.main}>
            <section className={styles.headingSection}>
                <ContactNav />
                <Image
                    src={photoBanner}
                    priority={true}
                    alt='photo banner of webpage'
                    className={styles.headingPicture}
                />
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
                <GalleryTabs />
            </section>
        </main>
    );
}
