import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '400','500','900']
});

export const metadata: Metadata = {
  title: "Omar Ledesma | Front-End Developer",
  description: "Portafolio responsive y moderno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={`${poppins.className} relative`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
