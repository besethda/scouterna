import type { Metadata } from "next";
import { Varela_Round, Fraunces, Albert_Sans, Public_Sans } from "next/font/google";
import "./globals.css";
import { TranslateContent } from "@/translateContent/translate";
import { En } from "@/messages/en";
import { Sv } from "@/messages/sv"
import { use } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    return {
      title: locale === 'en' ? "HSS | Home" : "HSS | Hem",
      description: "HSS Website",
    }
}

const varela = Varela_Round({
  variable: "--font-varela",
  subsets: ["latin"],
  weight: "400",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

const public_sans = Public_Sans({
  variable: "--font-public",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "HSS | Hem",
//   description: "HSS Website",
// };

type Params = {
  locale: string;
};

export default function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<Params> }>) {

  const { locale } = use(params)
  const messages = locale === "en" ? En : Sv

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${varela.variable} ${public_sans.variable} ${albert.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TranslateContent value={messages}>
          <Header />
          {children}
          <Footer />
        </TranslateContent >
      </body >
    </html >
  );
}