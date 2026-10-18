import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Kopi Nusantara",
  description: "Next js oleh Natanael Gunawan (535250046)",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (    
    <html lang="id">
      <body className={`${lato.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}