import { Quicksand, Bubblegum_Sans } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

const bubblegum = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bubblegum",
});

export const metadata = {
  title: "Livi's Happy Paws",
  description: "Trusted dog walking services in the Greenbriar neighborhood by Livi, a responsible and experienced young dog walker.",
  icons: {
    icon: [
      {
        url: '/paw.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quicksand.variable} ${bubblegum.variable}`}>
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
