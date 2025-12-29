import { Open_Sans, Cormorant_SC } from "next/font/google";
import localFont from "next/font/local";

export const iceCreamMan = localFont({
  src: [
    {
      path: "./IceCreamMan.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ice-cream-man",
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
});

export const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
