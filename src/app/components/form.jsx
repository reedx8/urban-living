'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/form.module.css';

export default function ContactUsForm() {
    const form = useRef();
    const [formMountTime] = useState(Date.now());

    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current.website.value) {
            // bot protection/prevention
            return;
        }

        const timeTaken = Date.now() - formMountTime;
        if (timeTaken < 8000) {
            // 3 seconds
            // console.log('form submitted too quickly');
            return;
        }

        // console.log('sent');
        // return;

        emailjs
            .sendForm('service_teuwr73', 'template_0r5vsyv', form.current, {
                publicKey: 'VmQT8PspTSidF-6ug',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );

        e.target.reset();
    };

    return (
        <form ref={form} id='form' className={styles.form} onSubmit={sendEmail}>
            <input
                name='website' // for bot detection
                type='text'
                style={{ display: 'none' }}
                tabIndex='-1'
                autoComplete='none'
            />
            <input
                name='user_name'
                type='text'
                className={styles.feedbackInput}
                placeholder='Name*'
                required
                /* prevent autofill and autocomplete */
                autoComplete='off'
                /* prevent 1password from autofilling */
            />
            <input
                name='user_email'
                type='email'
                className={styles.feedbackInput}
                placeholder='Email*'
                required
                autoCapitalize='none'
                autoComplete='off'
            />
            <input
                name='phone_number'
                type='tel'
                className={styles.feedbackInput}
                placeholder='Phone number (optional)'
                autoCapitalize='none'
                autoComplete='off'
            />
            <textarea
                name='message'
                className={`${styles.feedbackInput} ${styles.feedbackTextarea}`}
                placeholder={'Message\u207A'}
                required
            ></textarea>
            <input
                type='submit'
                value='SEND MY MESSAGE'
                className={styles.submitButton}
            />
        </form>
    );
}
