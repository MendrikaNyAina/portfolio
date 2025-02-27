/* eslint-disable react/react-in-jsx-scope */


import type { Metadata } from "next";
import { Jost, Karantina } from "next/font/google";
import { ThemeProvider } from "./_provider/ThemeProvider";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jost",
  display: "swap"
})
const karantina = Karantina({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-karantina",
  display: "swap"
})
export const metadata: Metadata = {
  title: "Randrianarison Mendrika - Developer fullstack",
  description: "Java, react, typescript, sql, neo4J"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${jost.variable} ${karantina.variable}`}>
        <ThemeProvider>
         
            {children}
        </ThemeProvider>
      </body >

    </html >

  );
}
