import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";
import Navbar from "./_components/navbar";

export const metadata: Metadata = {
  title: "Stardust - Once Human Calculator App",
  description: "Stardust - Once Human Calculator App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <main className="mx-auto flex min-h-screen flex-col bg-gradient-to-b from-[#20C0C6] to-[#15162c] text-white">
          <Navbar></Navbar>
          <div className="flex flex-1 flex-col items-center justify-center gap-12 px-4 py-16">
            {children}
          </div>

          <div className="flex flex-col items-center justify-end py-16">
            <Link className="" href={`https://github.com/Zicore/`}>
              By Zicore
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
