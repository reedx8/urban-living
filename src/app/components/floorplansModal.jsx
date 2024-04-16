import styles from '../styles/floorplansModal.module.css';
import Image from 'next/image';
import close from '../assets/icons/close.png';

export default function FloorplansModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalBg}>
            <div
                className={styles.modalContainer}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modal}>
                    <p>Modal</p>
                </div>
                <button className={styles.closeModal} onClick={onClose}>
                    <Image src={close} alt='close' className={styles.icons} />
                </button>
            </div>
        </div>
    );
}
