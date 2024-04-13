'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/form.module.css';

export default function ContactUsForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

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
