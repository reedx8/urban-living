'use client';
import { motion } from 'framer-motion';

/* 
This is a template component that is automatically used by next.js 
to wrap all the pages in the app (from layout.js). Pages will fade
in and out when navigating between pages.
*/
export default function Template({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
        >
            {children}
        </motion.div>
    );
}
