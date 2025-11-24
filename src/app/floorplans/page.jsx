// 'use client';
// import { useState } from 'react';
import Image from 'next/image';
import floorplansBanner from '/public/banners/floor-plans.png';
import styles from './floorplans.module.css';
import ContactNav from '@/app/components/contactnav';
import FloorplansSection from '@/app/components/floorplansSection';
// import MappingSection from '@/app/components/mappingSection';

export const metadata = {
    title: 'Urban Living at Fanno Creek | Floor Plans',
    description:
        'Explore our floor plans of our apartments. Our floor plans are designed to fit your lifestyle and budget.',
    canonicalUrl: 'https://www.urbanlivingatfanno.com/floorplans',
};

export default function Floorplans() {
    return (
        <main className={styles.main}>
            <section className={styles.bannerSection}>
                <ContactNav />
                <Image
                    src={floorplansBanner}
                    priority={true}
                    alt='Floor Plans header picture'
                    className={styles.floorplansPic}
                />
            </section>
            <section className={styles.pageContent}>
                <FloorplansSection />
            </section>
            {/* {openModal && (
                <FloorplansModal
                    isOpen={openModal}
                    onClose={handleClose}
                    unit={currentUnit}
                />
            )} */}
        </main>
    );
}
