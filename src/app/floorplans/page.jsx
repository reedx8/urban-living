import Image from 'next/image';
import floorplans from '../assets/floorplans.png';
import styles from './floorplans.module.css';
export default function Floorplans() {
    return (
        <main className={styles.main}>
            <section>
                <Image
                    src={floorplans}
                    alt='Floor Plans header picture'
                    className={styles.floorplansPic}
                />
            </section>
            <section>
                <h1>Floor Plans</h1>
            </section>
        </main>
    );
}
