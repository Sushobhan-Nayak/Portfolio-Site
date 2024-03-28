import { Inter } from "next/font/google";
import "./globals.css";
import TransititonProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sushobhan Nayak",
  description: "Created using NextJS, Tailwind, Framer-Motion",
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
