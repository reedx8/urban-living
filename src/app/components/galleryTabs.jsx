'use client';
import { useState } from 'react';
import Carousel from '@/app/components/carousel';
import styles from '@/app/gallery/gallery.module.css';
import { motion } from 'framer-motion';

export default function GalleryTabs() {
    const [photosTab, setPhotosTab] = useState(true);
    const [videosTab, setVideosTab] = useState(false);

    return (
        <>
            <div className={styles.tabNavigation}>
                <div className={styles.tab}>
                    <button
                        type='button'
                        className={
                            photosTab ? styles.activeTab : styles.inactiveTab
                        }
                        onClick={() => {
                            setPhotosTab(true);
                            setVideosTab(false);
                        }}
                    >
                        Photos
                    </button>
                </div>
                <div className={styles.tab}>
                    <button
                        type='button'
                        className={
                            videosTab ? styles.activeTab : styles.inactiveTab
                        }
                        onClick={() => {
                            setPhotosTab(false);
                            setVideosTab(true);
                        }}
                    >
                        Videos
                    </button>
                    {/* <button className={styles.tabButton}>Videos</button> */}
                </div>
            </div>
            {videosTab && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.75 }}
                    viewport={{ once: true }}
                    className={styles.videos}
                    key='videos'
                >
                    <div className={styles.videos}>
                        <video
                            width='100%'
                            height='100%'
                            controls
                            preload='auto'
                        >
                            <source
                                src='/videos/videoTour.mp4'
                                type='video/mp4'
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </motion.div>
            )}
            {photosTab && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.75 }}
                    viewport={{ once: true }}
                    className={styles.carousel}
                    key='carousel'
                >
                    <div className={styles.carousel}>
                        <Carousel />
                    </div>
                </motion.div>
            )}
        </>
    );
}
