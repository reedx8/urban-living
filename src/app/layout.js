import Banner from './components/banner';
import { Archivo, Josefin_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollButton from './components/scrollButton';
import MoreInfoButton from './components/moreInfoButton';
import Script from 'next/script';

// const customFont = Archivo({ subsets: ['latin'] });
// const customFont = Josefin_Sans({ subsets: ['latin'] });
const customFont = Josefin_Sans({ subsets: ['latin'], fontDisplay: 'swap' });

export const metadata = {
    title: 'Urban Living at Fanno Creek',
    description:
        'Urban Living at Fanno Creek is a new apartment community in Tigard, Oregon on Main Street. We offer studio, one, and two bedroom apartments for rent with modern amenities and a convenient location near shopping, dining, and public transportation. Contact us today to schedule a tour!',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <head>
                <Script
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=G-K4RZTE3H63'
                ></Script>
                <Script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-K4RZTE3H63');
                    `}
                </Script>
            </head>
            <body className={customFont.className}>
                <Banner />
                <Navbar />
                {children}
                <Footer />
                <ScrollButton />
                <MoreInfoButton />
            </body>
        </html>
    );
}
