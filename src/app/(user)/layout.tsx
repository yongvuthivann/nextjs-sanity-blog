import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { FaGithub } from "react-icons/fa";
import { ViewTransitions } from "next-view-transitions";

import { ThemeProvider } from "@/providers/theme-provider";
import MainLayout from "@/layout/main-layout";
import { ModeToggle } from "@/components/mode-toggle";
import Footer from "@/components/footer";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Sanity",
  description:
    "Next.js x Sanity is a powerful combination of technologies for building modern, content-rich web applications with ease. Next.js is a React framework that provides server-side rendering, static site generation, and client-side routing, offering high performance and SEO-friendly web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <MainLayout>
              <div className="flex items-center justify-between">
                <Link href="/" className="font-semibold text-lg">
                  Nextjs x Sanity
                </Link>

                <div className="flex items-center space-x-6">
                  <a
                    href="https://github.com/yongvuthivann/nextjs-sanity-blog"
                    target="__blank">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <ModeToggle />
                </div>
              </div>
              <hr className="my-5" />
              {children}
              <Footer />
            </MainLayout>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
