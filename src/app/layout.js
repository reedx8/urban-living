import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "Ava at Fanno Creek",
  description: "Ava at Fanno Creek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
