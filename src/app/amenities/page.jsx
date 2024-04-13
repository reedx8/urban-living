import Image from 'next/image';
import amenities from '../assets/amenities.png';
import styles from './amenities.module.css';

export default function Amenities() {
    return (
        <main>
            <section>
                <Image
                    src={amenities}
                    alt='Amenities header picture'
                    className={styles.amenitiesPic}
                />
            </section>
            <section>
                <h1>Amenities</h1>
            </section>
        </main>
    );
}
