import { useState } from 'react';
import Image from 'next/image';
import ellipsisIcon from '/public/icons/ellipsis.png';
import emailIcon from '/public/icons/email.png';
import phoneIcon from '/public/icons/phone.png';
import scheduleIcon from '/public/icons/schedule.png';
import styles from '../styles/moreInfoButton.module.css';
import { AnimatePresence, motion } from 'framer-motion';

function ScheduleButton() {
    const handleScheduleClick = () => {
        console.log('Schedule button clicked');
    };
    return (
        <button className={styles.scheduleButton} onClick={handleScheduleClick}>
            <Image
                src={scheduleIcon}
                width={30}
                height={'auto'}
                alt='schedule a tour'
            />
        </button>
    );
}
function EmailButton() {
    const handleEmailClick = () => {
        console.log('Email button clicked');
    };

    return (
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'backOut', duration: 0.75 }}
            layoutId='emailButton'
            exit={{ y: 40, opacity: 0 }}
        >
            <button className={styles.emailButton} onClick={handleEmailClick}>
                <Image
                    src={emailIcon}
                    width={30}
                    height={'auto'}
                    alt='email us'
                />
            </button>
        </motion.div>
    );
}
function PhoneButton() {
    const handlePhoneClick = () => {
        console.log('Phone button clicked');
    };
    return (
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'backOut', duration: 0.75 }}
            exit={{ y: 40, opacity: 0 }}
            layoutId='phoneButton'
        >
            <button className={styles.phoneButton} onClick={handlePhoneClick}>
                <Image
                    src={phoneIcon}
                    width={30}
                    height={'auto'}
                    alt='call us'
                    className={styles.phoneIcon}
                />
            </button>
        </motion.div>
    );
}

export default function MoreInfoButton() {
    const [viewEmailButton, setViewEmailButton] = useState(false);
    const [viewPhoneButton, setViewPhoneButton] = useState(false);
    const [viewScheduleButton, setViewScheduleButton] = useState(false);

    function handleMouseEnter(e) {
        if (e.target.value === 'more info') {
            console.log('Mouse entered more info button');
        }
    }

    function handleMoreInfoClick() {
        setViewEmailButton(!viewEmailButton);
        setViewPhoneButton(!viewPhoneButton);
        setViewScheduleButton(!viewScheduleButton);
    }

    return (
        <div className={styles.moreInfoContainer}>
            <AnimatePresence>
                {viewScheduleButton && <ScheduleButton />}
            </AnimatePresence>
            <AnimatePresence>
                {viewPhoneButton && <PhoneButton />}
            </AnimatePresence>
            <AnimatePresence>
                {viewEmailButton && <EmailButton />}
            </AnimatePresence>
            <button
                className={styles.moreInfoButton}
                onClick={handleMoreInfoClick}
                onMouseEnter={handleMouseEnter}
                value='more info'
            >
                <Image
                    src={ellipsisIcon}
                    width={30}
                    height={'auto'}
                    alt='more info'
                    className={styles.ellipsisIcon}
                />
            </button>
        </div>
    );
}
