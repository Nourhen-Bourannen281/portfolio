import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";
import CursorEffect from "../../components/CursorEffect";
import ThemeScript from "../../components/ThemeScript";
import "../globals.css";

export const metadata: Metadata = {
  title: "Nourhen Bourannen | Full-Stack Developer",
  description:
    "Portfolio of Nourhen Bourannen, full-stack MERN developer and web QA tester based in Gafsa, Tunisia.",
    icons: {
    icon: "/icon.png?v=2",
    apple: "/icon.png?v=2",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <CursorEffect />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}