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
                {/* <motion.div
                    key='vtours'
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.75 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.tour}>
                        <h1>Space E - Floor Plan (742 SF)</h1>
                        <iframe
                            width='100%'
                            height='480'
                            // width='853'
                            // height='480'
                            src='https://my.matterport.com/show/?m=ULMGqYjpbuH'
                            frameBorder='0'
                            allowFullScreen
                            allow='xr-spatial-tracking'
                        ></iframe>
                    </div>
                </motion.div>
                <motion.div
                    key='vtours2'
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.75 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.tour}>
                        <h1>Space F - Floor Plan (685 SF)</h1>
                        <iframe
                            width='100%'
                            height='480'
                            src='https://my.matterport.com/show/?m=bHoz3wWTPQE'
                            frameBorder='0'
                            allowFullScreen
                            allow='xr-spatial-tracking'
                        ></iframe>
                    </div>
                </motion.div>
                <motion.div
                    key='vtours3'
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.75 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.tour}>
                        <h1>Space C - Floor Plan (639SF)</h1>
                        <iframe
                            width='100%'
                            height='480'
                            src='https://my.matterport.com/show/?m=B9mHLjjTJAe'
                            frameBorder='0'
                            allowFullScreen
                            allow='xr-spatial-tracking'
                        ></iframe>
                    </div>
                </motion.div>
                <motion.div
                    key='vtours4'
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.75 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.tour}>
                        <h1>Space B - Floor Plan (608SF)</h1>
                        <iframe
                            width='100%'
                            height='480'
                            src='https://my.matterport.com/show/?m=8g4JrL9zVJh'
                            frameBorder='0'
                            allowFullScreen
                            allow='xr-spatial-tracking'
                        ></iframe>
                    </div>
                </motion.div>
                <motion.div
                    key='vtours5'
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.75 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.tour}>
                        <h1>Space I (ADA) - Floor Plan (742SF)</h1>
                        <iframe
                            width='100%'
                            height='480'
                            src='https://my.matterport.com/show/?m=ikcLo7V2DSs'
                            frameBorder='0'
                            allowFullScreen
                            allow='xr-spatial-tracking'
                        ></iframe>
                    </div>
                </motion.div>
                <motion.div
                    key='vtours6'
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.75 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.tour}>
                        <h1>Space D - Floor Plan (513SF)</h1>
                        <iframe
                            width='100%'
                            height='480'
                            src='https://my.matterport.com/show/?m=5fXuSmMKm8K'
                            frameBorder='0'
                            allowFullScreen
                            allow='xr-spatial-tracking'
                        ></iframe>
                    </div>
                </motion.div> */}
            </section>
        </main>
    );
}
