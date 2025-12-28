import type { Metadata } from "next";
import "../../public/styles/globals.css";
import { openSans } from "../../public/styles/fonts";

export const metadata: Metadata = {
  title: "Legend of Dai Viet",
  description: "Legends of Dai Viet: Two Emperors",
};
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/src/component/Header";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <body className={`antialiased ${openSans.className}`}>
        <NextIntlClientProvider>
          {
            <>
              <Header />
              {children}
            </>
          }
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
