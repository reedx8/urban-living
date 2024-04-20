import { Archivo, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollButton from './components/scrollButton';
import MoreInfoButton from './components/moreInfoButton';

// const customFont = Archivo({ subsets: ["latin"] });
const customFont = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ava at Fanno Creek",
  description: "Ava at Fanno Creek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
