import { NextIntlClientProvider, hasLocale } from "next-intl";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await import("next-intl/server").then((mod) =>
    mod.getTranslations({ locale, namespace: "Metadata" })
  );

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        tr: "/tr",
        de: "/de",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "/",
      siteName: t("title"),
      locale: locale,
      type: "website",
    },
  } satisfies Metadata;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider>
          <Header /> {/* Header bileşenini ekle */}
          <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 md:p-24">
            {" "}
            {/* Ana içerik alanı */}
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
