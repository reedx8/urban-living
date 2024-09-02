'use client';
import React from 'react';
import Image from 'next/image';
import styles from './virtualtours.module.css';
import vtourBanner from '/public/banners/virtualtours.png';
import ContactNav from '@/app/components/contactnav';
import { motion } from 'framer-motion';

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
                <motion.div
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
            </section>
        </main>
    );
}
