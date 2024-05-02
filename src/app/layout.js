import { Archivo, Josefin_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollButton from './components/scrollButton';
import MoreInfoButton from './components/moreInfoButton';

// const customFont = Archivo({ subsets: ["latin"] });
const customFont = Josefin_Sans({ subsets: ['latin'] });

export const metadata = {
    title: 'Urban Living at Fanno Creek',
    description:
        'Urban Living at Fanno Creek is a new apartment community in Tigard, Oregon. We offer studio, one, and two bedroom apartments with modern amenities and a convenient location near shopping, dining, and public transportation. Contact us today to schedule a tour!',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={customFont.className}>
                <Navbar />
                {children}
                <Footer />
                <ScrollButton />
                <MoreInfoButton />
            </body>
        </html>
    );
}
