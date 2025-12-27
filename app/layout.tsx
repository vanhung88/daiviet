import type { Metadata } from "next";
import "../public/styles/globals.css";
import { iceCreamMan } from "../public/styles/fonts";

export const metadata: Metadata = {
  title: "Legend of Dai Viet",
  description: "Legends of Dai Viet: Two Emperors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased ${iceCreamMan.className}`}>
        {children}
      </body>
    </html>
  );
}
