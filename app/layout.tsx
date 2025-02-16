/* eslint-disable react/react-in-jsx-scope */
import type { Metadata } from "next";

import { Jost } from "next/font/google";
import { ThemeProvider } from "./_provider/ThemeProvider";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jost",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Randrianarison Mendrika - Developer fullstack",
  description: "Java, react, typescript, sql, neo4J",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body>
        <ThemeProvider>
          <div className={`${jost.variable} h-dvh bg-gradient-to-b from-background1 to-background2 bg-cover bg-no-repeat font-jost`}>
            {children}
          </div>
        </ThemeProvider>
      </body >

    </html >

  );
}
