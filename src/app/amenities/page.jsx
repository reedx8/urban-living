import Image from 'next/image';
import amenitiesBanner from '/public/banners/amenities.png';
import styles from './amenities.module.css';

export default function Amenities() {
    return (
        <main>
            <section>
                <Image
                    src={amenitiesBanner}
                    priority={true}
                    alt='Amenities banner picture'
                    className={styles.amenitiesPic}
                />
            </section>
            <section>
                <h1>Amenities</h1>
            </section>
        </main>
    );
}
