"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "MSER 521 Course Website",
//   description: "Course materials and resources for MSER 521",
// };

function Navigation() {
  const pathname = usePathname();
  const normalizePath = (path: string) => path.replace(/\/$/, '');


  const navItems = [
    { href: "/", label: "Home" },
    { href: "/syllabus", label: "Syllabus" },
    { href: "/", label: "Schedule" },
    { href: "/assignments", label: "Assignments" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold"
            >
              MSER 521
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {navItems.slice(1).map((item) => {
              console.log(pathname, item.href)
              return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  normalizePath(pathname) === normalizePath(item.href)
                    ? "!font-semibold !border-sky-400"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            )}
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
