import { content as c } from "@/lib/content";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const { title, description } = c.home.hero;

export const metadata: Metadata = {
  title: { default: title, template: "%s - WarungOta" },
  description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-warungota-favicon.png" />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <SessionProvider session={session}>
          <Toaster richColors position="bottom-right" />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
