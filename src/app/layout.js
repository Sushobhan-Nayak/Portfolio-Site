import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import TransititonProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sushobhan Nayak Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransititonProvider>{children}</TransititonProvider>
      </body>
    </html>
  );
}
