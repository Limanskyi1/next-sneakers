import { Header } from "@/widgets/header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Cart } from "@/features/cart";
import Providers from "../_providers/Providers";
import "../styles/index.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXT SNEAKERS",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="container">
              <Header />
              {children}
            </div>
            <Cart />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
