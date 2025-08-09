import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MSER 521 Course Website",
  description: "Course materials and resources for MSER 521",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold">MSER 521</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/syllabus">
                  Syllabus
                </Link>
                <Link href="/">
                  Schedule
                </Link>
                <Link href="/assignments">
                  Assignments
                </Link>
                <Link href="/resources">
                  Resources
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
